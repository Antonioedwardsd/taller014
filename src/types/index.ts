export interface Project {
	id: number;
	title: string;
	description: string;
	fullDescription?: string;
	featured?: boolean;
	coverImage: string;
	images?: string[];
	location: string;
	year: string;
	client?: string;
	area?: string;
}

/**
 * Tipos personalizados para las props de páginas en Next.js App Router
 */

export interface PageParams {
	id: string;
}

export interface SearchParams {
	[key: string]: string | string[] | undefined;
}

export interface CustomPageProps<
	P = Record<string, unknown>,
	Q = SearchParams
> {
	params: P;
	searchParams: Q;
}
