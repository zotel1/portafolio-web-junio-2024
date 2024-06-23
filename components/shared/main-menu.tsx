import { cn } from "@/libs/utils";
import Link from "next/link";

import { RiHome3Line, RiBriefcase2Line, RiShapeLine, RiUserLine, RiMailLine } from "react-icons/ri";
const MainMenu = () => {

    const routes = [
        {
            label: 'Home',
            icon: RiHome3Line,
            href: '/',
        },
        {
            label: 'Educación',
            icon: RiShapeLine,
            href: '/educacion'
        },
        {
            label: 'Proyectos',
            icon: RiBriefcase2Line,
            href: '/proyectos'
        },
        {
            label: 'Sobre mí',
            icon: RiUserLine,
            href: '/about'
        },
        {
        label: 'Contactos',
        icon: RiMailLine,
        href: '/contacto'
        }
    ];
    return ( <ul>
        <li>
            {routes.map((route) => (
            <Link 
            key={route.href} 
            href={route.href} 
            className={cn(
                'flex items-center gap-4 text-gray-500 py-5 px-8 border-b border-gray-500/30 hover:bg-gray-500/5 hover:text-white transition-colors duration-300')}>
            <route.icon size={18}/>
            {route.label}
            </Link>
            ))}
        </li>
    </ul>
    );
};

export default MainMenu;