"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

// Array de imágenes para el hero
const heroImages = [
	"/images/movistar-1.png",
	"/images/photos/arica-city-center/arica-1.jpg",
	"/images/photos/colegio/colegio-4.jpg",
];

export function Hero() {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);

	// Cambiar la imagen cada 5 segundos
	useEffect(() => {
		const interval = setInterval(() => {
			setIsTransitioning(true);
			setTimeout(() => {
				setCurrentImageIndex(
					(prevIndex) => (prevIndex + 1) % heroImages.length
				);
				setIsTransitioning(false);
			}, 2000); // Tiempo de transición de 500ms
		}, 5000); // Cambiar cada 5 segundos

		return () => clearInterval(interval);
	}, []);

	const scrollToProjects = () => {
		const projectsSection = document.getElementById("featured-projects");
		if (projectsSection) {
			const navbarHeight = 32;
			const projectsPosition =
				projectsSection.getBoundingClientRect().top + window.scrollY;

			window.scrollTo({
				top: projectsPosition - navbarHeight,
				behavior: "smooth",
			});
		}
	};

	return (
		<section className="relative h-screen w-full flex items-start justify-center overflow-hidden">
			{/* Background images */}
			<div className="absolute inset-0 z-0">
				{heroImages.map((img, index) => (
					<div
						key={index}
						className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
							currentImageIndex === index
								? "opacity-100"
								: "opacity-0 pointer-events-none"
						}`}
					>
						<Image
							src={img}
							alt={`Arquitectura destacada ${index + 1}`}
							fill
							className={`object-cover ${
								isTransitioning
									? "transition-transform duration-500 scale-105"
									: "transition-transform duration-1000 scale-100"
							}`}
							priority={index === 0}
						/>
					</div>
				))}
				<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black z-10"></div>
			</div>
			<div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-white text-center flex flex-col items-center  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<div className="max-w-2xl mx-auto">
					<div className="flex justify-center">
						<div className="w-96 md:w-[500px] lg:w-[600px] relative h-24 md:h-32 lg:h-40">
							<Image
								src="/images/logo_hero.png"
								alt="José Javier Donoso Logo"
								fill
								className="object-contain"
								priority
							/>
						</div>
					</div>

					<p className="text-xl md:text-2xl mt-6 mb-6 opacity-90 font-light text-center">
						Maquetas que{" "}
						<span className="font-medium">materializan visiones</span>{" "}
						arquitectónicas
					</p>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
				<button
					onClick={scrollToProjects}
					className="animate-bounce bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors"
					aria-label="Scroll to featured projects"
				>
					<svg
						className="w-6 h-6 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</button>
			</div>
		</section>
	);
}
