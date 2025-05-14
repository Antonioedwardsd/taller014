"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

interface ImageModalProps {
	isOpen: boolean;
	imageUrl: string;
	altText: string;
	onClose: () => void;
	allImages?: string[];
	onChangeImage?: (newImageUrl: string) => void;
}

export default function ImageModal({
	isOpen,
	imageUrl,
	altText,
	onClose,
	allImages = [],
	onChangeImage,
}: ImageModalProps) {
	const [loading, setLoading] = useState(true);

	// Encontrar el índice de la imagen actual
	const currentIndex = allImages.indexOf(imageUrl);

	// Memoizar las funciones de navegación con useCallback
	const navigateToNext = useCallback(() => {
		if (!allImages.length || !onChangeImage) return;
		const nextIndex = (currentIndex + 1) % allImages.length;
		setLoading(true);
		onChangeImage(allImages[nextIndex]);
	}, [allImages, currentIndex, onChangeImage]);

	const navigateToPrevious = useCallback(() => {
		if (!allImages.length || !onChangeImage) return;
		const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
		setLoading(true);
		onChangeImage(allImages[prevIndex]);
	}, [allImages, currentIndex, onChangeImage]);

	// Cerrar modal con tecla ESC
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};

		const handleArrowKeys = (e: KeyboardEvent) => {
			if (!allImages.length || !onChangeImage) return;

			// Flecha izquierda para imagen anterior
			if (e.key === "ArrowLeft") {
				navigateToPrevious();
			}
			// Flecha derecha para imagen siguiente
			if (e.key === "ArrowRight") {
				navigateToNext();
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
			document.addEventListener("keydown", handleArrowKeys);
			document.body.style.overflow = "hidden"; // Prevenir scroll
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.removeEventListener("keydown", handleArrowKeys);
			document.body.style.overflow = "auto"; // Restaurar scroll
		};
	}, [
		isOpen,
		onClose,
		navigateToPrevious,
		navigateToNext,
		allImages,
		onChangeImage,
	]);

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
			onClick={onClose}
		>
			{/* Contenedor con tamaño fijo para la imagen */}
			<div className="relative w-[90vw] max-w-5xl">
				<button
					className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white z-10 hover:bg-black/80 transition-colors"
					onClick={(e) => {
						e.stopPropagation();
						onClose();
					}}
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M18 6L6 18M6 6L18 18"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>

				{/* Botón de navegación anterior */}
				{allImages.length > 1 && (
					<button
						className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-3 text-white z-10 hover:bg-black/80 transition-colors"
						onClick={(e) => {
							e.stopPropagation();
							navigateToPrevious();
						}}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 18l-6-6 6-6"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				)}

				{/* Botón de navegación siguiente */}
				{allImages.length > 1 && (
					<button
						className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-3 text-white z-10 hover:bg-black/80 transition-colors"
						onClick={(e) => {
							e.stopPropagation();
							navigateToNext();
						}}
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9 6l6 6-6 6"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				)}

				{/* Contenedor con altura y anchura fijas para la imagen */}
				<div
					className="relative aspect-[16/9] w-full h-[70vh]"
					onClick={(e) => e.stopPropagation()}
				>
					<Image
						src={imageUrl}
						alt={altText}
						className="object-contain"
						fill
						sizes="90vw"
						priority
						onLoadingComplete={() => setLoading(false)}
					/>
					{loading && (
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
						</div>
					)}
				</div>

				{/* Indicador de posición de imagen */}
				{allImages.length > 1 && (
					<div className="absolute bottom-4 left-0 right-0 flex justify-center">
						<div className="bg-black/50 px-4 py-1 rounded-full text-white text-sm">
							{currentIndex + 1} / {allImages.length}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
