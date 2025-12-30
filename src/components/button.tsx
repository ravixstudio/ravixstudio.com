import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
	"uppercase font-mono text-base leading-5 -tracking-[1.5%] px-4 py-3.5 flex gap-2 items-center transition-all duration-300 ease-out active:scale-95",
	{
		variants: {
			variant: {
				contained:
					"bg-white text-black hover:bg-gray-100 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5",
				outlined:
					"border border-[#292929] hover:border-white hover:bg-white/5 hover:shadow-md hover:scale-105 hover:-translate-y-0.5",
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
	children: React.ReactNode;
	variant?: "contained" | "outlined";
	className?: string;
	icon?: React.ReactNode;
}) {
	return (
		<button className={cn(buttonVariants({ variant }), className)} {...props}>
			{icon && <div className="h-5 w-5 mr-2">{icon}</div>} <p>{children}</p>
		</button>
	);
}
