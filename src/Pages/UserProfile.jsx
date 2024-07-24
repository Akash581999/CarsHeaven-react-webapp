// import React from "react";
import { Link } from "react-router-dom";
// import { FaInstagram } from "react-icons/fa6";

const UserProfile = () => {
    return (
        <section className="bg-gray-200">
            <div className="container mx-auto py-4">
                <div className="mb-4">
                    <nav className="bg-white rounded p-3 shadow">
                        <ol className="flex space-x-2">
                            <li>
                                <Link to="/UserDashBoard" className="text-blue-600 hover:underline">
                                    DashBoard
                                </Link>
                            </li>
                            <li>
                                <span>/</span>
                            </li>
                            <li>
                                <Link to="/UserProfile" className="text-blue-600 hover:underline">
                                    User
                                </Link>
                            </li>
                            <li>
                                <span>/</span>
                            </li>
                            <li className="text-gray-500">
                                Profile
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className="flex flex-col space-y-4">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="text-center">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                alt="avatar"
                                className="rounded-full mx-auto"
                                style={{ maxWidth: "150px" }}
                            />
                            <p className="text-gray-600">Akash Kumar</p>
                            <p className="text-gray-500 mt-2">akash581999@gmail.com</p>
                            <div className="flex justify-center space-x-2 mt-4">
                                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                                    Update
                                </button>
                                <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700">
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center bg-white rounded-lg shadow p-6">
                        <div className="space-y-4 w-[50%]">
                            <div className="flex">
                                <div className="w-full">
                                    <p className="font-bold">First Name</p>
                                </div>
                                <div className="w-full">
                                    <p className="text-gray-600">Akash</p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex">
                                <div className="w-full">
                                    <p className="font-bold">Last Name</p>
                                </div>
                                <div className="w-full">
                                    <p className="text-gray-600">Kumar</p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex">
                                <div className="w-full">
                                    <p className="font-bold">User Name</p>
                                </div>
                                <div className="w-full">
                                    <p className="text-gray-600">Akash Kumar</p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex">
                                <div className="w-full">
                                    <p className="font-bold">Email</p>
                                </div>
                                <div className="w-full">
                                    <p className="text-gray-600">akash581999@gmail.com</p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex">
                                <div className="w-full">
                                    <p className="font-bold">Mobile</p>
                                </div>
                                <div className="w-full">
                                    <p className="text-gray-600">(+91) 9634708314</p>
                                </div>
                            </div>
                            <hr />
                            <div className="flex">
                                <div className="w-full">
                                    <p className="font-bold">Address</p>
                                </div>
                                <div className="w-full">
                                    <p className="text-gray-600">Sector 22, Gurgaon, Haryana</p>
                                </div>
                            </div>
                            <div className="flex justify-center  gap-2">
                                <button className="bg-gray-200 text-gray-600 font-bold py-2 px-4 rounded hover:bg-gray-300">
                                    Edit
                                </button>
                                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex flex-wrap justify-evenly space-x-4">
                            <div className="p-3">
                                <i className="fab fa-github text-2xl" style={{ color: "#333333" }}></i>
                                <span className="ml-2">akash591999</span>
                            </div>
                            <div className="p-3">
                                <i className="fab fa-twitter text-2xl" style={{ color: "#55acee" }}></i>
                                <span className="ml-2">@akash591999</span>
                            </div>
                            <div className="p-3">
                                <i className="fab fa-instagram text-2xl" style={{ color: "#ac2bac" }}></i>
                                <span className="ml-2">akash591999</span>
                            </div>
                            <div className="p-3">
                                <i className="fab fa-facebook text-2xl" style={{ color: "#3b5998" }}></i>
                                <span className="ml-2">akash591999</span>
                            </div>
                        </div>
                    </div> */}

                    <div className="flex justify-center mt-4 space-x-2">
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                            Back
                        </button>
                        <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;
