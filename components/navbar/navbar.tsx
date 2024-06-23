'use client';

import Link from "next/link";
import React from "react";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/blog", label: "Blog" },
];

const Navbar = () => {
	return (
		<nav className="Navbar flex items-center justify-between">
			<Link href={"/"}>Logo</Link>
			<ul className="flex items-center">
				{links.map(({ href, label }) => {
					return (
						<li key={href}>
							<NavLink href={href} label={label} />
						</li>
					);
				})}
				<li></li>
			</ul>
		</nav>
	);
};

const NavLink = ({ href, label }: { href: string; label: string }) => {
	return (
		<Link href={href}>
			{label}
		</Link>
	);
};

export default Navbar;
