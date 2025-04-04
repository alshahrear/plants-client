
// import { useLoaderData } from "react-router-dom";
import AllBlog from "./AllBlog";
import useBlogs from "../useBlogs";
import { Helmet } from "react-helmet-async";


const AllBlogs = () => {
    // const blogs = useLoaderData();
    const blogs = useBlogs();

    console.log(blogs);
    return (
        <div className="pb-20 pt-10 bg-[#f4f7f2fd]">
            <Helmet>
                <title>PLant's Tree - All Blogs</title>
            </Helmet>
            <div className="w-[1200px] mx-auto grid grid-cols-3 gap-10">
                {
                    blogs.map(blog => <AllBlog key={blog._id} blog={blog}></AllBlog>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;