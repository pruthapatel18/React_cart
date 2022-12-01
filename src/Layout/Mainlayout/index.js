import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Portals/Home/Component/Header";
import Footer from "../../Portals/Home/Component/Footer";

const MainLayout = () =>{

    return(
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
export default MainLayout;