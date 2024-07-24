import React, { useState, useEffect } from "react";
// import EditWishlist from "./EditWishlist";
// import DeleteWishlist from "./DeleteWishlist";

const AllWishlists = (props) => {
    const [WishlistsRecord, setWishlistsRecord] = useState([]);
    const [editWishlist, setEditWishlist] = useState(false);
    const [deleteWishlist, setDeleteWishlist] = useState(false);
    const [selectedWishlist, setSelectedWishlist] = useState("");

    useEffect(() => {
        fetchWishlistsRecord();
    }, []);

    const fetchWishlistsRecord = async () => {
        const requestData = {
            eventID: "1001",
            addInfo: {
                Wishlist_Id: "",
                UserId: "",
                Title: "",
                Description: "",
                CreatedOn: "",
                WishlistImageUrl: "",
                Type: "",
                NumSongs: "",
            },
        };
        try {
            const response = await fetch("http://localhost:5164/allWishlists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data, "API response data");

            if (data.rData && data.rData.rCode === 0) {
                setWishlistsRecord(data.rData.Wishlistsdata || []);
            }
        } catch (error) {
            console.error("Error:", error);
            alert(`Failed to fetch Wishlists: ${error}`);
            setWishlistsRecord([]);
        }
    };

    const handleWishlistEdit = (id) => {
        console.log("Edit this Wishlist with ID:", id);
        setSelectedWishlist(id);
        setEditWishlist(true);
    };

    const handleWishlistDelete = (Wishlist) => {
        console.log("Delete this Wishlist:", Wishlist);
        setSelectedWishlist(Wishlist);
        setDeleteWishlist(true);
    };

    return (
        <div className={`bg-${props.mode}`}>
            <section>
                <span className="text-3xl text-info text-left mx-3 my-3">
                    ALL Wishlists
                </span>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full my-3 mx-auto text-center bg-gray-800 text-white">
                        <thead>
                            <tr>
                                <th className="text-info px-4 py-2">Wishlist Id</th>
                                <th className="text-info px-4 py-2">User Id</th>
                                <th className="text-info px-4 py-2">Title</th>
                                <th className="text-info px-4 py-2">Description</th>
                                <th className="text-info px-4 py-2">Created On</th>
                                <th className="text-info px-4 py-2">Wishlist Image</th>
                                <th className="text-info px-4 py-2">Wishlist Type</th>
                                <th className="text-info px-4 py-2">Num of Songs</th>
                                <th className="text-info px-4 py-2">Options</th>
                            </tr>
                        </thead>
                        <tbody className="text-white">
                            {WishlistsRecord.map((Wishlist, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{Wishlist.Wishlist_Id}</td>
                                    <td className="border px-4 py-2">{Wishlist.userId}</td>
                                    <td className="border px-4 py-2">{Wishlist.title}</td>
                                    <td className="border px-4 py-2">{Wishlist.description}</td>
                                    <td className="border px-4 py-2">{Wishlist.createdOn}</td>
                                    <td className="border px-4 py-2">
                                        <img
                                            src={Wishlist.WishlistImageUrl}
                                            alt={Wishlist.title}
                                            className="h-16 mx-auto"
                                            style={{ objectFit: "contain" }}
                                        />
                                    </td>
                                    <td className="border px-4 py-2">{Wishlist.type}</td>
                                    <td className="border px-4 py-2">{Wishlist.numSongs}</td>
                                    <td className="border px-4 py-2">
                                        <button
                                            type="button"
                                            className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded-md mx-1"
                                            onClick={() => handleWishlistEdit(Wishlist.Wishlist_Id)}
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md mx-1"
                                            onClick={() => handleWishlistDelete(Wishlist)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            {/* {editWishlist && (
                <EditWishlist
                    id={selectedWishlist}
                    onClose={() => setEditWishlist(false)}
                />
            )}
            <DeleteWishlist
                show={deleteWishlist}
                onHide={() => setDeleteWishlist(false)}
                id={WishlistsRecord.map((Wishlist) => Wishlist.title)}
            /> */}
        </div>
    );
};

export default AllWishlists;
