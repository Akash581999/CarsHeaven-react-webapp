// import React from "react";
import { useEffect, useState } from "react";

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const requestData = {
            eventID: "1001",
            addInfo: {},
        };
        try {
            const response = await fetch("http://localhost:2005/users", {
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
                console.log(data.rData.users, "users data");
                setUsers(data.rData.users || []);
            }
        } catch (error) {
            console.error("Error:", error);
            alert(`Failed to fetch users: ${error}`);
            setUsers([]);
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-semibold mb-6">Users Table</h1>
            <div className="shadow overflow-hidden">
                <table className="min-w-full divide-y text-white bg-black">
                    <thead className="bg-gray-50 ">
                        <tr className="bg-gray-800">
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                FirstName
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                LastName
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                User Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                Phone
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                Address
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                Registration Date
                            </th>
                            {/* <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                Last Login
                            </th> */}
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                Role
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                                Profile Pic
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">

                        {users.map((user, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.userId}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.firstName}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.lastName}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.userName}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.email}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.phone}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.address}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.registrationDate}
                                </td>
                                {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.lastLogin}
                                </td> */}
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {user.role}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <img src={user.profilePic} alt="Profile" className="w-8 h-8 rounded-full" />
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
