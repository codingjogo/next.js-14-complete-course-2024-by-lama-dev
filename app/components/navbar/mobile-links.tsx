import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const links = [
    {title: 'Home', path: '/'},
    {title: 'Contact', path: '/contact'},
]

const MobileLinks = () => {
    return (
        <div className='MobileLinks'>
            <ul className='flex laptop:hidden items-center gap-8'>
                {links.map(({title, path}) => <Navlink key={title} title={title} path={path} />)}
                <button className='Logout'>Sign Out</button>
            </ul>
        </div>
    )
}

const Navlink = ({title, path} : {title: string, path: string}) => {
    const pathname = usePathname();

    return (
        <li>
            <Link
                href={path}
                className={`py-2 px-4 rounded-full ${pathname === path ? 'bg-white text-black' : ''}`}
                >
                    {title}
                </Link>
        </li>
    )
}

export default MobileLinks