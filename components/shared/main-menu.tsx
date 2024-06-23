import { cn } from "@/libs/utils";
import Link from "next/link";

import { RiHome3Line, RiBriefcase2Line } from "react-icons/ri";
const MainMenu = () => {

    const routes = [
        {
            label: 'Home',
            icon: RiHome3Line,
            href: '/',
        },
        {
            label: 'Work',
            icon: RiBriefcase2Line,
            href: '/work'
        }
    ];
    return ( <ul>
        <li>
            {routes.map((route) => (
            <Link key={route.href} href={route.href} className={cn('flex items-center gap-4 text-gray-500 p-5 border-b border-gray-500/30')}>
            <route.icon size={18}/>
            {route.label}
            </Link>
            ))}
        </li>
    </ul>
    );
};

export default MainMenu;