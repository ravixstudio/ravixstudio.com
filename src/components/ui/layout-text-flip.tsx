"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
	text = "Build Amazing",
	words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
	duration = 3000,
	colors,
	isMicroCopy = false,
	copyIndex,
}: {
	text: string;
	words: string[];
	duration?: number;
	colors?: string[];
	isMicroCopy?: boolean;
	copyIndex?: number;
}) => {
	const [currentIndex, setCurrentIndex] = useState(copyIndex ?? 0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(prevIndex => (prevIndex + 1) % words.length);
		}, duration);

		return () => clearInterval(interval);
	}, [words.length, duration]);

	const getGradient = () => {
		if (colors && colors[currentIndex]) {
			return `linear-gradient(to right, white 30%, ${colors[currentIndex]} 100%)`;
		}
		return "linear-gradient(to right, white 30%, #3B82F6 100%)";
	};

	return (
		<>
			<motion.span
				layoutId="subtext"
				className="text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl"
			>
				{text}
			</motion.span>

			<motion.span
				layout
				transition={{ duration: 0.4, ease: "easeOut" }}
				className={cn(
					"relative",
					!isMicroCopy ? "inline-block overflow-hidden" : "block"
				)}
			>
				<AnimatePresence mode="popLayout">
					<motion.span
						key={currentIndex}
						initial={{ y: 20, opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
						}}
						exit={{ y: -20, opacity: 0 }}
						transition={{
							duration: 0.4,
							ease: "easeOut",
						}}
						className={cn(
							"inline-block whitespace-nowrap",
							isMicroCopy &&
								"block text-neutral-400 font-sans text-lg leading-6 -tracking-[1.5%]"
						)}
						style={
							!isMicroCopy
								? {
										background: getGradient(),
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
										backgroundClip: "text",
								  }
								: undefined
						}
					>
						{words[currentIndex]}
					</motion.span>
				</AnimatePresence>
			</motion.span>
		</>
	);
};
