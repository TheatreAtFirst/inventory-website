import { Dispatch, SetStateAction } from "react";
import { X } from "@/components/icons"

interface DisplayProps {
    selectedTags: string[];
    setSelectedTags: Dispatch<SetStateAction<string[]>>;
    selectedCategories: string[];
    setSelectedCategories: Dispatch<SetStateAction<string[]>>;
}

export default function DisplayComponent(props: DisplayProps) {
    function deselectTag(tag: string) {
        const toRemove = props.selectedTags.indexOf(tag);
        props.setSelectedTags(() => [
            ...props.selectedTags.slice(0, toRemove),
            ...props.selectedTags.slice(toRemove + 1),
        ]);
    }

    function deselectCategory(tag: string) {
        const toRemove = props.selectedCategories.indexOf(tag);
        props.setSelectedCategories(() => [
            ...props.selectedCategories.slice(0, toRemove),
            ...props.selectedCategories.slice(toRemove + 1),
        ]);
    }

    if (props.selectedTags.length === 0 && props.selectedCategories.length === 0) { return null; };

    return (
        <div className="flex gap-2">
            <div className="pb-3 flex flex-row gap-2 justify-start flex-wrap">
                {props.selectedCategories.map((selectedTag) => (
                    <div
                        key={selectedTag}
                        className="border-[#496767] border-[2px] bg-[#FAFAFA] rounded-lg p-2 w-auto flex flex-row gap-2 items-center text-[#404040]"
                    >
                        <p>{selectedTag}</p>
                        <X
                            onClick={() => deselectCategory(selectedTag)}
                            width="22"
                            height="20"
                            viewBox="0 0 22 20"
                            fill="#EE7200"
                        />
                    </div>
                ))}
                {props.selectedTags.map((selectedTag) => (
                    <div
                        key={selectedTag}
                        className="border-[#496767] border-[2px] bg-[#FAFAFA] rounded-lg p-2 w-auto flex flex-row gap-2 items-center text-[#404040]"
                    >
                        <p>{selectedTag}</p>
                        <X
                            onClick={() => deselectTag(selectedTag)}
                            width="22"
                            height="20"
                            viewBox="0 0 22 20"
                            fill="#EE7200"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
