import Link from "next/link";

import MainMenu from "@/components/shared/main-menu";

const Sidebar = () => {
    return ( <aside className="fixed bg-dark w-[13vw] h-full border-r border-gray-500/30">
        <section className="p-8 border-b border-gray-500/30">
            <Link 
            href='/' 
            className="text-2xl text-white hover:text-primary transition-colors duration-300">
                Cristian Sigel
                </Link>
            <h3 className="text-gray-500 tracking-widest font-light">Web development</h3>
        </section>
        <section>
            <MainMenu />
        </section>
    </aside>);
}

export default Sidebar;