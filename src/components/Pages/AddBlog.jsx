

const AddBlog = () => {
    return (
        <div className="pb-20 bg-gradient-to-r from-green-100 via-white to-green-100">
            <div className="w-[1200px] mx-auto">
            <form>
                <div className="card-body ">
                    <h2 className="text-3xl font-bold text-center">Add Your Blog</h2>
                    {/* another */}
                    <div className="flex text-lg font-semibold">
                        <div className="">
                            <label className="fieldset-label">Title</label>
                            <input type="text" name="title" className="input w-[550px]" placeholder="Blog Title" />
                        </div>
                        <div className="ml-10">
                                <label className="fieldset-label">Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    className="input w-[550px]"
                                    placeholder="Yes/No"
                                    list="category-options"
                                />
                                <datalist id="category-options">
                                    <option value="Yes" />
                                    <option value="No" />
                                </datalist>
                            </div>
                    </div>


                    {/* another */}
                    <fieldset className="flex text-lg font-semibold">
                        <div className="">
                        <label className="fieldset-label">Short Description</label>
                            <input type="text" name="shortDescription" className="input w-[550px]" placeholder="Short Description" />
                        </div>
                        <div className="ml-10">
                        <label className="fieldset-label">Image URL</label>
                        <input type="text" name="imageURL" className="input w-[550px]" placeholder="Image URL" />
                    </div>
                    </fieldset>
                    <fieldset className="flex text-lg font-semibold">
                        <div className="">
                        <label className="fieldset-label">Long Description</label>
                            <textarea className="bg-white rounded-lg border-1 border-gray-300 w-[1140px]" name="" id="" cols="30" rows="5" placeholder=" White Your Description"></textarea>
                        </div>
                    </fieldset>
                    {/* another */}
                    
                    

                    <input type="submit" value="Add Blog" className="btn font-medium text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 mt-3" />
                </div>
            </form>
        </div>
        </div>
    );
};

export default AddBlog;