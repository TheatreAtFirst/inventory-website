"use client";
import TagEditor from "./tagEditor";

interface ItemDetailProps {
    id: number;
    name: string;
    category: string;
    tags: string[];
    allTags: string[];
    description: string;
    status: string;
}

export default function ItemDetail(props: ItemDetailProps) {
    const status_color = props.status == "In Stock" ? "[#11763D]" : "[#DF1642]";

    return (
        <div className="flex flex-col gap-5 items-left text-black">
            <div className="text-4xl font-bold">{props.name}</div>
            <p
                className={`text-sm text-${status_color} border-${status_color} border-2 w-fit px-2 rounded-lg`}
            >
                {props.category}
            </p>
            <div className="flex flex-row gap-6 flex-wrap">
                <TagEditor itemId={props.id} tags={props.allTags} initialTags={props.tags} />
            </div>
            <hr style={{ borderTop: "1px solid #888888" }} />
            <div>
                <div className="text-xl font-bold mb-5">Description</div>
                {props.description}
            </div>
        </div>
    );
}
