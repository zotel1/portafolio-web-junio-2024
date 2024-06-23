'use client';


import Link from "next/link";

import MainMenu from "@/components/shared/main-menu";

interface SidebarProps{
    showMenu: boolean;
}


const Sidebar = ({showMenu }: SidebarProps) => {

    return ( 
    <aside className="fixed left-0 top-0 bg-dark w-[70vw] md:w-[30vw] lg:w[13vw] h-full border-r border-gray-500/30">
        <section className="p-8 border-b border-gray-500/30">
            <Link 
            href='/' 
            className="text-xl text-white hover:text-primary transition-colors duration-300">
                Cristian Sigel
                </Link>
            <h3 className="text-gray-500 font-light">Web development</h3>
        </section>
        <section>
            <MainMenu />
        </section>
    </aside>);
}

export default Sidebar;