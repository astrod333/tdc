"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type Developer, getAlldevelopers } from "@/data/developers";

function ProfileImage({ name, github, twitter }: { name: string; github?: string | null; twitter: string }) {
    const [imageSrc, setImageSrc] = useState(
        `/placeholder.svg?height=28&width=28`
    );
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (github) {
            const githubImg = new Image();
            githubImg.src = `https://github.com/${github}.png`;

            githubImg.onload = () => {
                setImageSrc(`https://github.com/${github}.png`);
                setImageLoaded(true);
            };

            githubImg.onerror = () => {
                if (twitter) {
                    const twitterImg = new Image();
                    twitterImg.src = `https://unavatar.io/twitter/${twitter}`;

                    twitterImg.onload = () => {
                        setImageSrc(`https://unavatar.io/twitter/${twitter}`);
                        setImageLoaded(true);
                    };
                }
            };
        } else if (twitter) {
            // If no GitHub, try Twitter directly
            const twitterImg = new Image();
            twitterImg.src = `https://unavatar.io/twitter/${twitter}`;

            twitterImg.onload = () => {
                setImageSrc(`https://unavatar.io/twitter/${twitter}`);
                setImageLoaded(true);
            };
        }
    }, [github, twitter]);

    return (
        <Avatar className="h-7 w-7">
            <AvatarImage src={imageSrc} alt={name} />
            <AvatarFallback>
                {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
            </AvatarFallback>
        </Avatar>
    );
}

