"use client";
import SelectionComponent from "@/components/collectionViewFilter/selectionComponent";
import DisplayComponent from "@/components/collectionViewFilter/displayComponent";
import Item from "@/components/item";
import Grid from "@/components/grid";
import { Search } from "@/components/icons"
import { useState, useEffect, useCallback } from "react";
import { SelectItem } from "@/db/schema";

import { revalidatePaths } from "./actions";

async function getTableData(): Promise<SelectItem[]> {
    return await fetch("/list-items", {
        method: "GET",
    })
        .then((response) => response.json())
        .then((json) => json.results);
}

async function getTagData(): Promise<string[]> {
    return await fetch("/list-tags", {
        method: "GET",
    })
        .then((response) => response.json())
        .then((json) => json.results);
}

async function getCategoryData(): Promise<string[]> {
    return await fetch("/list-categories", {
        method: "GET",
    })
        .then((response) => response.json())
        .then((json) => json.results);
}

const filterData = (arr: SelectItem[], searchText: string, searchCategories: string[], searchTags: string[]): SelectItem[] => {
    const categoryMatches = searchCategories.length > 0 ? arr.filter((item: SelectItem): boolean => {
        if (item.category) {
            return searchCategories.includes(item.category.toLowerCase().trim());
        }
        return false;
    }) : arr;

    const tagMatches = searchTags.length > 0 ? categoryMatches.filter(item =>
        searchTags.every(tag => item.tags.map(t => t.toLowerCase().trim()).includes(tag))
    ) : categoryMatches;

    const searchWords = searchText.toLowerCase().split(" ");
    const results = searchWords.length > 0 ? tagMatches.filter((result: SelectItem): boolean => {
        const text: string =
            result.name.toLowerCase() + " " +
            result.desc.toLowerCase() + " " +
            result.category?.toLowerCase() + " " +
            result.tags.reduce((acc, tag) => acc + " " + tag.toLowerCase(), "");

        //Find matches one word at a time
        return searchWords.every((word) => text.includes(word));
    }) : tagMatches;

    return results;
};

export default function Home() {
    const [categories, setCategories] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const [searchInput, setSearchInput] = useState("");
    const [unfiltered, setUnfiltered] = useState<SelectItem[]>([]);
    const [filteredResults, setFilteredResults] = useState<SelectItem[]>([]);

    useEffect(() => {
        revalidatePaths(["/list-items"]).then(() => {
            getTableData().then((data) => {
                setUnfiltered(data);
                setFilteredResults(data);
            });
            getTagData().then(setTags);
            getCategoryData().then(setCategories);
        });
    }, []);

    const updateSearchResults = useCallback((searchTerm: string, sTags: string[], sCategories: string[]) => {
        if (searchTerm.length > 0 || sTags.length > 0 || sCategories.length > 0) {
            setFilteredResults(
                filterData(unfiltered,
                    searchTerm,
                    sCategories.map(c => c.toLowerCase().trim()),
                    sTags.map(t => t.toLowerCase().trim())));
        } else {
            setFilteredResults(unfiltered);
        }
    }, [unfiltered]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input_text: string = event.target.value;
        event.preventDefault();
        setSearchInput(input_text);
        updateSearchResults(input_text, selectedTags, selectedCategories);
    };

    useEffect(() => {
        // Call the updateSearchResults function whenever selectedTags changes.
        // Use the current search input along with the updated tags.
        updateSearchResults(searchInput, selectedTags, selectedCategories);
    }, [selectedTags, selectedCategories, searchInput, updateSearchResults]);

    return (
        <main className="min-h-max bg-white flex flex-col">
            <div className="px-5 md:px-10 pt-2">
                <div className="p-4">
                    <h1 className="text-4xl font-bold pb-8 text-[#0C2B35]">
                        Inventory
                    </h1>
                    <Search className="w-6 h-6 absolute m-2 ml-4 text-[#EE7200]" />
                    <input
                        onInput={handleSearch}
                        value={searchInput}
                        placeholder="Search for an item"
                        className="bg-gray-100 w-full placeholder-[#B7B7B7] pl-12 p-2 outline outline-[2px] outline-[#496767] rounded-3xl text-[#0C2B35]"
                    ></input>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row flex-wrap">
                        <div className="w-full md:w-[300px] h-20">
                            <SelectionComponent
                                tags={categories}
                                setTags={setCategories}
                                selectedTags={selectedCategories}
                                setSelectedTags={setSelectedCategories}
                                category="category"
                            ></SelectionComponent>
                        </div>
                        <div className="w-full md:w-[300px] h-20">
                            <SelectionComponent
                                tags={tags}
                                setTags={setTags}
                                selectedTags={selectedTags}
                                setSelectedTags={setSelectedTags}
                                category="Tags"
                            ></SelectionComponent>
                        </div>
                    </div>
                </div>
                <div className="px-4 border-zinc-950 min-h-[56px]">
                    <DisplayComponent
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                    ></DisplayComponent>
                </div>
            </div>
            <div className="bg-[#B4CDCA] w-full h-2 mb-5 md:mb-10"></div>
            <div className="px-14 md:px-28">
                <Grid
                    components={filteredResults.map((result) => (
                        <Item
                            title={result.name}
                            category={result.category || "Uncategorized"}
                            image={
                                result.imageUrl ||
                                "/images/imageNotFound.jpg"
                            }
                            key={result.id}
                            id={result.id}
                        />
                    ))}
                />
            </div>
        </main>
    );
}
