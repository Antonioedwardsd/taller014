// src/app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
	return (
		<main className="pt-24 pb-20">
			<div className="container mx-auto px-4">
				<div className="max-w-5xl mx-auto">
					{/* Hero section */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
						<div>
							<h1 className="text-3xl md:text-4xl font-bold mb-6">Sobre mí</h1>
							<p className="text-lg text-gray-300 mb-6">
								Soy un arquitecto con X años de experiencia diseñando espacios
								que combinan estética, funcionalidad y sostenibilidad.
							</p>
							<p className="text-lg text-gray-300">
								Mi enfoque se centra en entender las necesidades únicas de cada
								cliente y crear soluciones arquitectónicas que superen sus
								expectativas, siempre con un fuerte compromiso con la
								sostenibilidad y el respeto por el entorno.
							</p>
						</div>
						<div className="relative h-[400px] md:h-[500px]">
							<Image
								src="/images/nuni.jpg"
								alt="Tu nombre - Arquitecto"
								fill
								className="object-cover rounded-lg"
							/>
						</div>
					</div>

					{/* Experience section */}
					<div className="mb-16">
						<h2 className="text-2xl md:text-3xl font-bold mb-6">Experiencia</h2>

						{/* Timeline */}
						<div className="space-y-12">
							<div className="relative pl-10 border-l-2 border-gray-200">
								<div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-black"></div>
								<div>
									<h3 className="text-xl font-semibold">
										Nombre del Estudio Actual
									</h3>
									<p className="text-gray-200">
										2019 - Presente | Arquitecto Principal
									</p>
									<p className="mt-2 text-gray-300">
										Descripción de tus responsabilidades y logros principales en
										este puesto.
									</p>
								</div>
							</div>

							<div className="relative pl-10 border-l-2 border-gray-200">
								<div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-black"></div>
								<div>
									<h3 className="text-xl font-semibold">Estudio Anterior</h3>
									<p className="text-gray-200">
										2015 - 2019 | Arquitecto Senior
									</p>
									<p className="mt-2 text-gray-300">
										Descripción de tus responsabilidades y logros principales en
										este puesto.
									</p>
								</div>
							</div>

							{/* Añade más experiencia según sea necesario */}
						</div>
					</div>

					{/* Education section */}
					<div className="mb-16">
						<h2 className="text-2xl md:text-3xl font-bold mb-6">Educación</h2>

						<div className="space-y-8">
							<div>
								<h3 className="text-xl font-semibold">
									Máster en Arquitectura Sostenible
								</h3>
								<p className="text-gray-300">Universidad XYZ | 2010 - 2012</p>
							</div>

							<div>
								<h3 className="text-xl font-semibold">Grado en Arquitectura</h3>
								<p className="text-gray-300">Universidad ABC | 2005 - 2010</p>
							</div>
						</div>
					</div>

					{/* Skills section */}
					<div>
						<h2 className="text-2xl md:text-3xl font-bold mb-6">Habilidades</h2>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div>
								<h3 className="text-xl font-semibold mb-4">Software</h3>
								<ul className="space-y-2">
									<li className="flex items-center">
										<span className="w-40">AutoCAD</span>
										<div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
											<div
												className="h-full bg-black"
												style={{ width: "95%" }}
											></div>
										</div>
									</li>
									<li className="flex items-center">
										<span className="w-40">Revit</span>
										<div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
											<div
												className="h-full bg-black"
												style={{ width: "90%" }}
											></div>
										</div>
									</li>
									<li className="flex items-center">
										<span className="w-40">SketchUp</span>
										<div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
											<div
												className="h-full bg-black"
												style={{ width: "85%" }}
											></div>
										</div>
									</li>
									<li className="flex items-center">
										<span className="w-40">Photoshop</span>
										<div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
											<div
												className="h-full bg-black"
												style={{ width: "80%" }}
											></div>
										</div>
									</li>
								</ul>
							</div>

							<div>
								<h3 className="text-xl font-semibold mb-4">Profesional</h3>
								<ul className="space-y-2">
									<li className="flex items-center">
										<span className="w-40">Diseño Arquitectónico</span>
										<div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
											<div
												className="h-full bg-black"
												style={{ width: "95%" }}
											></div>
										</div>
									</li>
									<li className="flex items-center">
										<span className="w-40">Gestión de Proyectos</span>
										<div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
											<div
												className="h-full bg-black"
												style={{ width: "90%" }}
											></div>
										</div>
									</li>
									<li className="flex items-center">
										<span className="w-40">Diseño Sostenible</span>
										<div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
											<div
												className="h-full bg-black"
												style={{ width: "85%" }}
											></div>
										</div>
									</li>
									<li className="flex items-center">
										<span className="w-40">Visualización 3D</span>
										<div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
											<div
												className="h-full bg-black"
												style={{ width: "75%" }}
											></div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
