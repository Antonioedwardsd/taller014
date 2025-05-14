/**
 * PÁGINA DE INICIO
 * Portafolio de José Javier Donoso - Arquitecto
 */

import { Hero } from "../components/home/Hero";
import FeaturedProjects from "../components/home/FeaturedProjects";

export default function Home() {
	return (
		<>
			<Hero />
			<FeaturedProjects />
		</>
	);
}
