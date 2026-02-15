"use client";

import Image from "next/image";

interface Props {
    title: string;
    image: string;
    category: string;
    id: number;
}

export default function Item(props: Props) {
    const status_color = "[#DF1642]";

    const truncateTitle = (text: string, length: number) => {
        if (text.length <= length) {
            return text;
        }

        return text.substring(0, length - 3) + '\u2026';
    };

    return (
        <div className="md:flex w-full md:h-80 md:w-60 rounded-xl shadow-md">
            <a href={`/item/${props.id}`}>
                <Image
                    src={props.image}
                    alt=""
                    width={288}
                    height={288}
                    className="w-full max-h-72 md:h-60 md:w-60 rounded-t-xl"
                    style={{ objectFit: "cover" }}
                />
                <div className="p-3">
                    <p className="text-[#496767] font-bold text-base mb-2">
                        {truncateTitle(props.title, 27)}
                    </p>
                    <p
                        className={`text-sm text-${status_color} border-${status_color} border-2 w-fit px-2 rounded-lg`}
                    >
                        {props.category}
                    </p>
                </div>
            </a>
        </div>
    );
}
