import { NavLink } from "react-router-dom";
import plantLogo from "../../assets/plantLogo.png";

const Navbar = () => {
    return (
        <div className=" shadow-lg mt-1 ">
            <div className="w-[1200px] mx-auto flex item-center space-x-32">
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
                <button className="btn px-6 bg-[#34af40] text-white">Login</button>
                <button className="btn bg-[#34af40] text-white">Register</button>
            </div>
            </div>
        </div>
    );
};

export default Navbar;