import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { MdFileDownloadDone } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from 'sweetalert2';
import { useState } from 'react';

const AllBlog = ({ blog, onDelete }) => {  
    const { title, category, shortDescription, imageURL, _id } = blog;
    const [isDeleted, setIsDeleted] = useState(false);  

    const addToWishlist = () => {
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        if (!wishlist.find(item => item._id === _id)) {
            wishlist.push(blog);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            toast.success("Added to Wishlist! ✅");
        } else {
            toast.error("Already in Wishlist! ❌");
        }
    };

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/blogs/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setIsDeleted(true); 
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your blog has been deleted.",
                                icon: "success"
                            });
                            onDelete(_id);
                        }
                    });
            }
        });
    };

    if (isDeleted) return null;

    return (
        <div className="card bg-[#f4f7f2fd] hover:scale-105 shadow-lg">
            <figure>
                <img className="h-[250px]" src={imageURL} alt={title} />
            </figure>
            <div className="card-body space-y-1">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-lg font-medium">{shortDescription}</p>
                <p className="text-[16px] font-semibold">{category}</p>
                <div className="card-actions justify-between">
                    <button onClick={() => handleDelete(_id)} className="btn font-semibold rounded-md text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 shadow-md">
                    Delete  <RiDeleteBin6Fill></RiDeleteBin6Fill> 
                    </button>
                    <button 
                        className="btn font-semibold rounded-md text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 shadow-md"
                        onClick={addToWishlist}
                    >
                      Add to Wishlist  <MdFileDownloadDone className="text-xl" /> 
                    </button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AllBlog;
