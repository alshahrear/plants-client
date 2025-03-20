import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddBlog from "../Pages/AddBlog";
import Contact from "../Pages/Home/Contact";
import AllBlogs from "../Pages/AllBlogs";
import Wishlist from "../Pages/Wishlist";
import Feature from "../Pages/Feature";

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
          element: <AddBlog></AddBlog>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/allBlogs",
          element: <AllBlogs></AllBlogs>
        },
        {
          path: "/wishlist",
          element: <Wishlist></Wishlist>
        },
        {
          path: "/feature",
          element: <Feature></Feature>
        },
      ]
    },
  ]);

export default router;