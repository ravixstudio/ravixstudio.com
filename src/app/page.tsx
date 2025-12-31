"use client";
import { LogoFullLight } from "@/components/icons";
import { Button } from "../components/ui/button";
import { RiDiscordFill, RiTwitterXFill, RiMailAddLine } from "@remixicon/react";
import { StarsBackground } from "@/components/ui/stars-background";
import { Flare } from "../components/assets/flare";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";

export default function Home() {
	const currentYear = new Date().getFullYear();
	return (
		<div className="relative bg-black text-white overflow-hidden">
			<StarsBackground starDensity={0.0004} />

			<div className="relative flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 sm:py-16 md:px-10">
				<motion.div
					className="flex flex-col items-center gap-6 sm:gap-8 relative w-full max-w-5xl"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<motion.div
						className="absolute -top-32 sm:-top-52 left-1/2 -translate-x-1/2 w-full max-w-[100vw] overflow-hidden"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
					>
						<Flare className="w-full h-auto" />
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
						className="scale-75 sm:scale-100"
					>
						<LogoFullLight />
					</motion.div>

					<motion.p
						className="text-sm sm:text-base font-mono leading-5 -tracking-[1.5%] text-center"
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
						<h1 className="text-[32px] sm:text-[52px] lg:text-[64px] font-sans font-medium -tracking-[1.5%] leading-[110%] sm:leading-[105%] text-center px-4 flex flex-col items-center">
							<span className="text-neutral-400">Engineering for</span>
							<span className="overflow-hidden block">
								<FlipWords
									words={["Real Problems", "The Community", "Your Growth"]}
									duration={3000}
									className="text-[32px] sm:text-[52px] lg:text-[64px] font-sans font-medium bg-gradient-to-r from-white via-white to-blue-500 bg-clip-text text-transparent"
								/>
							</span>
						</h1>
						<p className="text-neutral-400 font-sans text-sm sm:text-base md:text-lg leading-6 sm:leading-7 -tracking-[1.5%] text-center max-w-xl px-4">
							A shared space for designers, developers and builders
						</p>
					</motion.div>

					<div className="flex w-full max-w-md mx-auto flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center">
						<motion.a
							href="https://discord.gg/PkX5csktKG"
							target="_blank"
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
							className="w-full sm:w-auto"
						>
							<Button className="w-full" icon={<RiDiscordFill />}>
								join the discord
							</Button>
						</motion.a>

						<motion.a
							href="https://x.com/ravixstudio"
							target="_blank"
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
							className="w-full sm:w-auto"
						>
							<Button
								className="w-full"
								icon={<RiTwitterXFill />}
								variant="outlined"
							>
								follow on x
							</Button>
						</motion.a>
					</div>
				</motion.div>
			</div>

			<section className="relative px-4 sm:px-5 pb-16 sm:pb-20 md:pb-24">
				<motion.div
					className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-5 sm:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.6)] backdrop-blur md:p-12"
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
				>
					<div className="absolute -right-12 sm:-right-24 -top-12 sm:-top-24 h-32 w-32 sm:h-56 sm:w-56 rounded-full bg-blue-500/20 blur-3xl" />
					<div className="absolute -left-5 sm:-left-10 bottom-0 h-24 w-24 sm:h-40 sm:w-40 rounded-full bg-white/10 blur-3xl" />

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
						className="relative text-2xl sm:text-3xl md:text-4xl font-sans font-medium leading-tight -tracking-[1.5%]"
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.8 }}
						transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
					>
						Stay ahead of our drops
					</motion.h2>
					<motion.p
						className="relative mt-3 max-w-2xl text-sm sm:text-base md:text-lg text-neutral-200 leading-6 sm:leading-7"
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
						<div className="flex w-full flex-col gap-3 sm:gap-4 md:flex-row">
							<input
								type="email"
								required
								placeholder="you@ravix.studio"
								className="w-full rounded-xl sm:rounded-2xl border border-white/15 bg-white/5 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg font-sans text-white placeholder:text-neutral-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30 transition"
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
						className="relative mt-6 flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-neutral-200"
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

			<footer className="relative overflow-hidden bg-black px-4 pb-8 pt-6 sm:px-6 md:pb-14 md:pt-10">
				<motion.div
					className="mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-white/12 to-transparent"
					initial={{ scaleX: 0, opacity: 0 }}
					whileInView={{ scaleX: 1, opacity: 1 }}
					viewport={{ once: true, amount: 0.6 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				/>
				<motion.div
					className="mx-auto mt-3 w-full max-w-5xl px-2 text-center sm:text-right text-[9px] sm:text-[10px] md:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.18em] text-white/70"
					initial={{ opacity: 0, y: -6 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.7 }}
					transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
				>
					copyright {currentYear} © ravix studio
				</motion.div>
				<motion.div
					className="relative mx-auto mt-4 flex min-h-[90px] w-full max-w-6xl items-end justify-center sm:mt-14 md:mt-16 sm:min-h-[200px]"
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
				>
					<span
						className="pointer-events-none select-none text-[30vw] sm:text-[24vw] md:text-[22vw] leading-[0.8] font-black uppercase tracking-[0.12em] text-transparent"
						style={{
							WebkitTextStroke: "1px rgba(255,255,255,0.12)",
							opacity: 0.72,
							WebkitMaskImage:
								"linear-gradient(to bottom, transparent 0%, black 30%, black 62%, transparent 92%)",
							position: "absolute",
							bottom: "-34%",
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
