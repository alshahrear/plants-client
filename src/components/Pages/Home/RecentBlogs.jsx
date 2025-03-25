import { useEffect, useState } from "react";
import RecentBlog from "./RecentBlog";

const RecentBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data); 
                setLoading(false); 
            })
            .catch(err => {
                console.error("Error fetching blogs:", err);
                setLoading(false); 
            });
    }, []); 

    if (loading) {
        return <div className="loading loading-spinner loading-lg"></div>; // লোডিং স্পিনার
    }

    // ব্লগের শেষ ৬টি নিবে এবং পরে তাদের উল্টো করে দেখাবে
    const lastSixBlogs = blogs.slice(-6).reverse();

    return (
        <div className="pb-10">
            <div className="text-center pb-5 text-3xl font-bold">
                <h1>🌱 Our Blog - Explore the World of <br /> Trees & Sustainability</h1>
            </div>
            <div className="w-[1200px] mx-auto grid grid-cols-3 gap-10">
                {
                    lastSixBlogs.map(blog => (
                        <RecentBlog key={blog._id} blog={blog} />
                    ))
                }
            </div>
        </div>
    );
};

export default RecentBlogs;
