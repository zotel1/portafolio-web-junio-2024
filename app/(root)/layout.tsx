'use client';
import { useState, ReactNode } from "react";
import { RiMenu2Line } from "react-icons/ri";

import Sidebar from "@/components/shared/sidebar";

const MainLayout = ({children} : {children: ReactNode }) => {

    const [showMenu, setShowMenu] = useState(false);

    return (
    <div>
        <Sidebar showMenu={showMenu} onClose={() => setShowMenu(false)}/>
            <button type="button" className="lg:hidden">
                <RiMenu2Line onClick={() => setShowMenu(true)} size={20}/>
            </button>
        {children}
        </div>
    );
}

export default MainLayout;