import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export function Footer() {
	return (
		<footer className="relative pt-0 pb-8">
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row md:items-center md:justify-between">
					<p className="text-gray-300">
						© {new Date().getFullYear()} José Javier Donoso. Todos los derechos
						reservados.
					</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<a
							href="https://www.instagram.com"
							className="text-gray-300 hover:text-gray-200 transition-all duration-300 transform hover:scale-110"
							aria-label="Instagram"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram size={24} />
						</a>
						<a
							href="https://www.pinterest.com"
							className="text-gray-300 hover:text-gray-200 transition-all duration-300 transform hover:scale-110"
							aria-label="Pinterest"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaEnvelope size={24} />
						</a>
						<a
							href="https://www.linkedin.com"
							className="text-gray-300 hover:text-gray-200 transition-all duration-300 transform hover:scale-110"
							aria-label="LinkedIn"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedinIn size={24} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
