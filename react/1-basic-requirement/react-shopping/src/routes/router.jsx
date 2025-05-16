import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import MyCart from "../pages/MyCart";
import ProductDetail from "../pages/ProductDetail";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  // {
  //     path: "/", // root path
  //     element: <Home />,
  // },
  // {
  //     path: "about-us",
  //     element: <AboutUs />,
  // },
  //   {
  //     path: "my-cart",
  //     element: <MyCart />,
  // },
  //   {
  //     path: "product-detail",
  //     element: <ProductDetail />,
  // },

  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [ // For outlet, use for same layout
      {
        path: "/", // root path
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "my-cart",
        element: <MyCart />,
      },
      {
        path: "product-detail/:productID",
        element: <ProductDetail />,
      },
    ],
  },
]);
export default router;
