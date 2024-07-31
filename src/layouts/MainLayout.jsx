import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import NavbarHome from "../component/NavbarHome";

const routes = [
  {
    path: "/KaranggedeB/home",
    name: "Home",
  },
  {
    path: "/KaranggedeB/about",
    name: "Tentang Kami",
  },
  {
    path: "/KaranggedeB/product",
    name: "Produk",
  },
  {
    path: "/KaranggedeB/gallery",
    name: "Galeri",
  },
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
