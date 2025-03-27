import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import useAuth from '../useAuth';
import { Helmet } from 'react-helmet-async';

const AddBlog = () => {
    const { user } = useAuth();

    const handleAddBlog = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;
        const imageURL = form.imageURL.value;
        const ownerName = user?.displayName || "Anonymous";
        const ownerPhoto = user?.photoURL || "https://via.placeholder.com/150";

        const addBlog = {
            title,
            category,
            shortDescription,
            longDescription,
            imageURL,
            ownerName,
            ownerPhoto
        };

        console.log(addBlog);

        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addBlog)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Blog added successfully!');
                    form.reset();

                    // নতুন ব্লগ যোগ হলে Features.jsx পেজে আপডেট পাঠানোর জন্য custom event dispatch করা হচ্ছে
                    window.dispatchEvent(new Event("blogUpdated"));
                }
            });
    }

    return (
        <div className="pb-20 bg-[#c3eb9b]">
            <Helmet>
                <title>PLant's Tree - Add Blog</title>
            </Helmet>
            <div className="w-[1200px] mx-auto">
                <form onSubmit={handleAddBlog}>
                    <div className="card-body">
                        <h2 className="text-3xl font-bold text-center">Add Your Blog</h2>
                        <div className="flex text-lg font-semibold">
                            <div className="">
                                <label className="fieldset-label">Title</label>
                                <input type="text" name="title" className="input w-[550px] bg-[#e2fdeb]" placeholder="Blog Title" required />
                            </div>
                            <div className="ml-10">
                                <label className="fieldset-label">Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    className="input w-[550px] bg-[#e2fdeb]"
                                    placeholder="Environment | Gardening | Agriculture" required
                                    list="category-options"
                                />
                                <datalist id="category-options">
                                    <option value="Environment" />
                                    <option value="Gardening" />
                                    <option value="Agriculture" />
                                </datalist>
                            </div>
                        </div>
                        <fieldset className="flex text-lg font-semibold">
                            <div className="">
                                <label className="fieldset-label">Short Description</label>
                                <input type="text" name="shortDescription" className="input w-[550px] bg-[#e2fdeb]" placeholder="Short Description" required />
                            </div>
                            <div className="ml-10">
                                <label className="fieldset-label">Image URL</label>
                                <input type="text" name="imageURL" className="input w-[550px] bg-[#e2fdeb]" placeholder="Image URL" required />
                            </div>
                        </fieldset>
                        <fieldset className="flex text-lg font-semibold">
                            <div className="">
                                <label className="fieldset-label">Long Description</label>
                                <textarea className="bg-[#e2fdeb] rounded-lg border-1 border-gray-300 w-[1140px]" name="longDescription" cols="30" rows="5" placeholder="Write Your Description" required></textarea>
                            </div>
                        </fieldset>
                        <input type="submit" value="Add Blog" className="btn font-medium text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 mt-3" />
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AddBlog;
