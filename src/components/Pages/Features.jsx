import { Helmet } from "react-helmet-async";
import useBlogs from "../useBlogs";
import Feature from "./Feature";

const Features = () => {
    const blogs = useBlogs();

    return (
        <div className="pt-10 pb-20 bg-[#d4fac3]">
            <Helmet>
                <title>PLant's Tree - Feature Blog</title>
            </Helmet>
            <div className="overflow-x-auto w-[1200px] mx-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-lg font-semibold">
                        <tr>
                            <th className="text-center">Serial Number</th>
                            <th>Profile Picture</th>
                            <th>Blog Owner</th>
                            <th>Blog Title</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        blogs.map((blog, i) => <Feature key={blog._id} blog={blog} index={i}></Feature>)
                    }
                </table>

            </div>
        </div>
    );
};

export default Features;