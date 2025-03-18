import banner from "../../../assets/banner.png";

const Banner = () => {
    return (
        <div className="mb-10 bg-gradient-to-r from-green-200 via-white to-amber-100 flex justify-between items-center py-12 ">
            <div className="space-y-5 px-12 flex-1">
                <h1 className="mb-5 text-5xl font-bold leading-tight">
                    Platting a <span className="text-[#00730c]">Garden</span> is <br /> Similar to Believe <br /> in Tomorrow
                </h1>
                <p className="mb-5 text-lg font-medium">
                    Tree is a symbol of life, giving shade, oxygen, and beauty to nature. Trees protect earth, support wildlife, and bring peace in mind.
                </p>
                <button className="btn font-medium text-white bg-gradient-to-r from-green-700 via-green-600 to-lime-500 hover:from-green-800 hover:via-green-700 hover:to-lime-600 transition-all duration-300 px-5 py-3 rounded-lg">
                        Get A Quote
                    </button>
            </div>
            <div className="flex-1">
                <img className="w-3/4" src={banner} alt="" />
            </div>
        </div>

    );
};

export default Banner;