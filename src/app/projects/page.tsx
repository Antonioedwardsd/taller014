import { Metadata } from "next";
import { getAllProjects } from "@/lib/data";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Project } from "../../types";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
	title: "Proyectos | José Javier Donoso Arquitecto",
	description:
		"Explora el portafolio de proyectos arquitectónicos de José Javier Donoso, incluyendo residencias, espacios comerciales y más.",
};

export default function ProjectsPage() {
	const projects = getAllProjects();

	return (
		<div className="pt-24 pb-20">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center mb-8">
					<h1 className="text-3xl md:text-4xl font-bold">
						Proyectos Taller 014
					</h1>

					{/* Reemplazado Link por Button */}
					<Button
						href="/contact"
						variant="outline"
						size="sm"
						className="rounded-md"
					>
						Contacta para tu proyecto
					</Button>
				</div>

				<p className="text-lg text-gray-300 max-w-3xl mb-10">
					Explora mi portafolio de proyectos arquitectónicos, cada uno diseñado
					con un enfoque en la estética, funcionalidad y sustentabilidad.
				</p>

				{/* Grid de proyectos */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project: Project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</div>
	);
}
