import woman from "../../../assets/woman.png";
import { MdFileDownloadDone } from "react-icons/md";

const RecentBlog = () => {
    return (
        <div className="pb-10 ">
            <div className="text-center pb-5 text-3xl font-bold">
                    <h1>🌱 Our Blog - Explore the World of <br /> Trees & Sustainability</h1>
                </div>
            <div className="w-[1200px] mx-auto grid grid-cols-3 gap-10"> 
                <div className="card hover:scale-105 bg-[#fefefe]  shadow-sm">
                    <figure>
                        <img className="h-[250px] "
                            src={woman}
                            alt="" />
                    </figure>
                    <div className="card-body  space-y-1">
                        <h2 className="text-xl font-bold ">
                            10 Easy-to-Grow Trees for Beginners
                        </h2>
                        <p className="text-[16px] font-medium">Discover the best beginner-friendly trees that require minimal care yet provide maximum benefits for the environment!</p>
                        <p className="text-[16px] font-semibold">🌳 Tree Planting Tips</p>
                        <div className="card-actions justify-between">
                            <div className="btn font-semibold rounded-md text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 shadow-md">📖 Read More</div>
                            <div className="btn font-semibold rounded-md text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 shadow-md"><MdFileDownloadDone className="text-xl"></MdFileDownloadDone> Add to Wishlist </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentBlog;