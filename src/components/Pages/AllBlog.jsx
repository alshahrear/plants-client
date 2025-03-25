import { MdFileDownloadDone } from "react-icons/md";

const AllBlog = ({blog}) => {
    const { title, category, shortDescription, imageURL } = blog;

    return (
        <div className="card bg-[#f4f7f2fd] hover:scale-105 shadow-lg">
                <figure>
                    <img className="h-[250px] "
                        src={imageURL}
                        alt="" />
                </figure>
                <div className="card-body space-y-1">
                    <h2 className="text-xl font-bold ">
                    {title}
                    </h2>
                    <p className="text-lg font-medium">{shortDescription}</p>
                    <p className="text-[16px] font-semibold">{category}</p>
                    <div className="card-actions justify-between">
                        <div className="btn font-semibold rounded-md text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 shadow-md">📖 Read More</div>
                        <div className="btn font-semibold rounded-md text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 shadow-md"><MdFileDownloadDone className="text-xl"></MdFileDownloadDone> Add to Wishlist </div>
                    </div>
                </div>
            </div> 
    );
};

export default AllBlog;