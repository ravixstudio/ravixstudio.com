import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
	"uppercase font-mono text-base leading-5 -tracking-[1.5%] px-4 py-3.5 flex gap-2 items-center transition-all duration-300 ease-out active:scale-95 relative overflow-hidden group",
	{
		variants: {
			variant: {
				contained:
					"bg-white text-black hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 hover:-translate-y-1 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-black/15 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700",
				outlined:
					"border border-[#292929] hover:border-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105 hover:-translate-y-1 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-700",
			},
		},
	}
);

export function Button({
	children,
	variant = "contained",
	className,
	icon,
	...props
}: {
	children: ReactNode;
	variant?: "contained" | "outlined";
	className?: string;
	icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<button
			type={props.type ?? "button"}
			className={cn(buttonVariants({ variant }), className)}
			{...props}
		>
			{icon && (
				<div className="h-5 w-5 mr-2 transition-transform group-hover:rotate-12 group-hover:scale-110">
					{icon}
				</div>
			)}
			<p className="relative z-10">{children}</p>
		</button>
	);
}
