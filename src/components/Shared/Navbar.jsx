import { NavLink } from "react-router-dom";
import plantLogo from "../../assets/plantLogo.png";

const Navbar = () => {
    return (
        <div className=" shadow-xl mt-1 ">
            <div className="w-[1200px] mx-auto flex item-center space-x-28">
                <div className="flex items-center">
                    <img className="w-[100px] flex items-center" src={plantLogo} alt="" />
                </div>
                <div className="flex item-center text-lg font-bold py-5 space-x-14">
                    <NavLink>Home</NavLink>
                    <NavLink>Add Blog</NavLink>
                    <NavLink>All blogs</NavLink>
                    <NavLink>Featured Blogs</NavLink>
                    <NavLink>Wishlist</NavLink>
                </div>
                <div className="flex item-center py-4  space-x-8">
                    
                    <button className="btn font-medium text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 px-7 py-3 rounded-lg">
                        Login
                    </button>
                    <button className="btn font-medium text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 px-5 py-3 rounded-lg">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;