"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
	{ href: "/", label: "Home" },
	{ href: "/blog", label: "Blog" },
];

const Navbar = () => {
	const pathname = usePathname();
	return (
		<nav className="Navbar">
			<div className="container flex items-center justify-between">
				<Link 
				className="text-4xl font-semibold"
				href={"/"}>Logo</Link>
				<ul className="hidden laptop:flex items-center">
					{links.map(({ href, label }) => {
						return (
							<li 
							key={href}
							className={`${pathname === href ? 'bg-white text-black' : ''} py-2 px-4`}
							>
								<NavLink href={href} label={label} />
							</li>
						);
					})}
					<li></li>
				</ul>
				
			</div>
		</nav>
	);
};

const NavLink = ({ href, label }: { href: string; label: string }) => {
	return <Link href={href}>{label}</Link>;
};

export default Navbar;
