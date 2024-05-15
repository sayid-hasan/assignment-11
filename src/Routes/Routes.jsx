import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Error from "../shared/Error/Error";
import AddBlogs from "../Pages/AddBlogs/AddBlogs";

import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import UpdateBlog from "../Pages/UpdateBlog/UpdateBlog";
import Wishlists from "../Pages/Wishlists/Wishlists";
import Allblogs from "../Pages/AllBlogs/Allblogs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addblogs",
        element: (
          <PrivateRoutes>
            <AddBlogs></AddBlogs>
          </PrivateRoutes>
        ),
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/updateblogs/:id",
        element: (
          <PrivateRoutes>
            <UpdateBlog></UpdateBlog>
          </PrivateRoutes>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoutes>
            <Wishlists></Wishlists>
          </PrivateRoutes>
        ),
      },
      {
        path: "/allblogs",
        element: <Allblogs></Allblogs>,
      },
    ],
  },
]);

export default router;
