import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
   return (
      <>
         <Header className="fixed top-0 left-0 w-full z-50" />
         <Outlet />
         <Footer />
      </>
   );
};

export default Layout;
