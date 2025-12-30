export function Flare({ className }: { className?: string }) {
	return (
		<svg
			width="1440"
			height="536"
			viewBox="0 0 1440 536"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<g filter="url(#filter0_f_333_1528)">
				<path
					d="M-160 438.596C533.525 -17.7413 918.623 -14.9766 1599 438.596C901.869 88.6797 516.853 93.2693 -160 438.596Z"
					fill="url(#paint0_radial_333_1528)"
				>
					<animate
						attributeName="opacity"
						values="0.4;0.6;0.4"
						dur="4s"
						repeatCount="indefinite"
					/>
				</path>
			</g>
			<path
				d="M30.9844 359.526C564.557 8.93541 860.838 11.0594 1384.3 359.526C851.767 5.02112 524.412 35.3134 30.9844 359.526Z"
				fill="url(#paint1_radial_333_1528)"
			/>
			<g style={{ mixBlendMode: "plus-lighter" }}>
				<path
					d="M30.9844 359.526C564.557 8.93541 860.838 11.0594 1384.3 359.526C851.767 5.02112 524.412 35.3134 30.9844 359.526Z"
					fill="url(#paint2_radial_333_1528)"
					fillOpacity="0.25"
				>
					<animate
						attributeName="fill-opacity"
						values="0.15;0.2;0.15"
						dur="4s"
						repeatCount="indefinite"
					/>
				</path>
			</g>
			<defs>
				<filter
					id="filter0_f_333_1528"
					x="-257.379"
					y="-2.28882e-05"
					width="1953.76"
					height="535.975"
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="60"
						result="effect1_foregroundBlur_333_1528"
					/>
				</filter>
				<radialGradient
					id="paint0_radial_333_1528"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(679.381 97.163) rotate(90) scale(1308.36 508.479)"
				>
					<stop stopColor="#3B82F6" />
					<stop offset="1" stopColor="#3B82F6" stopOpacity="0.02" />
				</radialGradient>
				<radialGradient
					id="paint1_radial_333_1528"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(676.773 97.2132) rotate(90) scale(1005.18 406.489)"
				>
					<stop stopColor="#3B82F6" />
					<stop offset="1" stopColor="#3B82F6" stopOpacity="0.005" />
				</radialGradient>
				<radialGradient
					id="paint2_radial_333_1528"
					cx="0"
					cy="0"
					r="1"
					gradientUnits="userSpaceOnUse"
					gradientTransform="translate(676.773 97.2132) rotate(90) scale(1005.18 406.489)"
				>
					<stop stopColor="white" />
					<stop offset="1" stopColor="white" stopOpacity="0.005" />
				</radialGradient>
			</defs>
		</svg>
	);
}
