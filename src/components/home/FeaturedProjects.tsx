"use client";
import { getFeaturedProjects } from "@/lib/data";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "../ui/Button";
import { useState, useEffect, useRef } from "react";

const FeaturedProjects = () => {
	const featuredProjects = getFeaturedProjects();
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		// Guarda una referencia al elemento actual
		const currentElement = sectionRef.current;

		const observer = new IntersectionObserver(
			([entry]) => {
				// Cuando el componente entra en el viewport
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target);
				}
			},
			{
				threshold: 0.15, // Cuando el 15% del componente sea visible
				rootMargin: "-50px", // Activa un poco antes de llegar al componente
			}
		);

		if (currentElement) {
			observer.observe(currentElement);
		}

		return () => {
			if (currentElement) {
				observer.unobserve(currentElement);
			}
		};
	}, []);

	return (
		<>
			<section
				id="featured-projects"
				ref={sectionRef}
				className={`py-4 md:py-8 pt-24 bg-black text-white min-h-screen flex flex-col justify-center transition-opacity duration-1000 ease-in-out ${
					isVisible ? "opacity-100" : "opacity-0"
				}`}
			>
				<div className="container mx-auto px-4">
					{/* Título y descripción */}
					<div
						className={`text-center mb-8 md:mb-12 transition-transform duration-1000 delay-200 ${
							isVisible ? "translate-y-0" : "translate-y-10"
						}`}
					>
						<h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
							Proyectos destacados
						</h2>
						<p className="text-gray-300 text-md max-w-2xl mx-auto">
							Una selección de maquetas que representan distintas etapas del
							proceso creativo y constructivo, destacando el detalle, la escala
							y la materialidad en cada proyecto.
						</p>
					</div>

					{/* Grid layout for projects */}
					<div
						className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 transition-transform duration-1000 delay-300 ${
							isVisible ? "translate-y-0" : "translate-y-10"
						}`}
					>
						{featuredProjects.map((project) => (
							<div key={project.id} className="px-2">
								<ProjectCard project={project} />
							</div>
						))}
					</div>

					<div
						className={`text-center mt-6 transition-all duration-1000 delay-500 ${
							isVisible ? "opacity-100" : "opacity-0"
						}`}
					>
						<Button href="/projects" variant="outline" size="sm">
							Ver todos los proyectos
						</Button>
					</div>
				</div>
			</section>
		</>
	);
};

export default FeaturedProjects;
