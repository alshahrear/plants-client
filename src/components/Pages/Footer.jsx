import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";


const Footer = () => {
    return (
        <div className="relative">
            <div className="bg-[#d9f1df] w-[800px] mx-auto text-center px-5 py-5 rounded-lg flex justify-between absolute left-70 bottom-73 z-10">
                <h2 className="text-3xl font-bold">We Have <span className="text-[#00730c]">Solution</span> For Your <span className="text-[#00730c]">Garden.</span></h2>
                <button className="btn font-medium text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 px-5 py-3 rounded-lg">
                        Get A Quote
                    </button>
            </div>
            <div className="">
                <footer className="flex justify-evenly footer bg-[#0c4b35]  text-white p-10 ">
                    <aside>
                        <div className="space-y-4 ">
                            <h2 className="text-xl font-semibold">Plant's</h2>
                            <p>Providing reliable tech since 1992 and still develop.</p>
                            <p className="flex items-center hover:link"><span className="mr-2"><MdOutlineMail></MdOutlineMail></span> plants@plantInfo.com</p>
                            <p className="flex items-center hover:link"><span className="mr-2"><FaPhone></FaPhone></span> +88 01612002913</p>
                            <div className="flex items-center text-xl">
                                <Link className="mr-2"><FaFacebook></FaFacebook></Link>
                                <Link className="mr-2"><BsInstagram></BsInstagram></Link>
                                <Link className="mr-2"><FaXTwitter></FaXTwitter></Link>
                                <Link className="mr-2"><IoLogoYoutube></IoLogoYoutube></Link>
                                <Link className="mr-2"><IoLogoLinkedin></IoLogoLinkedin></Link>
                            </div>
                        </div>
                    </aside>
                    <nav className="space-y-2">
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className="space-y-2">
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className="space-y-2">
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
                <footer className="footer bg-[#0c4b35] flex py-5 justify-center items-center border-t border-white">
                    <aside className="">
                        <p className="text-xl text-white font-medium">Copyright © {new Date().getFullYear()} by <span className="text-[#eb6327]">Plant's</span>  - All right reserved </p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default Footer;