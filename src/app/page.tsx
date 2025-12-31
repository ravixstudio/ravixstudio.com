"use client";
import { LogoFullLight } from "@/components/icons";
import { Button } from "../components/ui/button";
import { RiDiscordFill, RiTwitterXFill, RiMailAddLine } from "@remixicon/react";
import { StarsBackground } from "@/components/ui/stars-background";
import { Flare } from "../components/assets/flare";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<div className="relative bg-black text-white overflow-hidden">
			<StarsBackground starDensity={0.0004} />

			<div className="relative flex min-h-screen items-center justify-center px-6 py-16">
				<motion.div
					className="flex flex-col items-center gap-8 relative"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<motion.div
						className="absolute -top-52"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
					>
						<Flare />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
					>
						<LogoFullLight />
					</motion.div>

					<motion.p
						className="text-base font-mono leading-5 -tracking-[1.5%]"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
					>
						{"//"} open-source driven &middot; pragmatic engineering
					</motion.p>

					<motion.div
						className="flex flex-col gap-5 items-center"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
					>
						<h1 className="text-[64px] font-sans font-medium -tracking-[1.5%] leading-[100%] text-center">
							<span className="text-neutral-400">Engineering for </span>
							<FlipWords
								words={["Real Problems", "Community", "Your Growth"]}
								duration={3000}
								className="text-[64px] font-sans font-medium bg-gradient-to-r from-white via-white to-blue-500 bg-clip-text text-transparent"
							/>
						</h1>
						<p className="text-neutral-400 font-sans text-xl leading-5 -tracking-[1.5%] text-center">
							A shared space for designers, developers and builders
						</p>
					</motion.div>

					<div className="flex items-center gap-3">
						<motion.a
							href="https://discord.gg/PkX5csktKG"
							target="_blank"
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
						>
							<Button icon={<RiDiscordFill />}>join the discord</Button>
						</motion.a>

						<motion.a
							href="https://x.com/ravixstudio"
							target="_blank"
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
						>
							<Button icon={<RiTwitterXFill />} variant="outlined">
								follow on x
							</Button>
						</motion.a>
					</div>
				</motion.div>
			</div>

			<section className="relative px-6 pb-24">
				<motion.div
					className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent p-8 shadow-[0_30px_120px_rgba(0,0,0,0.6)] backdrop-blur md:p-12"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
				>
					<div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
					<div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

					<motion.p
						className="relative mb-3 inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-neutral-200"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.8 }}
						transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
					>
						newsletter
					</motion.p>

					<motion.h2
						className="relative text-4xl font-sans font-medium leading-tight -tracking-[1.5%]"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.8 }}
						transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
					>
						Stay ahead of our drops
					</motion.h2>
					<motion.p
						className="relative mt-3 max-w-2xl text-lg text-neutral-200 leading-7"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.8 }}
						transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
					>
						Get updates on future products, company growth, and how we are
						building the vision and plan.
					</motion.p>

					<motion.form
						className="relative mt-6"
						onSubmit={event => event.preventDefault()}
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.8 }}
						transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
					>
						<div className="flex w-full flex-col gap-4 md:flex-row">
							<input
								type="email"
								required
								placeholder="you@ravix.studio"
								className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-base font-sans text-white placeholder:text-neutral-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30 transition"
							/>
							<Button
								type="submit"
								icon={<RiMailAddLine />}
								className="w-full md:w-auto"
							>
								join the newsletter
							</Button>
						</div>
					</motion.form>

					<motion.div
						className="relative mt-6 flex flex-wrap gap-3 text-sm text-neutral-200"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.8 }}
						transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
					>
						<span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
							Future product drops
						</span>
						<span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
							Growth and hiring notes
						</span>
						<span className="rounded-full border border-white/10 bg-white/10 px-3 py-1">
							Vision, plan, and experiments
						</span>
					</motion.div>
				</motion.div>
			</section>

			<footer className="relative overflow-hidden bg-black px-6 pb-10 pt-8 md:pb-14 md:pt-10">
				<motion.div
					className="absolute left-6 right-6 top-6 h-px bg-linear-to-r from-transparent via-white/12 to-transparent"
					initial={{ scaleX: 0, opacity: 0 }}
					whileInView={{ scaleX: 1, opacity: 1 }}
					viewport={{ once: true, amount: 0.6 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				/>
				<motion.div
					className="absolute right-6 top-12 text-[10px] font-mono uppercase tracking-[0.24em] text-white/60"
					initial={{ opacity: 0, y: -6 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.7 }}
					transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
				>
					copyright 2025 © ravix studio
				</motion.div>
				<motion.div
					className="relative mt-10 flex min-h-40 items-end justify-center md:mt-12 md:min-h-55"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.45 }}
					transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
				>
					<span
						className="pointer-events-none select-none text-[22vw] leading-[0.8] font-black uppercase tracking-[0.12em] text-transparent"
						style={{
							WebkitTextStroke: "1.6px rgba(255,255,255,0.12)",
							opacity: 0.65,
							WebkitMaskImage:
								"linear-gradient(to bottom, transparent 0%, black 25%, black 60%, transparent 90%)",
							position: "absolute",
							bottom: "-38%",
							left: "50%",
							transform: "translateX(-50%)",
						}}
					>
						RAVIX
					</span>
				</motion.div>
			</footer>
		</div>
	);
}
