"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Navbar() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 20;
			if (isScrolled !== scrolled) {
				setScrolled(isScrolled);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrolled]);

	const isActive = (path: string) => {
		if (scrolled) {
			return pathname === path
				? "text-gray-900 font-semibold border-b-2 border-gray-900"
				: "text-gray-700 hover:text-gray-900";
		} else {
			return pathname === path
				? "text-white font-semibold border-b-2 border-white"
				: "text-white/90 hover:text-white";
		}
	};

	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				scrolled
					? "bg-white/75 backdrop-blur-md shadow-md border-b border-gray-200"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
				<div className="flex justify-between h-12 items-center">
					<Link
						href="/"
						className="transition-opacity duration-300 hover:opacity-80 relative"
					>
						<Image
							src="/images/logo_black.png"
							alt="José Javier Donoso"
							width={150}
							height={40}
							className={`transition-opacity duration-300 ${
								scrolled ? "opacity-100" : "opacity-0"
							}`}
							priority
						/>
						<Image
							src="/images/logo_white.png"
							alt="José Javier Donoso"
							width={150}
							height={40}
							className={`transition-opacity duration-300 absolute top-0 ${
								scrolled ? "opacity-0" : "opacity-100"
							}`}
							priority
						/>
					</Link>

					<div className="hidden md:block">
						<div className="flex items-center space-x-10">
							<Link
								href="/"
								className={`relative group ${isActive(
									"/"
								)} transition-colors px-2 py-1`}
							>
								Inicio
								<span
									className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
										scrolled ? "bg-gray-900" : "bg-white"
									} group-hover:w-full transition-all duration-300`}
								></span>
							</Link>

							<Link
								href="/about"
								className={`relative group ${isActive(
									"/about"
								)} transition-colors px-2 py-1`}
							>
								Sobre mí
								<span
									className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
										scrolled ? "bg-gray-900" : "bg-white"
									} group-hover:w-full transition-all duration-300`}
								></span>
							</Link>

							<Link
								href="/projects"
								className={`relative group ${isActive(
									"/projects"
								)} transition-colors px-2 py-1`}
							>
								Portafolio
								<span
									className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
										scrolled ? "bg-gray-900" : "bg-white"
									} group-hover:w-full transition-all duration-300`}
								></span>
							</Link>

							<Link
								href="/contact"
								className={`relative group ${isActive(
									"/contact"
								)} transition-colors px-2 py-1`}
							>
								Contacto
								<span
									className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
										scrolled ? "bg-gray-900" : "bg-white"
									} group-hover:w-full transition-all duration-300`}
								></span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
