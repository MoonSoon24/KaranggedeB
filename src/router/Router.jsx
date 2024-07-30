import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home/HomePage";
import ContactPage from "../pages/Contact/ContactPage";
import AboutUsPage from "../pages/AboutUs/AboutUsPage";
import GalleryPage from "../pages/Gallery/GalleryPage";
import ProductPage from "../pages/Product/ProductPage";


const router = createBrowserRouter([
  {
    path: "*",
    element: <div>Routes Not Found</div>,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutUsPage />,
      },
      {
        path: "/Product",
        element: <ProductPage />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      }

    ],
  },
]);

const AppRouter = () => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "z-50",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
