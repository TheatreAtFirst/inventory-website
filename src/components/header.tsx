"use client";
import { useEffect, useRef, useState } from "react";
import logo from "@/../public/taf-logo.png";
import { Home, Plus } from "./icons";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";

function AuthSection() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Placeholder to prevent layout shift
        return <div className="w-8 h-8 rounded-full bg-emerald-800 animate-pulse" />;
    }

    return (
        <>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </>
    );
}

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
    const lastScrollY = useRef(0);
    const threshold = 10;

    useEffect(() => {
        lastScrollY.current = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const diff = scrollY - lastScrollY.current;

            // Always show header near top of page
            if (scrollY < 100) {
                setScrollDirection("up");
            } else if (Math.abs(diff) > threshold) {
                setScrollDirection(diff > 0 ? "down" : "up");
            }

            lastScrollY.current = scrollY > 0 ? scrollY : 0;
        };

        window.addEventListener("scroll", updateScrollDirection, { passive: true });
        return () => window.removeEventListener("scroll", updateScrollDirection);
    }, []);

    return scrollDirection;
}


export default function Header() {
    const scrollDirection = useScrollDirection();
    return (
        <div className={`flex flex-row bg-emerald-900 justify-between items-center px-3 py-2 text-white sticky ${scrollDirection === "down" ? "-top-20" : "top-0"} z-50 transition-all duration-500`}>
            <a href="/" className="flex items-center gap-3">
                <Image
                    width={57}
                    height={57}
                    className="
                    rounded-full
                    bg-white
                    drop-shadow-lg
                    "
                    src={logo.src}
                    alt="Theatre@First Logo"
                />
                <p className="hidden md:block text-2xl font-medium font-serif">
                    Theatre@First
                </p>
            </a>
            <div className="flex flex-row gap-3 items-center">
                <a href="/inventory"><Home width={24} height={24} /></a>
                <a href="/item-upload"><Plus width={24} height={24} /></a>
                <AuthSection />
            </div>
        </div>
    );
}
