import { cn } from "@/libs/utils";
import Link from "next/link";

import { RiHome3Line } from "react-icons/ri";
const MainMenu = () => {

    const routes = [
        {
            label: 'Home',
            icon: RiHome3Line,
            href: '/',
        }
    ];
    return ( <ul>
        <li>
            {routes.map((route) => (
            <Link key={route.href} href={route.href} className={cn('flex items-center gap-4 text-gray-500')}>
            <route.icon size={18}/>
            {route.label}
            </Link>
            ))}
        </li>
    </ul>
    );
};

export default MainMenu;