"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const links = [
	{ title: "Home", path: "/" },
	{ title: "About", path: "/about" },
	{ title: "Blog", path: "/blog" },
	{ title: "Contact", path: "/contact" },
];

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const session = false;
	const isAdmin = true;

	return (
		<nav className="Navbar flex justify-between items-center mobile:py-4 laptop:py-6">
			<Link href={"/"} className="text-4xl">
				Logo
			</Link>
			{/* Desktop Links */}
			<ul className="hidden laptop:flex items-center gap-8">
				{links.map(({ title, path }) => (
					<Navlink key={title} title={title} path={path} />
				))}
				{session && <button className="Logout">Sign Out</button>}
			</ul>

			{open && <div className="absolute top-0 left-0 bg-indigo-500 w-screen  h-screen MobileLinks z-50 flex justify-center items-center">
				<ul className="flex flex-col laptop:hidden items-center gap-8">
					{links.map(({ title, path }) => (
						<Navlink key={title} title={title} path={path} />
					))}
					{session && <button className="Logout">Sign Out</button>}
				</ul>
			</div>}

			<div className="z-50 block laptop:hidden">
				{!open ? (
					<GiHamburgerMenu
						className="text-3xl"
						onClick={() => setOpen((prev) => !prev)}
					/>
				) : (
					<ImCross
						className="text-3xl"
						onClick={() => setOpen((prev) => !prev)}
					/>
				)}
			</div>
		</nav>
	);
};

const Navlink = ({ title, path }: { title: string; path: string }) => {
	const pathname = usePathname();

	return (
		<li>
			<Link
				href={path}
				className={`py-2 px-4 rounded-full ${
					pathname === path ? "bg-white text-black" : ""
				}`}
			>
				{title}
			</Link>
		</li>
	);
};

export default Navbar;
