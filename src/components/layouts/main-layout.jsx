import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "@/components/navigation-bar";
import ModalProvider from "@/providers/modal-provider";

const MainLayout = () => {
    return (
        <div className="flex flex-col justify-center App">
            <ModalProvider />
            <NavigationBar />
            <Outlet />
        </div>
    );
};

export default MainLayout;
