

const Feature = () => {
    return (
        <div className="pt-10 pb-20 bg-[#d4fac3]">
            <div className="overflow-x-auto w-[1200px] mx-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-lg font-semibold">
                        <tr>    
                            <th className="text-center">Serial Number</th>
                            <th>Profile Picture</th>
                            <th>Blog Owner</th>
                            <th>Blog Title</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th className="text-center">
                                1  
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                            </td>
                            <td>Purple</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Feature;