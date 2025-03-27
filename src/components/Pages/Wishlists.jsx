import { Helmet } from "react-helmet-async";
import Wishlist from "./Wishlist";

const Wishlists = () => {
    return (
        <div className="pb-20 pt-10 bg-[#f4f7f2]">
            <Helmet>
                <title>PLant's Tree - Wishlist</title>
            </Helmet>
            <Wishlist />
        </div>
    );
};

export default Wishlists;
