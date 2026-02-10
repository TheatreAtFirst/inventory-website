"use client";

import Image from "next/image";

interface Props {
    title: string;
    image: string;
    category: string;
    id: number;
}

function DesktopItem(props: Props) {
    const status_color = "[#DF1642]";

    return (
        <a href={`/item/${props.id}`}>
            <div className="hidden md:flex h-80 w-60 rounded-xl shadow-md">
                <div className="h-full flex flex-col">
                    <Image
                        src={props.image}
                        alt=""
                        width={60}
                        height={60}
                        quality={30}
                        unoptimized={false}
                        className="h-60 w-60 rounded-t-xl"
                    />
                    <div className="p-3">
                        <p className="text-[#496767] font-bold text-base mb-2">
                            {props.title}
                        </p>
                        <p
                            className={`text-sm text-${status_color} border-${status_color} border-2 w-fit px-2 rounded-lg`}
                        >
                            {props.category}
                        </p>
                    </div>
                </div>
            </div>
        </a>
    );
}

function MobileItem(props: Props) {
    const status_color = "[#DF1642]";

    return (
        <a href={`/item/${props.id}`} className="px-5">
            <div className="md:hidden w-full shadow-md">
                <Image
                    src={props.image}
                    alt=""
                    width={288}
                    height={288}
                    className="max-h-72"
                    unoptimized={false}
                />
                <div className="p-3">
                    <p className="text-[#496767] font-bold text-base mb-2">
                        {props.title}
                    </p>
                    <p
                        className={`text-sm text-${status_color} border-${status_color} border-2 w-fit px-2 rounded-lg`}
                    >
                        {props.category}
                    </p>
                </div>
            </div>
        </a>
    );
}

export default function Item(props: Props) {
    return (<><DesktopItem {...props}/><MobileItem {...props}/></>);
}
