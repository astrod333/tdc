"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type DummyFile = {
	id: number;
	name: string;
	image: string;
	url: string;
};

const DUMMY_FILES: DummyFile[] = [
	{
		id: 1,
		name: "portfolio.doc",
		image: "/fileicons/DOC.svg",
		url: "/portfolio",
	},
	{
		id: 2,
		name: "rules.txt",
		image: "/fileicons/TXT.svg",
		url: "/rules",
	},
];

const FolderIcon = () => (
	<Image
		src="/folder.svg"
		alt="Folder Icon"
		width={64}
		height={64}
		className="w-full h-full"
		priority
	/>
);

type FileIconProps = {
	size: number;
	image: string;
};

const FileIcon = ({ size, image }: FileIconProps) => (
	<Image src={image} alt="File Icon" width={size} height={size} />
);

const Folder = ({ folderName = "TDC" }: { folderName?: string }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isDesktop, setIsDesktop] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const checkDesktop = () => {
			setIsDesktop(window.innerWidth >= 768);
		};

		checkDesktop();
		window.addEventListener("resize", checkDesktop);
		return () => window.removeEventListener("resize", checkDesktop);
	}, []);

	const playSound = () => {
		const audio = new Audio("/click.mp3");
		audio.play();
	};

	return (
		<div className="flex items-center justify-center flex-col">
			<motion.div
				initial={{
					filter: "blur(10px)",
					width: "50px",
					height: "50px",
				}}
				animate={{
					height: isOpen ? (isDesktop ? "400px" : "300px") : "50px",
					width: isOpen ? (isDesktop ? "600px" : "90vw") : "64px",
					maxWidth: isOpen ? (isDesktop ? "none" : "350px") : "none",
					backgroundColor: isOpen ? "#f1f1f1" : "#1BA3F8",
					borderRadius: isOpen ? "10px" : "10px",
					cursor: isOpen ? "default" : "pointer",
					filter: "blur(0px)",
					boxShadow: isOpen ? "0px 5px 10px 0 rgba(0, 0, 0, 0.1)" : "none",
				}}
				whileHover={{
					boxShadow: !isOpen
						? "0px 3px 10px 0 rgba(0, 0, 0, 0.25)"
						: "0px 5px 10px 0 rgba(0, 0, 0, 0.1)",
					rotateZ: !isOpen ? "-4deg" : "0deg",
					translateY: !isOpen ? "-3px" : "0px",
				}}
				whileTap={{
					boxShadow: !isOpen
						? "0px 0px 0px 0 rgba(0, 0, 0, 0.25)"
						: "0px 5px 10px 0 rgba(0, 0, 0, 0.1)",
					translateY: !isOpen ? "0px" : "0px",
					rotateZ: !isOpen ? "-2deg" : "0deg",
					scale: !isOpen ? 0.95 : 1,
				}}
				transition={{
					type: "spring",
					stiffness: 300,
					damping: 25,
				}}
				onClick={() => {
					if (!isOpen) {
						setIsOpen(true);
						playSound();
					}
				}}
				onKeyDown={(e) => {
					if (!isOpen && (e.key === "Enter" || e.key === " ")) {
						e.preventDefault();
						setIsOpen(true);
						playSound();
					}
				}}
				role="button"
				tabIndex={0}
				aria-expanded={isOpen}
				aria-label={isOpen ? "Close folder" : "Open folder"}
				className="overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
			>
				<AnimatePresence mode="popLayout">
					{!isOpen && (
						<motion.div
							initial={{
								filter: "blur(10px)",
								opacity: 0,
							}}
							animate={{
								filter: "blur(0px)",
								opacity: 1,
							}}
							exit={{
								filter: "blur(10px)",
								opacity: 0,
							}}
							whileHover={{
								translateY: "3px",
								rotateZ: "4deg",
							}}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 30,
							}}
						>
							<FolderIcon />
						</motion.div>
					)}

					{isOpen && (
						<motion.div
							initial={{
								filter: "blur(10px)",
								opacity: 0,
							}}
							animate={{
								filter: "blur(0px)",
								opacity: 1,
							}}
							exit={{
								filter: "blur(10px)",
								opacity: 0,
							}}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 30,
							}}
							className="h-full w-full flex flex-col overflow-hidden relative"
						>
							{/* folder container header */}
							<div className="h-7 w-full bg-white flex items-center justify-between">
								<div className="bg-[#f1f1f1] h-full flex items-center justify-center">
									<motion.p
										layout="position"
										layoutId="folder-name"
										className="text-black font-medium px-2 text-sm whitespace-nowrap truncate"
									>
										{folderName}
									</motion.p>
								</div>
								<div className="flex-1 flex items-center justify-end px-1 h-full rounded-bl-lg">
									<button
										onClick={() => {
											setIsOpen(false);
											playSound();
										}}
										className="hover:bg-black/10 rounded-full cursor-pointer p-0.5 focus:outline-none focus:ring-1 focus:ring-black/20"
										aria-label="Close folder"
									>
										<X className="text-black" size={14} />
									</button>
								</div>
							</div>
							<div className="rounded-b-lg h-full w-full flex items-start justify-start">
								<div
									style={{
										gridTemplateColumns: isDesktop
											? "repeat(auto-fill, minmax(100px, 1fr))"
											: "repeat(auto-fill, minmax(80px, 1fr))",
									}}
									className="grid items-start justify-start gap-x-4 gap-y-6 overflow-y-scroll w-full p-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
								>
									{DUMMY_FILES.map((file: DummyFile, index) => (
										<motion.div
											onClick={() => {
												playSound();
												if (file.url) {
													router.push(file.url);
												}
											}}
											onKeyDown={(e) => {
												if (e.key === "Enter" || e.key === " ") {
													e.preventDefault();
													playSound();
													if (file.url) {
														router.push(file.url);
													}
												}
											}}
											role="button"
											tabIndex={0}
											aria-label={`Open ${file.name}`}
											key={"folder-item" + folderName + index}
											initial={{
												opacity: 0,
												scale: 0.8,
											}}
											animate={{
												opacity: 1,
												scale: 1,
											}}
											exit={{
												opacity: 0,
												scale: 0.8,
											}}
											whileHover={{
												scale: 1.05,
												backgroundColor: "rgba(0,0,0,0.05)",
											}}
											whileTap={{ scale: 0.95 }}
											transition={{
												type: "spring",
												stiffness: 300,
												damping: 25,
											}}
											className={`gap-2 flex flex-col items-center justify-start overflow-hidden rounded-md p-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-black/20 ${isDesktop ? "w-[100px] h-auto min-h-[110px]" : "w-full h-auto min-h-[80px]"
												}`}
										>
											<FileIcon size={isDesktop ? 50 : 30} image={file.image} />
											<p
												className={`text-black text-center w-full ${isDesktop ? "text-sm" : "text-xs line-clamp-2 leading-tight"
													}`}
											>
												{file.name}
											</p>
										</motion.div>
									))}
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
			{!isOpen && (
				<motion.div
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					exit={{
						opacity: 0,
					}}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 30,
					}}
					layoutId="folder-name"
					className="text-white font-medium text-sm whitespace-nowrap truncate"
				>
					{folderName}
				</motion.div>
			)}
		</div>
	);
};

export default Folder;
