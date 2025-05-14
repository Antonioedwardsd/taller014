import Link from "next/link";
import React from "react";

type ButtonProps = {
	href?: string;
	className?: string;
	children: React.ReactNode;
	onClick?: () => void;
	variant?: "primary" | "secondary" | "outline";
	size?: "sm" | "md" | "lg";
};

export function Button({
	href,
	className = "",
	children,
	onClick,
	variant = "primary",
	size = "md",
}: ButtonProps) {
	const baseStyles = "inline-block font-medium transition-colors";

	const sizeStyles = {
		sm: "px-4 py-2 text-sm",
		md: "px-6 py-3 text-base",
		lg: "px-8 py-4 text-lg",
	};

	const variantStyles = {
		// Gradiente de grises profundos con un acento suave de teal
		primary:
			"bg-gradient-to-r from-slate-700 via-gray-900 to-teal-500 " +
			"text-gray-300 shadow-md hover:shadow-lg",

		// Fondo uniforme en gris muy oscuro y texto desaturado
		secondary:
			"bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gray-100 " +
			"shadow-sm hover:shadow-md",

		// Borde sutil y fondo transparente, con leve halo al pasar el ratón
		outline:
			"bg-transparent border-2 border-gray-600 text-gray-200 " +
			"hover:bg-white/10 hover:border-gray-400",
	};

	const animationStyles =
		"transform transition duration-300 ease-in-out hover:scale-105 active:scale-95";

	const focusStyles =
		"focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500";

	const underlineEffect =
		"relative after:content-[''] after:absolute after:bottom-0 after:left-0 " +
		"after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 " +
		"hover:after:w-full";

	const finalClasses = [
		baseStyles,
		sizeStyles[size],
		variantStyles[variant],
		animationStyles,
		focusStyles,
		underlineEffect,
		className,
	].join(" ");

	if (href) {
		return (
			<Link href={href} className={finalClasses}>
				{children}
			</Link>
		);
	}

	return (
		<button onClick={onClick} className={finalClasses}>
			{children}
		</button>
	);
}
