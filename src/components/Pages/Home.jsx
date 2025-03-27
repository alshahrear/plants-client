import { Helmet } from "react-helmet-async";
import Banner from "./Home/Banner";
import Contact from "./Home/Contact";
import Newsletter from "./Home/Newsletter";
import RecentBlogs from "./Home/RecentBlogs";
import Skill from "./Home/Skill";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Plant's Tree | Home</title>
            </Helmet>
            <Banner></Banner>
            <RecentBlogs></RecentBlogs>
            <Newsletter></Newsletter>
            <Skill></Skill>
            <Contact></Contact>
        </div>
    );
};

export default Home;