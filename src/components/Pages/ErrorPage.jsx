import { Link } from "react-router-dom";
import pic404 from "../../assets/404.png";

const ErrorPage = () => {
    return (
        <div className="flex items-center bg-gradient-to-r from-green-100 via-white to-green-100 w-screen h-screen ">
            <div className="text-center flex-1 space-y-5">
            <h1 className="text-8xl font-bold text-[#489a4f]">404</h1>
            <h2 className="text-4xl font-bold">Oops<span className="text-[#489a4f]">!</span> That page can't be found</h2>
            <p className="text-xl font-semibold">Sorry but the page you are looking for does'nt existing</p>
            <Link to="/">
                <button className="btn font-medium text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 px-7 py-3 rounded-lg">
                   Go To Home Page
                </button>
            </Link>
        </div>
        <div className="flex-1">
                <img className="w-3/4" src={pic404} alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;