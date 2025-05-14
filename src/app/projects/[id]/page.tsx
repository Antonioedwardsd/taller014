import { notFound } from "next/navigation";
import { getProjectById } from "../../../lib/data";
import ProjectContent from "./ProjectContent";
import type { Metadata } from "next";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}): Promise<Metadata> {
	const { id } = await params;
	return {
		title: `Proyecto ${id}`,
		description: `Detalles del proyecto ${id}`,
	};
}

export default async function ProjectDetailPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const project = await getProjectById(Number(id));
	if (!project) {
		return notFound();
	}

	return <ProjectContent project={project} />;
}
