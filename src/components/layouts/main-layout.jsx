import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "@/components/navigation-bar";

const MainLayout = () => {
    return (
        <div className="App flex flex-col justify-center">
            <NavigationBar />
            <Outlet />
        </div>
    );
};

export default MainLayout;
