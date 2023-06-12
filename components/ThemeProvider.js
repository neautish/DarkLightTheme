"use client";

import { ThemeProvider } from "next-themes";

function NextThemeProvider({ children }) {
	return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export default NextThemeProvider;
