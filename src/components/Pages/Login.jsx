import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { TbPhoneCalling } from "react-icons/tb";
import GoogleLogin from "./GoogleLogin";
// import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import divider from "../../assets/divider.png";
import useAuth from "../useAuth";
import { Helmet } from "react-helmet-async";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    // const { signIn } = useContext(AuthContext);
    const { signIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
                toast.success("Login Successful!", {
                    position: "top-right",
                    autoClose: 2000,
                });

                const redirectPath = location.state?.from?.pathname || "/";
                console.log("Redirecting to:", redirectPath);
                navigate(redirectPath);
            })
            .catch(error => {
                console.error(error);
                toast.error("Login Failed! Please check your credentials.", {
                    position: "top-right",
                    autoClose: 2000,
                });

            });
    }


    return (
        <div className="pt-12 pb-20 px-12 flex justify-between items-center bg-gradient-to-r from-green-100 via-white to-green-100 relative" >
            <Helmet>
                <title>PLant's Tree - Login</title>
            </Helmet>
            <div className="w-1/3 bg-cover bg-center bg-no-repeat space-y-5" >
                <h2 className="text-4xl font-bold leading-12" >
                    Our Best Reliable <span className="text-[#00730c]">Gardening and Lawn</span> services
                </h2>
                <Link to="/contact">
                    <button className="btn font-semibold rounded-md text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 shadow-md"><span><TbPhoneCalling className="text-lg"></TbPhoneCalling></span> Call Us</button>
                </Link>
            </div>
            <motion.div
                className="w-1/3 absolute top-0 left-1/2 transform -translate-x-1/2"
                animate={{
                    rotate: [-20, 20, -20],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <img src={divider} alt="" />
            </motion.div>
            <div className="w-1/3">
                <form onSubmit={handleLogin}>
                    <div className="p-8 border-2 border-gray-300 rounded-lg shadow-lg ">
                        <h2 className="text-3xl text-center font-extrabold mb-6 bg-gradient-to-r from-green-700 via-green-600 to-lime-500 bg-clip-text text-transparent">
                            Login Now
                        </h2>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 text-gray-700 font-medium">Password</label>
                            <div className="relative">
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Enter your password"
                                    required
                                />
                                <span
                                    className="absolute text-xl right-4 top-3 cursor-pointer text-gray-600 hover:text-gray-900 transition"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </div>

                        <button type="submit" className="w-full py-2 font-semibold rounded-md text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 shadow-md">
                            Login
                        </button>

                        <p className="text-center text-lg font-medium mt-4 text-gray-700">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-[#009a3b] hover:underline hover:text-[#60c300]">
                                <span className="font-semibold">Register</span>
                            </Link>
                        </p>
                    </div>
                </form>
                <div>
                    <GoogleLogin></GoogleLogin>
                </div>
                <ToastContainer />
            </div>

        </div>
    );
};

export default Login;