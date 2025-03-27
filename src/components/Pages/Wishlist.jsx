import { useEffect, useState } from "react";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import Swal from "sweetalert2";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [showModal, setShowModal] = useState(false);
    
    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(storedWishlist);
    }, []);

    const removeFromWishlist = (id) => {
        const updatedWishlist = wishlist.filter(item => item._id !== id);
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    };

    const handleUpdateClick = (blog) => {
        setSelectedBlog(blog);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const updatedBlog = {
            title: form.title.value,
            category: form.category.value,
            shortDescription: form.shortDescription.value,
            longDescription: form.longDescription.value,
            photoURL: form.photoURL.value
        };
        console.log(updatedBlog);

        fetch(`http://localhost:5000/blogs/${selectedBlog._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedBlog)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire('Success!', 'Blog updated successfully!', 'success');
                    
                    // Update the wishlist to reflect the updated blog
                    const updatedWishlist = wishlist.map(blog =>
                        blog._id === selectedBlog._id ? { ...blog, ...updatedBlog } : blog
                    );
                    setWishlist(updatedWishlist);

                    // Optionally close the modal
                    setShowModal(false);
                }
            });
    };

    return (
        <div className="">
            <div className="w-[1200px] mx-auto grid grid-cols-3 gap-10">
                {wishlist.length > 0 ? (
                    wishlist.map((blog) => (
                        <div key={blog._id} className="card bg-[#fefefe] hover:scale-105 shadow-sm">
                            <figure>
                                <img className="h-[250px]" src={blog.imageURL} alt={blog.title} />
                            </figure>
                            <div className="card-body space-y-1">
                                <h2 className="text-xl font-bold">{blog.title}</h2>
                                <p className="text-lg font-medium">{blog.shortDescription}</p>
                                <p className="text-[16px] font-semibold">{blog.category}</p>
                                <div className="card-actions justify-between">
                                    <button
                                        className="btn font-semibold rounded-md text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 shadow-md"
                                        onClick={() => handleUpdateClick(blog)}
                                    >
                                        <FiEdit3 /> Update
                                    </button>
                                    <button
                                        className="btn font-semibold rounded-md text-white bg-gradient-to-r from-red-600 via-red-500 to-orange-400 hover:from-red-700 hover:via-red-600 hover:to-orange-500 transition-all duration-300 shadow-md"
                                        onClick={() => removeFromWishlist(blog._id)}
                                    >
                                        <MdOutlineRemoveCircleOutline className="text-xl" /> Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-xl font-semibold col-span-3">No items in the wishlist</p>
                )}
            </div>

            {/* Modal for Update */}
            {showModal && selectedBlog && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white w-[800px] p-5 rounded-lg">
                        <div className="modal-action flex justify-end">
                            <button onClick={handleCloseModal} className="btn text-2xl btn-circle btn-ghost">✕</button>
                        </div>
                        <h2 className="text-center text-2xl font-semibold mb-2">Update Your Blog</h2>
                        <form onSubmit={handleUpdate} className="space-y-4 space-x-2">
                            <fieldset className="flex items-center text-lg">
                                <div>
                                    <label>Title </label>
                                    <input type="text" name="title" className="input w-[350px]" defaultValue={selectedBlog.title} />
                                </div>
                                <fieldset className="ml-12">
                                    <label>Category</label>
                                    <input
                                        type="text"
                                        name="category"
                                        defaultValue={selectedBlog.category}
                                        className="input w-[350px]"
                                        placeholder="Environment | Gardening | Agriculture"
                                        required
                                        list="category-options"
                                    />
                                    <datalist id="category-options">
                                        <option value="Environment" />
                                        <option value="Gardening" />
                                        <option value="Agriculture" />
                                    </datalist>
                                </fieldset>
                            </fieldset>
                            <fieldset className="flex items-center text-lg">
                                <div>
                                    <label>Short Description</label>
                                    <input type="text" name="shortDescription" className="input w-[350px]" defaultValue={selectedBlog.shortDescription} />
                                </div>
                                <div className="ml-12">
                                    <label>Photo URL</label>
                                    <input type="text" name="photoURL" className="input w-[350px]" defaultValue={selectedBlog.imageURL} />
                                </div>
                            </fieldset>
                            <fieldset className="flex items-center text-lg">
                                <div>
                                    <label>Long Description</label>
                                    <input type="text" name="longDescription" className="input w-[750px]" defaultValue={selectedBlog.longDescription} />
                                </div>
                            </fieldset>
                            <button className="btn mt-1 hover:bg-[#c5ff33] bg-[#b1f315] w-full" type="submit">Update</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Wishlist;
