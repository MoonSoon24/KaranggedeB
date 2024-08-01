import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import NavbarHome from "../component/NavbarHome";

const routes = [
  {
    path: "/home",
    name: "Home",
  },
  {
    path: "/about",
    name: "Tentang Kami",
  },
  {
    path: "/product",
    name: "Produk",
  },
  {
    path: "/gallery",
    name: "Galeri",
  },
  {
    path: "/contact",
    name: "Kontak",
  }
];

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-h-[768px]">
        <NavbarHome routes={routes} />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
