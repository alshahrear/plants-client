// import { createContext, useState } from "react";

// export const WishlistContext = createContext();

// const WishlistProvider = ({ children }) => {
//     const [wishlist, setWishlist] = useState([]);

//     const addToWishlist = (blog) => {
//         if (!wishlist.some(item => item._id === blog._id)) {
//             setWishlist([...wishlist, blog]);
//         }
//     };

//     return (
//         <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
//             {children}
//         </WishlistContext.Provider>
//     );
// };

// export default WishlistProvider;
