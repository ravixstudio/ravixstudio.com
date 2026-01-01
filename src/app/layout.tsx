import type { Metadata } from "next";
import { DM_Mono, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const dmSans = DM_Sans({
	variable: "--font-dm-sans",
	subsets: ["latin"],
});

const dmMono = DM_Mono({
	variable: "--font-dm-mono",
	subsets: ["latin"],
	weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
	title: "Ravix Studio",
	description: "Turning ideas into shipped products.",
	appleWebApp: {
		title: "Ravix Studio",
	},
	openGraph: {
		title: "Ravix Studio",
		description: "Turning ideas into shipped products.",
		siteName: "Ravix Studio",
		images: [
			{
				url: "/og.png",
				width: 1200,
				height: 630,
				alt: "Ravix Studio - Turning ideas into shipped products",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Ravix Studio",
		description: "Turning ideas into shipped products.",
		images: ["/og.png"],
		creator: "@ravixstudio",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

	return (
		<html lang="en">
			<body
				className={`${dmSans.variable} ${dmMono.variable} antialiased overflow-x-hidden`}
			>
				{children}
			</body>
			{gaId && <GoogleAnalytics gaId={gaId} />}
		</html>
	);
}
