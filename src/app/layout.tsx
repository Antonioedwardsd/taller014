import { Navbar } from "../components/navigation/Navbar";
import { Footer } from "../components/navigation/Footer";
import "./globals.css";

export const metadata = {
	title: "Taller 014",
	description: "Portafolio de proyectos arquitectónicos",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body className="font-[family-name:var(--font-geist-sans)]">
				<Navbar />
				<main className="min-h-screen">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
