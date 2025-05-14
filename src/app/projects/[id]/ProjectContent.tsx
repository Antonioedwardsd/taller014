"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import ImageModal from "@/components/projects/ImageModal";
import { Project } from "@/types";

export default function ProjectContent({ project }: { project: Project }) {
	const [modalImage, setModalImage] = useState<string | null>(null);

	// Crear un array que contenga todas las imágenes del proyecto
	const allProjectImages = [project.coverImage, ...(project.images || [])];

	const openModal = (imageUrl: string) => {
		setModalImage(imageUrl);
	};

	const closeModal = () => {
		setModalImage(null);
	};

	const changeModalImage = (newImageUrl: string) => {
		setModalImage(newImageUrl);
	};

	return (
		<div className="pt-24 pb-20">
			<div className="container mx-auto px-4">
				{/* Navegación de regreso */}
				<Button
					href="/projects"
					variant="outline"
					size="sm"
					className="mb-6 inline-flex items-center"
				>
					<svg
						className="w-5 h-5 mr-2"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M10 19l-7-7m0 0l7-7m-7 7h18"
						/>
					</svg>
					Volver a proyectos
				</Button>

				{/* Contenido del proyecto */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
					{/* Columna de imágenes */}
					<div className="lg:col-span-2">
						<div
							className="relative h-[60vh] w-full rounded-lg overflow-hidden mb-6 cursor-pointer"
							onClick={() => openModal(project.coverImage)}
						>
							<Image
								src={project.coverImage}
								alt={project.title}
								fill
								className="object-cover hover:scale-105 transition-transform duration-300"
								priority
							/>
						</div>

						{/* Galería de imágenes adicionales si existen */}
						{project.images && (
							<div className="grid grid-cols-3 gap-4 mt-6">
								{project.images.map((image: string, index: number) => (
									<div
										key={index}
										className="relative h-40 rounded-lg overflow-hidden cursor-pointer"
										onClick={() => openModal(image)}
									>
										<Image
											src={image}
											alt={`${project.title} - imagen ${index + 1}`}
											fill
											className="object-cover hover:scale-105 transition-transform duration-300"
										/>
									</div>
								))}
							</div>
						)}
					</div>

					{/* Columna de información */}
					<div>
						<h1 className="text-3xl md:text-4xl font-bold mb-4">
							{project.title}
						</h1>

						<div className="mb-6 text-gray-300">
							<p className="mb-2">
								<span className="font-semibold">Ubicación:</span>{" "}
								{project.location}
							</p>
							<p className="mb-2">
								<span className="font-semibold">Año:</span> {project.year}
							</p>

							{/* Otros detalles del proyecto */}
							{project.client && (
								<p className="mb-2">
									<span className="font-semibold">Cliente:</span>{" "}
									{project.client}
								</p>
							)}
							{project.area && (
								<p className="mb-2">
									<span className="font-semibold">Área:</span> {project.area}
								</p>
							)}
						</div>

						{/* Descripción detallada */}
						<div className="prose max-w-none">
							<h2 className="text-xl font-semibold mb-3">
								Sobre este proyecto
							</h2>
							<p className="text-gray-300 mb-4">{project.description}</p>

							{/* Si tienes una descripción más detallada en HTML */}
							{project.fullDescription && (
								<div
									dangerouslySetInnerHTML={{ __html: project.fullDescription }}
								/>
							)}
						</div>

						{/* Botón de contacto */}
						<Button
							href="/contact"
							variant="outline"
							size="md"
							className="mt-8"
						>
							Consultar sobre este proyecto
						</Button>
					</div>
				</div>
			</div>

			{/* Modal de imagen con navegación */}
			<ImageModal
				isOpen={!!modalImage}
				imageUrl={modalImage || ""}
				altText={project.title}
				onClose={closeModal}
				allImages={allProjectImages}
				onChangeImage={changeModalImage}
			/>
		</div>
	);
}