function DeveloperItem({ Developer }: { Developer: Developer }) {
    const { name, twitter, portfolio, github } = Developer;
    const portfolioUrl = portfolio.replace(/(^\w+:|^)\/\//, "");
    const githubUrl = `https://github.com/${github}`;

    return (
        <div className="w-full py-3 px-4 rounded-md transition-colors group duration-200 hover:bg-white/5">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                    <div aria-label={`${name}'s profile picture`}>
                        <ProfileImage name={name} github={github} twitter={twitter} />
                    </div>

                    <a target="_blank" href={githubUrl} className="hover:underline">
                        {name}
                    </a>
                </div>

                <a
                    target="_blank"
                    href={portfolio}
                    className="text-white/60 transition-colors duration-300 hover:underline group-hover:text-white text-base"
                >
                    {portfolioUrl}
                </a>
            </div>
        </div>
    );
}


function VerticalFade({ side, className = "", ...props }: { side: "top" | "bottom"; className?: string;[key: string]: any }) {
    return (
        <div
            aria-hidden
            className={`fixed left-0 right-0 z-10 pointer-events-none ${side === "top"
                ? "top-0 bg-gradient-to-b from-black to-transparent"
                : "bottom-0 bg-gradient-to-t from-black to-transparent"
                } ${className}`}
            {...props}
        />
    );
}

function HorizontalFade({ side, className = "", ...props }: { side: "left" | "right"; className?: string;[key: string]: any }) {
    return (
        <div
            aria-hidden
            className={`fixed top-0 bottom-0 w-[100px] z-10 pointer-events-none ${side === "left"
                ? "left-0 bg-gradient-to-r from-black to-transparent"
                : "right-0 bg-gradient-to-l from-black to-transparent"
                } ${className}`}
            {...props}
        />
    );
}


function VerticalLine({ side, className = "", ...props }: { side: "left" | "right"; className?: string;[key: string]: any }) {
    return (
        <div
            aria-hidden
            className={`hidden md:block fixed top-0 h-screen w-[1px] bg-cyan-900/80 z-[5] ${side === "left" ? "left-[calc(50%-450px)]" : "right-[calc(50%-450px)]"
                } ${className}`}
            {...props}
        />
    );
}

interface LineProps {
    variant?: "defined" | "subtle";
    direction?: "horizontal" | "vertical";
    className?: string;
    style?: React.CSSProperties;
    [key: string]: any;
}

function Line({
    variant = "defined",
    direction = "horizontal",
    className = "",
    style = {},
    ...props
}: LineProps) {
    return (
        <div
            aria-hidden
            className={`absolute ${variant === "subtle" ? "opacity-60" : "opacity-80"
                } ${direction === "horizontal"
                    ? "h-[1px] w-[500vw] bg-cyan-900 -translate-x-1/2 left-1/2"
                    : "w-[1px] h-[500vw] bg-gradient-to-b from-cyan-900 to-transparent"
                } z-[15] ${className}`}
            style={style}
            {...props}
        />
    );
}

export default function DeveloperProfiles() {
    const contentRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const [headingHeight, setHeadingHeight] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const allDevelopers = getAlldevelopers();


    useEffect(() => {
        if (headingRef.current) {
            setHeadingHeight(headingRef.current.offsetHeight);
        }
    }, []);


    useEffect(() => {
        let animationFrameId: number;
        let currentTransform = headingHeight + 50; // Changed from 350 to 50 to match the inline style

        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Calculate target position - slower scroll effect by dividing by 2
            const targetTransform = Math.max(0, headingHeight + 50 - scrollY / 2);

            // Update scroll progress for other animations
            setScrollProgress(Math.min(1, scrollY / 600));

            // Smooth animation function
            const animateScroll = () => {
                // Ease towards target (smaller number = slower animation)
                const ease = 0.08;
                const diff = targetTransform - currentTransform;

                if (Math.abs(diff) > 0.1) {
                    currentTransform += diff * ease;
                    if (contentRef.current) {
                        contentRef.current.style.transform = `translateY(${currentTransform}px)`;
                    }
                    animationFrameId = requestAnimationFrame(animateScroll);
                } else {
                    // Snap to target when very close
                    if (contentRef.current) {
                        contentRef.current.style.transform = `translateY(${targetTransform}px)`;
                    }
                    currentTransform = targetTransform;
                }
            };

            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(animateScroll);
        };

        window.addEventListener("scroll", handleScroll);

        // Initial positioning
        if (contentRef.current) {
            contentRef.current.style.transform = `translateY(${headingHeight + 50
                }px)`;
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [headingHeight]);

    // Line height for heading
    const lineHeight = 72; // 4.5rem = 72px

    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
            {/* Fade effects */}
            <VerticalFade side="top" className="h-[300px]" />
            <VerticalFade side="bottom" className="h-[100px] z-[30]" />
            <HorizontalFade side="left" />
            <HorizontalFade side="right" />

            {/* Back button */}
            <Link
                href="/"
                className="fixed top-8 left-8 z-[40] flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                aria-label="Go back to home page"
            >
                <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-sm font-medium">Back</span>
            </Link>

            {/* Vertical lines - only visible on md screens and up */}
            <VerticalLine side="left" />
            <VerticalLine side="right" />

            {/* Title section that stays in place */}
            <div
                ref={headingRef}
                className="fixed top-0 left-0 right-0 max-w-[800px] mx-auto pt-32 pb-8 z-[5] pointer-events-none"
            >
                <div className="relative">
                    {/* Lines for "Good" - top and bottom */}
                    <Line
                        variant="defined"
                        direction="horizontal"
                        style={{ top: "0px" }}
                    />
                    <Line
                        variant="subtle"
                        direction="horizontal"
                        style={{ top: "72px" }}
                    />

                    {/* Lines for "Engineers" - top and bottom */}
                    <Line
                        variant="defined"
                        direction="horizontal"
                        style={{ top: "72px" }}
                    />
                    <Line
                        variant="subtle"
                        direction="horizontal"
                        style={{ top: "144px" }}
                    />

                    {/* Lines for "Sites" - top and bottom */}
                    <Line
                        variant="defined"
                        direction="horizontal"
                        style={{ top: "144px" }}
                    />
                    <Line
                        variant="subtle"
                        direction="horizontal"
                        style={{ top: "216px" }}
                    />

                    <h1
                        className="text-[72px] leading-[72px] font-medium relative tracking-tight pl-6 sm:pl-8 md:pl-4"
                        style={{
                            fontFamily:
                                '"X", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
                            letterSpacing: "-0.3px",
                        }}
                    >
                        <span className="relative z-[10] inline-block bg-black px-1">
                            TDC
                        </span>{" "}
                        <br />
                        <span className="relative z-[10] inline-block bg-black px-1">
                            Engineers
                        </span>{" "}
                        <br />
                        <span className="relative z-[10] inline-block bg-black px-1">
                            Portfolios
                        </span>
                    </h1>
                </div>
            </div>

            <div
                ref={contentRef}
                className="relative z-20 min-h-[200vh] w-full will-change-transform"
                style={{ transform: `translateY(${headingHeight + 50}px)` }}
            >
                <div className="max-w-[800px] w-full mx-auto pt-20 pb-64 px-8 bg-[#111] shadow-xl border border-white/5">
                    <div className="mb-8 text-white/60 text-lg w-full flex">
                        <p>TDC Portfolio </p>
                        <p className="ml-2">Update <a target="_blank" href="https://github.com/astrod333/tdc/blob/main/data/developers.ts" className="underline hover:text-white/80">this file</a> to change the list. </p>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        {allDevelopers.map((Developer, index) => (
                            <DeveloperItem key={index} Developer={Developer} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}