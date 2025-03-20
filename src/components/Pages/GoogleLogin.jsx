import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { auth } from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import "animate.css";

const GoogleLogin = () => {

    const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const location = useLocation();
const navigate = useNavigate();

const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
            const redirectPath = location.state?.from?.pathname || "/";
            console.log("Redirecting to:", redirectPath);
            navigate(redirectPath);
        })
        .catch(error => {
            console.error(error);
        });
};

const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
        .then(result => {
            console.log(result.user);
            const redirectPath = location.state?.from?.pathname || "/";
            console.log("Redirecting to:", redirectPath);
            navigate(redirectPath);
        })
        .catch(error => {
            console.error(error);
        });
};

    return (
        <div className="flex justify-center">
            <div className="animate__animated animate__slideInRight">
                <div className="divider divider-success">OR</div>
                <div className="flex gap-3 items-center">
                    <button onClick={handleGoogleLogin} className="btn  rounded-2xl font-semibold text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 shadow-md">
                        <span><FcGoogle /></span> Continue With Google
                    </button>
                    <br />
                    <button onClick={handleGithubLogin} className="btn rounded-2xl font-semibold  text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 shadow-md ">
                        <span><SiGithub /></span> Continue With Github
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoogleLogin;