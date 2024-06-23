import { cn } from "@/libs/utils";
import Link from "next/link";

import { RiHome3Line } from "react-icons/ri";
const MainMenu = () => {
    return ( <ul>
        <li>
            <Link href='/' className={cn('flex items-center gap-4 text-gray-500')}>
            <RiHome3Line size={18}/>
            Home</Link>
        </li>
    </ul>
    );
};

export default MainMenu;