// src/app/contact/page.tsx
export default function ContactPage() {
	return (
		<main className="pt-24 pb-20">
			<div className="container mx-auto px-4">
				<div className="max-w-5xl mx-auto">
					<h1 className="text-3xl md:text-4xl font-bold mb-6">Contacto</h1>
					<p className="text-lg text-gray-300 max-w-3xl mb-12">
						Estoy disponible para nuevos proyectos y colaboraciones. Si tienes
						alguna idea o proyecto en mente, no dudes en contactarme.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<div>
							<form className="space-y-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-300 mb-1"
									>
										Nombre
									</label>
									<input
										type="text"
										id="name"
										name="name"
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
									/>
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-300 mb-1"
									>
										Correo electrónico
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
									/>
								</div>

								<div>
									<label
										htmlFor="subject"
										className="block text-sm font-medium text-gray-300 mb-1"
									>
										Asunto
									</label>
									<input
										type="text"
										id="subject"
										name="subject"
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-300 mb-1"
									>
										Mensaje
									</label>
									<textarea
										id="message"
										name="message"
										rows={6}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
									></textarea>
								</div>

								<button
									type="submit"
									className="w-full bg-black border border-gray-300 text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
								>
									Enviar mensaje
								</button>
							</form>
						</div>

						<div>
							<div className="bg-gray-100 p-6 rounded-lg">
								<h2 className="text-xl font-semibold mb-4  text-gray-600">
									Información de contacto
								</h2>

								<div className="space-y-4">
									<div className="flex items-start">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 mr-3 mt-1 text-gray-600"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M14.243 5.757a6 6 0 10-8.486 8.486l4.243 4.243 4.243-4.243a6 6 0 000-8.486zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
												clipRule="evenodd"
											/>
										</svg>
										<div>
											<h3 className="font-semibold  text-gray-700">
												Dirección
											</h3>
											<p className="text-gray-600">
												Calle Ejemplo 123, Santiago, Chile
											</p>
										</div>
									</div>

									<div className="flex items-start">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 mr-3 mt-1 text-gray-600"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
										</svg>
										<div>
											<h3 className="font-semibold text-gray-700">Teléfono</h3>
											<p className="text-gray-600">+34 123 456 789</p>
										</div>
									</div>

									<div className="flex items-start">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5 mr-3 mt-1 text-gray-600"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
											<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
										</svg>
										<div>
											<h3 className="font-semibold text-gray-700">
												Correo electrónico
											</h3>
											<p className="text-gray-600">email@ejemplo.com</p>
										</div>
									</div>
								</div>

								<div className="mt-8">
									<h3 className="text-lg font-semibold mb-4 text-gray-700">
										Sígueme en redes sociales
									</h3>
									<div className="flex space-x-4">
										<a href="#" className="text-gray-600 hover:text-black">
											<span className="sr-only">Instagram</span>
											<svg
												className="h-6 w-6"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													fillRule="evenodd"
													d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.234.585 1.8 1.15.566.566.902 1.132 1.152 1.8.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.903 4.903 0 01-1.153 1.8c-.566.566-1.132.902-1.8 1.152-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.903 4.903 0 01-1.8-1.153 4.903 4.903 0 01-1.152-1.8c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.903 4.903 0 011.153-1.8A4.903 4.903 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
													clipRule="evenodd"
												/>
											</svg>
										</a>
										<a href="#" className="text-gray-600 hover:text-black">
											<span className="sr-only">LinkedIn</span>
											<svg
												className="h-6 w-6"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
											</svg>
										</a>
										<a href="#" className="text-gray-600 hover:text-black">
											<span className="sr-only">Behance</span>
											<svg
												className="h-6 w-6"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
