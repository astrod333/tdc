import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const baseUrl = "https://tdcdevs.xyz";

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: "Tanzania Developers Community (TDC)",
	description:
		"The official digital hub for developers in Tanzania. Connect, learn, and grow with the largest tech community in the region.",
	applicationName: "TDC",
	authors: [{ name: "Tanzania Developer Community", url: baseUrl }],
	generator: "Next.js",
	keywords: [
		"Tanzania",
		"Developers",
		"Community",
		"TDC",
		"Tech",
		"Coding",
		"Africa",
		"Software Engineering",
		"Web Development",
		"Programming",
		"East Africa",
	],
	referrer: "origin-when-cross-origin",
	creator: "Tanzania Developer Community",
	publisher: "Tanzania Developer Community",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: "/favicon.ico",
	},

	openGraph: {
		title: "Tanzania Developers Community (TDC)",
		description:
			"The official digital hub for developers in Tanzania. Connect, learn, and grow with the largest tech community in the region.",
		url: baseUrl,
		siteName: "Tanzania Developers Community",
		images: [
			{
				url: `${baseUrl}/tdc.png`,
				width: 1200,
				height: 630,
				alt: "Tanzania Developers Community",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Tanzania Developers Community (TDC)",
		description:
			"The official digital hub for developers in Tanzania. Connect, learn, and grow with the largest tech community in the region.",
		creator: "@tdc",
		images: [`${baseUrl}/tdc.png`],
	},
	alternates: {
		canonical: baseUrl,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: "Tanzania Developers Community",
		alternateName: "TDC",
		url: baseUrl,
		logo: `${baseUrl}/tdclogo.png`,
		description:
			"The official digital hub for developers in Tanzania. Connect, learn, and grow with the largest tech community in the region.",
		sameAs: [
			// Add social media profiles here
			// 'https://twitter.com/tdc',
			// 'https://github.com/tdc',
			// 'https://linkedin.com/company/tdc',
		],
	};

	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.variable} antialiased font-sans`}
				suppressHydrationWarning
			>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<div className="absolute top-4 right-4 z-50"></div>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
