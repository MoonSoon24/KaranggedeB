import React, { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
  Badge,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

import KaranggedeBLogo from "./../assets/image/karanggedeb.png";

const NavbarHome = ({ routes }) => {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Navbar className="sticky top-0 z-50 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-around text-blue-gray-900">
        <Typography
          as="a"
          href="/home"
          className="mr-4 cursor-pointer py-1.5 font-medium w-20"
        >
          <img src={KaranggedeBLogo} alt="" width="60" height="60" />
        </Typography>
        <div className="hidden lg:block">
          <ul className="flex flex-row gap-6">
            {routes?.map((route, index) => (
              <Typography
                as="li"
                key={index}
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <span
                  onClick={() => handleNavigation(route.path)}
                  className="cursor-pointer"
                >
                  {route.name}
                </span>
              </Typography>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="text-center">
          <ul className="flex flex-col gap-2 lg:gap-6">
            {routes?.map((route, index) => (
              <Typography
                as="li"
                key={index}
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <span
                  onClick={() => handleNavigation(route.path)}
                  className="cursor-pointer"
                >
                  {route.name}
                </span>
              </Typography>
            ))}
          </ul>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavbarHome;
