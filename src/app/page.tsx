import { LogoFullLight } from "@/components/icons";
import { Button } from "../components/button";
import { RiDiscordFill, RiTwitterXFill } from "@remixicon/react";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-black">
			<div className="flex flex-col items-center gap-8">
				<LogoFullLight />
				<p className="text-base font-mono leading-5 -tracking-[1.5%]">
					{"//"} open-source driven &middot; pragmatic engineering
				</p>

				<div className="flex flex-col gap-5 items-center">
					<h1 className="text-[64px] font-sans font-medium -tracking-[1.5%] text-center leading-[100%]">
						Engineering for <span>The Community</span>
					</h1>
					<p className="text-neutral-400 font-sans text-xl leading-5 -tracking-[1.5%]">
						A shared space for designers, developers and builders
					</p>
				</div>

				<div className="flex items-center gap-3">
					<a href="https://discord.gg/PkX5csktKG" target="_blank">
						<Button icon={<RiDiscordFill />}>join the discord</Button>
					</a>

					<a href="https://x.com/ravixstudio" target="_blank">
						<Button icon={<RiTwitterXFill />} variant="outlined">
							follow on x
						</Button>
					</a>
				</div>
			</div>
		</div>
	);
}
