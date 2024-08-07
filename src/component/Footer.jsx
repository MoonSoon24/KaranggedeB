import React from "react";
import { Typography } from "@material-tailwind/react";
import instagramLogo from "./../assets/image/instagram.png";
import uajyLogo from "./../assets/image/uajy.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white border p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img
          src={uajyLogo}
          alt="logo-ct"
          className="w-20"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="/about"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Tentang Kami
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/contact"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Kontak Kami
            </Typography>
          </li>
          <a href="https://www.instagram.com/kim_karanggede.b/" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram" className="w-8 h-auto" />
          </a>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Material Tailwind
      </Typography>
    </footer>
  );
};

export default Footer;
