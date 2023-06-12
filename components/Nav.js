"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Nav() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const themeHandler = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	return (
		<header className="py-3 mb-10">
			<nav className="flex justify-between items-center">
				<h1 className="text-2xl font-semibold text-slate-700 dark:text-slate-200">DarkLightTheme</h1>
				<div className="flex gap-4">
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
				</div>
				<ul>
					<li>
						<button onClick={themeHandler}>
							{theme === "dark" ? (
								<Image className="border p-2 rounded-full bg-white" src="/assets/icons/light.png" alt="dark" width={40} height={40} />
							) : (
								<Image className="border p-2 rounded-full" src="/assets/icons/dark.png" alt="light" width={40} height={40} />
							)}
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
