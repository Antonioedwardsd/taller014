import { Project } from "../types/index";

// Sample featured projects data
export const projects: Project[] = [
	{
		id: 1,
		title: "Arica City Center",
		description:
			"Un conjunto inmobiliario integral, conformado por 4 Edificios de Departamentos, Antay Hotel & Spa Cinco Estrellas, Casino & Centro de Convenciones, Boulevard Comercial con 31 variadas tiendas y una amplia zona gastronómica con 7 restaurantes de especialidad, único en el norte de Chile, en un entorno natural de hermosos jardines.",
		featured: true,
		coverImage: "/images/photos/ARICA-CITY/arica-1.jpg",
		images: [
			"/images/photos/ARICA-CITY/arica-2.jpg",
			"/images/photos/ARICA-CITY/arica-3.jpg",
			"/images/photos/ARICA-CITY/arica-4.jpg",
			"/images/photos/ARICA-CITY/arica-5.jpg",
		],
		location: "Av. General Velásquez 1109, Arica",
		year: "2023",
		client: "Grupo Marina del Sol",
		area: "45,000 m²",
	},
	{
		id: 2,
		title: "COLEGIO St. Margaret",
		description: "A description of your second featured project.",
		featured: true,
		coverImage: "/images/photos/COLEGIO/colegio-1.jpg",
		images: [
			"/images/photos/COLEGIO/colegio-2.jpg",
			"/images/photos/COLEGIO/colegio-3.jpg",
			"/images/photos/COLEGIO/colegio-4.jpg",
			"/images/photos/COLEGIO/colegio-5.jpg",
		],
		location: "Saint Margaret 150, 2511009 Concón, Valparaíso",
		year: "2005",
		client: "COLEGIO St. Margaret",
		area: "45,000 m²",
	},
	{
		id: 3,
		title: "Edificio Parque Bellavista",
		description:
			"Proyecto residencial ubicado junto al cerro San Cristóbal con amplias áreas verdes.",
		featured: true,
		coverImage: "/images/photos/EDIFICIO-PARQUE-BELLAVISTA/bellavista-4.jpg",
		images: [
			"/images/photos/EDIFICIO-PARQUE-BELLAVISTA/bellavista-1.jpg",
			"/images/photos/EDIFICIO-PARQUE-BELLAVISTA/bellavista-2.jpg",
			"/images/photos/EDIFICIO-PARQUE-BELLAVISTA/bellavista-3.jpg",
		],
		location: "Recoleta, Santiago",
		year: "2020",
		client: "Inmobiliaria Paz",
		area: "19,000 m²",
	},
	{
		id: 4,
		title: "Boulevard Parque Araucano",
		description:
			"Proyecto comercial y de oficinas con amplio espacio verde integrado al Parque Araucano.",
		featured: false,
		coverImage: "/images/photos/BOULEVARD-PARQUE-ARAUCANO/imagen2.jpg",
		images: [
			"/images/photos/BOULEVARD-PARQUE-ARAUCANO/imagen2.jpg",
			"/images/photos/BOULEVARD-PARQUE-ARAUCANO/imagen3.jpg",
		],
		location: "Las Condes, Santiago",
		year: "2019",
		client: "Grupo Patio",
		area: "25,000 m²",
	},
	{
		id: 5,
		title: "Casa Said",
		description:
			"Residencia privada de diseño contemporáneo ubicada en exclusivo sector residencial.",
		featured: false,
		coverImage: "/images/photos/CASA-SAID/said-1.jpg",
		images: [
			"/images/photos/CASA-SAID/said-1.jpg",
			"/images/photos/CASA-SAID/said-2.jpg",
			"/images/photos/CASA-SAID/said-3.jpg",
			"/images/photos/CASA-SAID/said-4.jpg",
			"/images/photos/CASA-SAID/said-5.jpg",
			"/images/photos/CASA-SAID/said-6.jpg",
			"/images/photos/CASA-SAID/said-7.jpg",
		],
		location: "Lo Barnechea, Santiago",
		year: "2018",
		client: "Familia Said",
		area: "850 m²",
	},
	{
		id: 6,
		title: "Condominio Inicia Rancagua",
		description:
			"Desarrollo residencial con amplios espacios comunes y áreas verdes en el centro de Rancagua.",
		featured: true,
		coverImage:
			"/images/photos/CONDOMINIO-INICIA-RANCAGUA/inicia-rancagua-1.jpg",
		images: [
			"/images/photos/CONDOMINIO-INICIA-RANCAGUA/inicia-rancagua-1.jpg",
			"/images/photos/CONDOMINIO-INICIA-RANCAGUA/inicia-rancagua-2.jpg",
			"/images/photos/CONDOMINIO-INICIA-RANCAGUA/inicia-rancagua-3.jpg",
		],
		location: "Rancagua, O'Higgins",
		year: "2021",
		client: "Inmobiliaria Inicia",
		area: "32,000 m²",
	},
	{
		id: 7,
		title: "Condominio Laguna de La Pirámide",
		description:
			"Exclusivo proyecto residencial con vista a laguna artificial y zonas recreativas.",
		featured: false,
		coverImage:
			"/images/photos/CONDOMINIO-LAGUNA-DE-LA-PIRAMIDE--HUECHURABA/laguna-1.jpg",
		images: [
			"/images/photos/CONDOMINIO-LAGUNA-DE-LA-PIRAMIDE--HUECHURABA/laguna-1.jpg",
			"/images/photos/CONDOMINIO-LAGUNA-DE-LA-PIRAMIDE--HUECHURABA/laguna-2.jpg",
			"/images/photos/CONDOMINIO-LAGUNA-DE-LA-PIRAMIDE--HUECHURABA/laguna-3.jpg",
			"/images/photos/CONDOMINIO-LAGUNA-DE-LA-PIRAMIDE--HUECHURABA/laguna-4.jpg",
			"/images/photos/CONDOMINIO-LAGUNA-DE-LA-PIRAMIDE--HUECHURABA/laguna-5.jpg",
			"/images/photos/CONDOMINIO-LAGUNA-DE-LA-PIRAMIDE--HUECHURABA/laguna-6.jpg",
			"/images/photos/CONDOMINIO-LAGUNA-DE-LA-PIRAMIDE--HUECHURABA/laguna-7.jpg",
			"/images/photos/CONDOMINIO-LAGUNA-DE-LA-PIRAMIDE--HUECHURABA/laguna-8.jpg",
			"/images/photos/CONDOMINIO-LAGUNA-DE-LA-PIRAMIDE--HUECHURABA/laguna-9.jpg",
			"/images/photos/CONDOMINIO-LAGUNA-DE-LA-PIRAMIDE--HUECHURABA/laguna-10.jpg",
		],
		location: "Huechuraba, Santiago",
		year: "2020",
		client: "Inmobiliaria Aconcagua",
		area: "40,000 m²",
	},
	{
		id: 8,
		title: "Condominio Parque Magnolio",
		description:
			"Proyecto inmobiliario con amplios departamentos rodeados de áreas verdes con vistas a Valparaíso.",
		featured: false,
		coverImage:
			"/images/photos/CONDOMINIO-PARQUE-MAGNOLIO-VALPARAISO/magnolio-3.jpg",
		images: [
			"/images/photos/CONDOMINIO-PARQUE-MAGNOLIO-VALPARAISO/magnolio-1.jpg",
			"/images/photos/CONDOMINIO-PARQUE-MAGNOLIO-VALPARAISO/magnolio-2.jpg",
			"/images/photos/CONDOMINIO-PARQUE-MAGNOLIO-VALPARAISO/magnolio-3.jpg",
		],
		location: "Valparaíso",
		year: "2019",
		client: "Inmobiliaria Del Puerto",
		area: "28,000 m²",
	},
	{
		id: 9,
		title: "Conjunto Portezuelo",
		description:
			"Complejo residencial de edificios con diseño moderno y amplias áreas comunes.",
		featured: false,
		coverImage: "/images/photos/CONJUNTO-PORTEZUELO/portezuelo-1.jpg",
		images: [
			"/images/photos/CONJUNTO-PORTEZUELO/portezuelo-1.jpg",
			"/images/photos/CONJUNTO-PORTEZUELO/portezuelo-2.jpg",
			"/images/photos/CONJUNTO-PORTEZUELO/portezuelo-3.jpg",
		],
		location: "Colina, Santiago",
		year: "2018",
		client: "Inmobiliaria Fundamenta",
		area: "35,000 m²",
	},
	{
		id: 10,
		title: "Edificio Capuchinos",
		description:
			"Edificio residencial con vista al mar ubicado en sector privilegiado de Viña del Mar.",
		featured: false,
		coverImage:
			"/images/photos/EDIFICIO-CAPUCHINOS-VIÑA-DEL-MAR/capuchinos-1.jpg",
		images: [
			"/images/photos/EDIFICIO-CAPUCHINOS-VIÑA-DEL-MAR/capuchinos-1.jpg",
			"/images/photos/EDIFICIO-CAPUCHINOS-VIÑA-DEL-MAR/capuchinos-2.jpg",
			"/images/photos/EDIFICIO-CAPUCHINOS-VIÑA-DEL-MAR/capuchinos-3.jpg",
		],
		location: "Viña del Mar, Valparaíso",
		year: "2021",
		client: "Inmobiliaria Costa",
		area: "12,500 m²",
	},
	{
		id: 11,
		title: "Edificio Colón Providencia",
		description:
			"Edificio de oficinas clase A en el corazón financiero de Providencia con certificación LEED.",
		featured: false,
		coverImage: "/images/photos/EDIFICIO-COLON--PROVIDENCIA/colon-1.jpg",
		images: [
			"/images/photos/EDIFICIO-COLON--PROVIDENCIA/colon-1.jpg",
			"/images/photos/EDIFICIO-COLON--PROVIDENCIA/colon-2.jpg",
			"/images/photos/EDIFICIO-COLON--PROVIDENCIA/colon-3.jpg",
		],
		location: "Providencia, Santiago",
		year: "2020",
		client: "Grupo Security",
		area: "18,000 m²",
	},
	{
		id: 12,
		title: "Edificio Costa Brava",
		description:
			"Torre residencial de lujo con departamentos frente al mar en Concón.",
		featured: false,
		coverImage: "/images/photos/EDIFICIO-COSTA-BRAVA-CONCON/costa-brava-1.jpg",
		images: [
			"/images/photos/EDIFICIO-COSTA-BRAVA-CONCON/costa-brava-1.jpg",
			"/images/photos/EDIFICIO-COSTA-BRAVA-CONCON/costa-brava-2.jpg",
			"/images/photos/EDIFICIO-COSTA-BRAVA-CONCON/costa-brava-3.jpg",
		],
		location: "Concón, Valparaíso",
		year: "2022",
		client: "Inmobiliaria Altas Cumbres",
		area: "22,000 m²",
	},
	{
		id: 13,
		title: "Edificio Don Vicente",
		description:
			"Edificio residencial que combina arquitectura tradicional con toques contemporáneos.",
		featured: false,
		coverImage:
			"/images/photos/EDIFICIO-DON-VICENTE-RANCAGUA/don-vicente-1.jpg",
		images: [
			"/images/photos/EDIFICIO-DON-VICENTE-RANCAGUA/don-vicente-1.jpg",
			"/images/photos/EDIFICIO-DON-VICENTE-RANCAGUA/don-vicente-2.jpg",
			"/images/photos/EDIFICIO-DON-VICENTE-RANCAGUA/don-vicente-3.jpg",
		],
		location: "Rancagua, O'Higgins",
		year: "2019",
		client: "Inmobiliaria del Sur",
		area: "15,000 m²",
	},
	{
		id: 14,
		title: "Edificio Geosal",
		description:
			"Edificio de departamentos con diseño sustentable y vista al mar.",
		featured: false,
		coverImage: "/images/photos/EDIFICIO-GEOSAL-CONCON/geosal-1.jpg",
		images: [
			"/images/photos/EDIFICIO-GEOSAL-CONCON/geosal-1.jpg",
			"/images/photos/EDIFICIO-GEOSAL-CONCON/geosal-2.jpg",
			"/images/photos/EDIFICIO-GEOSAL-CONCON/geosal-3.jpg",
		],
		location: "Concón, Valparaíso",
		year: "2021",
		client: "Constructora Geosal",
		area: "18,500 m²",
	},
	{
		id: 15,
		title: "Edificio Las Dalias",
		description:
			"Edificio residencial con departamentos de alto estándar en Providencia.",
		featured: false,
		coverImage:
			"/images/photos/EDIFICIO-LAS-DALIAS--PROVIDENCIA/las-dalias-1.jpg",
		images: [
			"/images/photos/EDIFICIO-LAS-DALIAS--PROVIDENCIA/las-dalias-1.jpg",
			"/images/photos/EDIFICIO-LAS-DALIAS--PROVIDENCIA/las-dalias-2.jpg",
			"/images/photos/EDIFICIO-LAS-DALIAS--PROVIDENCIA/las-dalias-3.jpg",
		],
		location: "Providencia, Santiago",
		year: "2020",
		client: "Inmobiliaria Almagro",
		area: "16,000 m²",
	},
	{
		id: 16,
		title: "Edificio Mar Índico",
		description:
			"Complejo residencial con vista panorámica al mar en Viña del Mar.",
		featured: false,
		coverImage:
			"/images/photos/EDIFICIO-MAR-INDICO--VIÑA-DEL-MAR/mar-indico-1.jpg",
		images: [
			"/images/photos/EDIFICIO-MAR-INDICO--VIÑA-DEL-MAR/mar-indico-1.jpg",
			"/images/photos/EDIFICIO-MAR-INDICO--VIÑA-DEL-MAR/mar-indico-2.jpg",
			"/images/photos/EDIFICIO-MAR-INDICO--VIÑA-DEL-MAR/mar-indico-3.jpg",
		],
		location: "Viña del Mar, Valparaíso",
		year: "2022",
		client: "Inmobiliaria Océano",
		area: "20,000 m²",
	},
	{
		id: 17,
		title: "Edificio Miraflores",
		description:
			"Torre residencial en ubicación privilegiada con departamentos de variadas tipologías.",
		featured: false,
		coverImage: "/images/photos/EDIFICIO-MIRAFLORES/miraflores-1.jpg",
		images: [
			"/images/photos/EDIFICIO-MIRAFLORES/miraflores-1.jpg",
			"/images/photos/EDIFICIO-MIRAFLORES/miraflores-2.jpg",
		],
		location: "Santiago",
		year: "2019",
		client: "Inmobiliaria Fundamenta",
		area: "25,000 m²",
	},
	{
		id: 18,
		title: "Edificio de Oficinas Quantum",
		description:
			"Edificio corporativo de diseño innovador con tecnología de última generación.",
		featured: false,
		coverImage: "/images/photos/EDIFICIO-OFICINAS-QUANTUM/quantum-1.jpg",
		images: [
			"/images/photos/EDIFICIO-OFICINAS-QUANTUM/quantum-1.jpg",
			"/images/photos/EDIFICIO-OFICINAS-QUANTUM/quantum-2.jpg",
			"/images/photos/EDIFICIO-OFICINAS-QUANTUM/quantum-3.jpg",
		],
		location: "Las Condes, Santiago",
		year: "2021",
		client: "Grupo Quantum",
		area: "22,000 m²",
	},
];

// Function to get all projects
export function getAllProjects(): Project[] {
	return projects;
}

// Function to get a specific project by ID
export async function getProjectById(id: number): Promise<Project | undefined> {
	// Make this function properly async by adding await
	return await Promise.resolve(projects.find((project) => project.id === id));
}

// Function to get featured projects
export function getFeaturedProjects(): Project[] {
	return projects.filter((project) => project.featured);
}
