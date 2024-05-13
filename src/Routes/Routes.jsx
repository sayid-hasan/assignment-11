import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Error from "../shared/Error/Error";
import AddBlogs from "../Pages/AddBlogs/AddBlogs";

import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
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
        element: (
          <PrivateRoutes>
            <BlogDetails></BlogDetails>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
