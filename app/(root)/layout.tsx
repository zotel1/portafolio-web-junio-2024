'use client';
import { useState, ReactNode } from "react";
import { RiMenu2Line } from "react-icons/ri";

import Sidebar from "@/components/shared/sidebar";

const MainLauout = ({children} : {children: ReactNode }) => {

    const [showMenu, setShowMenu] = useState(false);

    return (
    <div>
        <Sidebar showMenu={showMenu}/>
        <header>
            <button type="button">
                <RiMenu2Line />
            </button>
        </header>
        {children}
        </div>
    );
}

export default MainLauout;