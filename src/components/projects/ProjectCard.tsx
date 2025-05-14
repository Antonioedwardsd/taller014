import Image from "next/image";
import Link from "next/link";
import { Project } from "../../types";

interface ProjectCardProps {
	project: Project;
	featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
	return (
		<Link href={`/projects/${project.id}`} className="group block">
			<div
				className={`overflow-hidden  bg-black shadow-md hover:shadow-xl transition-all duration-300 h-full transform group-hover:-translate-y-1 ${
					featured ? "ring-2 ring-primary-500 ring-opacity-50" : ""
				}`}
			>
				<figure className="relative h-87 w-full overflow-hidden grid">
					<Image
						src={project.coverImage}
						alt={project.title}
						fill
						className="object-cover transition-transform duration-500 group-hover:scale-110"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
					<div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

					{featured && (
						<div className="absolute top-3 right-3 bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
							Destacado
						</div>
					)}

					<figcaption
						className="absolute inset-0 flex flex-col justify-end p-4 transform transition-transform duration-400 
                        bg-gradient-to-t from-black/80 via-black/50 to-transparent translate-y-full group-hover:translate-y-0"
					>
						<h3 className="text-white text-xl font-bold mb-1">
							{project.title}
						</h3>
						<p className="text-gray-200 text-sm mb-2">
							{project.location} · {project.year}
						</p>
						<div className="flex justify-between items-center">
							<span className="text-sm font-medium text-white flex items-center bg-black/30 px-3 py-1 rounded-full hover:bg-white/30 hover:text-white transition-colors duration-300">
								Ver detalles
								<svg
									className="w-4 h-4 ml-1"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
										clipRule="evenodd"
									/>
								</svg>
							</span>
						</div>
					</figcaption>
				</figure>
			</div>
		</Link>
	);
}
