import { useState, useEffect } from "react";
import skill from "../../../assets/skill.png";

const Skill = () => {
    const progressData = [
        { title: "Garden Care", percentage: 85 },
        { title: "Lawn Care", percentage: 75 },
        { title: "Tree Plantation", percentage: 80 },
        { title: "Pests, Weeds Control", percentage: 90 },
    ];

    const [progress, setProgress] = useState(progressData);
    const [stats, setStats] = useState({
        happyCustomers: 0,
        gardenCreated: 0,
        teamMembers: 0,
    });

    useEffect(() => {
        // Start counting the numbers for "500+", "800+", "100+" after component mount
        const countUp = (target, setter, key) => {
            let count = 0;
            const interval = setInterval(() => {
                if (count < target) {
                    count++;
                    setter(prevState => ({ ...prevState, [key]: count }));
                } else {
                    clearInterval(interval);
                }
            }, 5); // adjust speed by changing the interval (5ms for fast counting)
        };

        countUp(500, setStats, "happyCustomers");
        countUp(800, setStats, "gardenCreated");
        countUp(100, setStats, "teamMembers");

        // Progress bars animation
        progressData.forEach((item, index) => {
            setTimeout(() => {
                setProgress((prevProgress) =>
                    prevProgress.map((data, idx) =>
                        idx === index
                            ? { ...data, animatedPercentage: item.percentage }
                            : data
                    )
                );
            }, 500 * index);
        });
    }, []);

    return (
        <div className="flex justify-between w-[1200px] mx-auto mb-20 items-center">
            {/* Left Content */}
            <div className="pr-10 flex-1">
                <div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4"><span className="text-[#00730c]">O</span>ur <span className="text-[#75cb00]">S</span>kills</h2>
                    <p className="text-gray-600 text-lg font-medium mb-6">
                        We specialize in planting and nurturing trees to create a greener, healthier environment.
                        Our skilled team is dedicated to <span className="text-[#00730c] font-bold">sustainable reforestation, urban gardening, and eco-friendly landscaping, </span>
                        ensuring a positive impact on nature.
                    </p>
                    <div className="flex gap-12 mb-10">
                        <div className="flex items-center gap-2">
                            <div className="w-14 h-14 flex justify-center items-center bg-gradient-to-r from-[#aaceae] to-[#d3e5d5] rounded-full">
                                <p className="text-lg font-bold">{stats.happyCustomers}+</p>
                            </div>
                            <p className="font-bold">Happy <br /> Customers</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-14 h-14 flex justify-center items-center bg-gradient-to-r from-[#aaceae] to-[#d3e5d5] rounded-full">
                                <p className="text-lg font-bold">{stats.gardenCreated}+</p>
                            </div>
                            <p className="font-bold">Garden <br /> Created</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-14 h-14 flex justify-center items-center bg-gradient-to-r from-[#aaceae] to-[#d3e5d5] rounded-full">
                                <p className="text-lg font-bold">{stats.teamMembers}+</p>
                            </div>
                            <p className="font-bold">Team <br /> Members</p>
                        </div>
                    </div>
                </div>
                {/* Progress Bars */}
                <div className="space-y-4">
                    {progress.map((item, index) => (
                        <div key={index}>
                            <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                                <span className="text-lg font-semibold">{item.title}</span>
                                <span>{item.animatedPercentage || 0}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div
                                    className="bg-[#47ba1f] h-2.5 rounded-full transition-all duration-1000"
                                    style={{
                                        width: `${item.animatedPercentage || 0}%`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-end">
                <img className="w-[70%] border-r-16 border-t-16 border-[#47ba1f] rounded-xl" src={skill} alt="Skill Image" />
            </div>
        </div>
    );
};

export default Skill;
