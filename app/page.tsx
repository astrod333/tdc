"use client";

import Folder from "@/components/folder";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<main
			className="flex min-h-screen w-full items-center justify-center bg-[url('/mobile-background.webp')] md:bg-[url('/folder-background.jpeg')] bg-cover bg-center"
			aria-label="Tanzania Developer Community Homepage"
		>
			<h1 className="sr-only">
				Tanzania Developers Community - Connect, Learn, and Grow
			</h1>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.8,
					type: "spring",
					bounce: 0.5,
				}}
			>
				<Folder />
			</motion.div>
		</main>
	);
}
