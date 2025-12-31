"use client";
import { LogoFullLight } from "@/components/icons";
import { Button } from "../components/ui/button";
import { RiDiscordFill, RiTwitterXFill } from "@remixicon/react";
import { StarsBackground } from "@/components/ui/stars-background";
import { Flare } from "../components/assets/flare";
import { FlipWords } from "@/components/ui/flip-words";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <StarsBackground starDensity={0.0004} />
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
          <h1 className="text-[64px] font-sans font-medium -tracking-[1.5%] leading-[100%]">
            <span className="text-neutral-400">Engineering for </span>
            <FlipWords
              words={["Real Problems", "Community", "Your Growth"]}
              duration={3000}
              className="text-[64px] font-sans font-medium bg-linear-to-r from-white via-white to-blue-500 bg-clip-text text-transparent"
            />
          </h1>
          <p className="text-neutral-400 font-sans text-xl leading-5 -tracking-[1.5%]">
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
  );
}
