'use client';
import { Children, ReactNode } from "react";
import Sidebar from "@/components/shared/sidebar";

const MainLauout = ({children} : {children: ReactNode }) => {
    return <div>
        <Sidebar />
        {children}</div>;
}

export default MainLauout;