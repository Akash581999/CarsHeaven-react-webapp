import React, { useState, useEffect } from "react";

const AllUsers = (props) => {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const requestData = {
            eventID: "1001",
            addInfo: {
                UserId: "",
                FirstName: "",
                LastName: "",
                UserName: "",
                UserPassword: "",
                Email: "",
                Mobile: "",
                ProfilePic: "",
                CreatedOn: "",
            },
        };

        try {
            const response = await fetch("http://localhost:5164/getallusers", {
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

            if (data.rData && data.rData.rCode === 0) {
                setUsersList(data.rData.users || []);
            }
        } catch (error) {
            console.error("Error:", error);
            alert(`Failed to fetch users: ${error}`);
            setUsersList([]);
        }
    };

    const handleDeleteUser = async (email) => {
        const requestData = {
            eventID: "1025",
            addInfo: {
                Email: `${email}`,
            },
        };

        try {
            const response = await fetch("http://localhost:5164/users/id", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            if (data.rData && data.rData.rCode === 0) {
                console.log(data.rData.email);
                alert(`You sure want you delete this user: ${email}`);
                alert("User profile deleted successfully" || data.rData.rMessage);
                window.location.reload();
            }
        } catch (error) {
            console.error("Error:", error);
            alert(`Failed to delete user: ${error}`);
            setUsersList([]);
        }
    };

    return (
        <div className={`bg-${props.mode}`}>
            <section>
                <span className="text-3xl text-info text-start mx-3 my-3">ALL USERS</span>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-dark table-auto my-3 mx-auto text-center">
                        <thead>
                            <tr>
                                <th className="text-info px-4 py-2">User Id</th>
                                <th className="text-info px-4 py-2">First Name</th>
                                <th className="text-info px-4 py-2">Last Name</th>
                                <th className="text-info px-4 py-2">User Name</th>
                                {/* <th className="text-info px-4 py-2">User Password</th> */}
                                <th className="text-info px-4 py-2">Email</th>
                                <th className="text-info px-4 py-2">Mobile</th>
                                <th className="text-info px-4 py-2">Profile Pic</th>
                                <th className="text-info px-4 py-2">Created On</th>
                                <th className="text-info px-4 py-2">Options</th>
                            </tr>
                        </thead>
                        <tbody className="text-light">
                            {usersList.map((user, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{user.userId || index + 1}</td>
                                    <td className="border px-4 py-2">{user.firstName}</td>
                                    <td className="border px-4 py-2">{user.lastName}</td>
                                    <td className="border px-4 py-2">{user.userName}</td>
                                    {/* <td className="d-lg-table-cell border px-4 py-2">{user.userPassword}</td> */}
                                    <td className="border px-4 py-2">{user.email}</td>
                                    <td className="border px-4 py-2">{user.mobile}</td>
                                    <td className="border px-4 py-2">
                                        <img
                                            src={user.profilePic}
                                            alt={user.userName}
                                            className="h-12 object-contain"
                                        />
                                    </td>
                                    <td className="border px-4 py-2">{user.createdOn}</td>
                                    <td className="border px-4 py-2">
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-1"
                                            type="button"
                                            onClick={() => handleDeleteUser(user.email)}
                                        >
                                            <i className="fas fa-trash">&nbsp;</i>Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default AllUsers;
