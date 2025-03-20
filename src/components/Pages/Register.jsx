import { motion } from "framer-motion";
import { useContext, useState } from "react";
import leaves from "../../assets/leaves.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { TbPhoneCalling } from "react-icons/tb";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        // Password Validation
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long!", {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }
        if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one uppercase and one lowercase letter!", {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
                toast.success("Registration Successful!", {
                    position: "top-right",
                    autoClose: 2000,
                });
                // update profile
                // updateProfile(result.user, {
                //     displayName: name,
                //     photoURL: "https://example.com/jane-q-user/profile.jpg"
                // })
                // .then( () => console.log('Profile Updated'))
                // .catch()

                const redirectPath = location.state?.from?.pathname || "/";
                console.log("Redirecting to:", redirectPath);
                navigate(redirectPath);
            })
            .catch(error => {
                console.error(error);
                toast.error("Registration Failed! Please try again.", {
                    position: "top-right",
                    autoClose: 2000,
                });
            });
    }


    return (
        <div className="pt-12 pb-20 px-12 flex justify-between items-center bg-gradient-to-r from-green-100 via-white to-green-100 relative" >
            <div className="w-1/3 bg-cover bg-center bg-no-repeat space-y-5" >
                <h2 className="text-4xl font-bold leading-12" >
                Premium <span className="text-[#00730c]">Gardening and Lawn Care</span> Solutions
                </h2>
                <p className="text-lg font-medium">Welcome to Our Best Reliable Gardening and Lawn Services! We are dedicated to providing top-quality <span className="text-[#00730c] font-bold">gardening, lawn care, and landscaping</span> solutions to keep your surroundings green and beautiful. Register now to get expert care for your plants and create a refreshing outdoor space effortlessly!</p>
                <Link to="/contact">
                <button className="btn font-semibold rounded-md text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 shadow-md"><span><TbPhoneCalling className="text-lg"></TbPhoneCalling></span> Call Us</button>
                </Link>
            </div>
            <motion.div
                className="w-1/4 absolute top-0 left-1/2 transform -translate-x-1/2"
                animate={{
                    rotate: [-25, 25, -25],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <img src={leaves} alt="" />
            </motion.div>
            <div className="w-1/3">
                <form onSubmit={handleRegister}>
                    <div className="p-8 border-2 border-gray-300 rounded-lg shadow-lg ">
                        <h2 className="text-3xl text-center font-extrabold mb-6 bg-gradient-to-r from-green-700 via-green-600 to-lime-500 bg-clip-text text-transparent">
                            Register Now
                        </h2>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
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
                            Register
                        </button>

                        <p className="text-center text-lg font-medium mt-4 text-gray-700">
                            Don't have an account?{" "}
                            <Link to="/login" className="text-[#009a3b] hover:underline hover:text-[#60c300]">
                                <span className="font-semibold">Login</span>
                            </Link>
                        </p>
                    </div>
                </form>
                <ToastContainer />
            </div>
            
        </div>
    );
};

export default Register;