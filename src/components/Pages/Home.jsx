import Banner from "./Home/Banner";
import Contact from "./Home/Contact";
import Newsletter from "./Home/Newsletter";
import RecentBlog from "./Home/RecentBlog";
import Skill from "./Home/Skill";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlog></RecentBlog>
            <Newsletter></Newsletter>
            <Skill></Skill>
            <Contact></Contact>
        </div>
    );
};

export default Home;