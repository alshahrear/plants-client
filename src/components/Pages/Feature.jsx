const Feature = ({ blog, index }) => {
    const { title, ownerName, ownerPhoto } = blog;
    
    return (
        <tbody>
            <tr>
                <th className="text-center">
                    {index + 1}
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src={ownerPhoto || "https://img.daisyui.com/images/profile/demo/2@94.webp"}
                                    alt={ownerName || "Unknown User"} 
                                />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {ownerName || "Unknown User"} 
                </td>
                <td>{title}</td>
            </tr>
        </tbody>
    );
};

export default Feature;
