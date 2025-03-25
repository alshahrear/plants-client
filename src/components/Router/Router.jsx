import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddBlog from "../Pages/AddBlog";
import Contact from "../Pages/Home/Contact";
import AllBlogs from "../Pages/AllBlogs";
import PrivetRoute from "../Pages/PrivetRoute";
import Wishlists from "../Pages/Wishlists";
import Features from "../Pages/Features";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/addBlog",
          element: <PrivetRoute><AddBlog></AddBlog></PrivetRoute>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/allBlogs",
          element: <AllBlogs></AllBlogs>,
          // loader: () => fetch('http://localhost:5000/blogs')
        },
        {
          path: "/wishlists",
          element: <PrivetRoute><Wishlists></Wishlists></PrivetRoute>
        },
        {
          path: "/features",
          element: <Features></Features>
        },
      ]
    },
  ]);

export default router;