// import { createContext, useState } from "react";

// export const WishlistContext = createContext();

// const WishlistProvider = ({ children }) => {
//     const [wishlist, setWishlist] = useState([]);

//     const addToWishlist = (blog) => {
//         setWishlist((prev) => {
//             if (!prev.find((item) => item._id === blog._id)) {
//                 return [...prev, blog];
//             }
//             return prev;
//         });
//     };

//     return (
//         <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
//             {children}
//         </WishlistContext.Provider>
//     );
// };

// export default WishlistProvider;
