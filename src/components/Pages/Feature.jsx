const Feature = ({ blog, index }) => {
    const { title, ownerName, ownerPhoto } = blog;

    return (
        <tbody>
            <tr>
                <th className="text-center text-lg font-semibold">
                    {index + 1}
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-20 w-20">
                                <img
                                    src={ownerPhoto || "https://img.daisyui.com/images/profile/demo/2@94.webp"}
                                    alt={ownerName || "Unknown User"}
                                />
                            </div>
                        </div>
                    </div>
                </td>
                <td className="text-lg font-semibold">
                    {ownerName || "Unknown User"}
                </td>
                <td className="text-lg font-semibold">
                    {title}
                </td>
            </tr>
        </tbody>
    );
};

export default Feature;
