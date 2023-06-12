import "./globals.css";

import NextThemeProvider from "@/components/ThemeProvider";
import Nav from "@/components/Nav";

export const metadata = {
	title: "DarkLightTheme",
	description: "A dark light theme project with next-theme",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="max-w-6xl mx-5 xl:mx-auto">
				<NextThemeProvider>
					<Nav />

					{children}
				</NextThemeProvider>
			</body>
		</html>
	);
}
