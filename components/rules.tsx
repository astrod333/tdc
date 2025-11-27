"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getAllRules, type Rule } from "@/data/rules";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.05,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
};

function RuleItem({ rule }: { rule: Rule }) {
	const { title, description, emoji } = rule;

	return (
		<motion.div
			variants={itemVariants}
			whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
			className="w-full py-4 px-5 rounded-md transition-colors group duration-200 hover:bg-white/5 cursor-pointer border border-transparent hover:border-white/10"
		>
			<div className="flex items-start gap-4 w-full">
				{emoji && (
					<div className="text-3xl flex-shrink-0" aria-hidden="true">
						{emoji}
					</div>
				)}
				<div className="flex-1">
					<h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
					<p className="text-white/70 text-sm leading-relaxed">{description}</p>
				</div>
			</div>
		</motion.div>
	);
}

function VerticalFade({
	side,
	className = "",
	...props
}: {
	side: "top" | "bottom";
} & React.HTMLAttributes<HTMLDivElement>) {
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

function HorizontalFade({
	side,
	className = "",
	...props
}: {
	side: "left" | "right";
} & React.HTMLAttributes<HTMLDivElement>) {
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

function VerticalLine({
	side,
	className = "",
	...props
}: {
	side: "left" | "right";
} & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			aria-hidden
			className={`hidden md:block fixed top-0 h-screen w-[1px] bg-cyan-900/80 z-[5] ${side === "left" ? "left-[calc(50%-450px)]" : "right-[calc(50%-450px)]"
				} ${className}`}
			{...props}
		/>
	);
}

interface LineProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: "defined" | "subtle";
	direction?: "horizontal" | "vertical";
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

export default function CommunityRules() {
	const contentRef = useRef<HTMLDivElement>(null);
	const headingRef = useRef<HTMLDivElement>(null);
	const [headingHeight, setHeadingHeight] = useState(0);
	const allRules = getAllRules();

	useEffect(() => {
		if (headingRef.current) {
			setHeadingHeight(headingRef.current.offsetHeight);
		}
	}, []);

	useEffect(() => {
		let animationFrameId: number;
		let currentTransform = headingHeight + 50;

		const handleScroll = () => {
			const scrollY = window.scrollY;
			const targetTransform = Math.max(0, headingHeight + 50 - scrollY / 2);

			const animateScroll = () => {
				const ease = 0.08;
				const diff = targetTransform - currentTransform;

				if (Math.abs(diff) > 0.1) {
					currentTransform += diff * ease;
					if (contentRef.current) {
						contentRef.current.style.transform = `translateY(${currentTransform}px)`;
					}
					animationFrameId = requestAnimationFrame(animateScroll);
				} else {
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

		if (contentRef.current) {
			contentRef.current.style.transform = `translateY(${headingHeight + 50}px)`;
		}

		return () => {
			window.removeEventListener("scroll", handleScroll);
			cancelAnimationFrame(animationFrameId);
		};
	}, [headingHeight]);

	return (
		<main className="min-h-screen bg-black text-white relative overflow-hidden font-sans">
			{/* Fade effects */}
			<VerticalFade side="top" className="h-[300px] z-[25]" />
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
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M10 19l-7-7m0 0l7-7m-7 7h18"
					/>
				</svg>
				<span className="text-sm font-medium">Back</span>
			</Link>

			{/* Vertical lines - only visible on md screens and up */}
			<VerticalLine side="left" />
			<VerticalLine side="right" />

			{/* Title section that stays in place */}
			<div
				ref={headingRef}
				className="fixed top-0 left-0 right-0 max-w-[800px] mx-auto pt-32 pb-8 z-[30] pointer-events-none bg-black"
			>
				<div className="relative">
					{/* Lines for "WhatsApp" */}
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

					{/* Lines for "Community" */}
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

					{/* Lines for "Rules" */}
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
							WhatsApp
						</span>{" "}
						<br />
						<span className="relative z-[10] inline-block bg-black px-1">
							Community
						</span>{" "}
						<br />
						<span className="relative z-[10] inline-block bg-black px-1">
							Rules
						</span>
					</h1>
				</div>
				{/* Gradient fade at the bottom of the header */}
				<div className="absolute -bottom-32 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-[30]" />
			</div>

			<div
				ref={contentRef}
				className="relative z-20 min-h-[200vh] w-full will-change-transform"
				style={{ transform: `translateY(${headingHeight + 50}px)` }}
			>
				<div className="max-w-[800px] w-full mx-auto pt-20 pb-64 px-8 bg-[#111] shadow-xl border border-white/5">
					<div className="mb-8 text-white/60 text-lg w-full">
						<p className="leading-relaxed mb-6">
							Welcome to the Tanzania Developers Community WhatsApp group!
							Please read and follow these rules to maintain a healthy and
							productive environment for all members.
						</p>
						<a
							href="https://chat.whatsapp.com/Cdm3XPRadGx1SaLlRJ3cDD"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
						>
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
							</svg>
							<span>Join WhatsApp Group</span>
						</a>
					</div>

					<motion.div
						className="w-full flex flex-col gap-3"
						variants={containerVariants}
						initial="hidden"
						animate="show"
					>
						{allRules.map((rule, index) => (
							<RuleItem key={index} rule={rule} />
						))}
					</motion.div>

					<div className="mt-12 pt-8 border-t border-white/10 text-white/50 text-sm">
						<p>
							Violations of these rules may result in warnings, temporary
							muting, or removal from the group. Let's work together to keep TDC
							a welcoming space for all developers! 🚀
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
