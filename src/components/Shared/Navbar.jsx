import { Link, NavLink } from "react-router-dom";
import plantLogo from "../../assets/plantLogo.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch();
    };

    return (
        <div className=" shadow-xl mt-1 ">
            <div className="w-[1200px] mx-auto flex item-center space-x-28">
                <div className="flex items-center -mt-1">
                    <img className="w-[100px] flex items-center" src={plantLogo} alt="" />
                </div>
                <div className="flex item-center text-lg font-bold py-5 space-x-14">
                    <NavLink>Home</NavLink>
                    <NavLink>Add Blog</NavLink>
                    <NavLink>All blogs</NavLink>
                    <NavLink>Featured Blogs</NavLink>
                    <NavLink>Wishlist</NavLink>
                </div>
                <div className="flex item-center py-3 space-x-8">
                    {
                        user ?
                            <>
                                {
                                    user.photoURL ? <>
                                        <div className="avatar">
                                            <div
                                                className="ring-primary ring-offset-green-500 w-10 h-10 rounded-full ring ring-offset-2 mr-8"
                                                title={user.displayName}
                                            >
                                                <img src={user.photoURL} alt={user.displayName} />
                                            </div>
                                        </div>

                                    </> :
                                        <>
                                            <div className="skeleton h-11 w-11 shrink-0 rounded-full"></div>
                                        </>
                                }

                                <Link to="/login">
                                    <button onClick={handleSignOut} className="btn font-medium text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 px-7 py-3 rounded-lg">
                                        Log Out
                                    </button>
                                </Link>
                            </> :
                            <>
                                <Link to="/login">
                                    <button className="btn font-medium text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 px-7 py-3 rounded-lg">
                                        Login
                                    </button>
                                </Link>
                                <Link to="/register">
                                    <button className="btn font-medium text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 px-5 py-3 rounded-lg">
                                        Register
                                    </button>
                                </Link>
                            </>
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;