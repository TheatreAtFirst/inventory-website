"use client";
import React from "react";
import logo from "@/../public/taf-logo.png";
import { Home, Plus } from "./icons";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Header() {
    return (
        <div className="flex flex-row relative bg-emerald-900 gap-5 justify-between items-center px-5">
            <div className="absolute left-0 w-full flex flex-row items-center p-5 gap-5">
                <a href="/" className="md:flex items-center gap-2">
                    <Image
                        width={57}
                        height={57}
                        className="
                    rounded-full
                    bg-white
                    drop-shadow-lg
                    "
                        src={logo.src}
                        alt=""
                    />
                    <p className="hidden md:block text-white text-2xl font-medium font-serif">
                        Theatre@First
                    </p>
                </a>
            </div>
            <div className="flex flex-row p-5 items-center z-50 ml-auto">
                <div className="flex flex-row p-5 gap-5 items-center">
                    <a href="/inventory"><Home width={24} height={24} className="text-white" /></a>
                    <a href="/item-upload"><Plus width={24} height={24} className="text-white" /></a>
                </div>

                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    );
}
