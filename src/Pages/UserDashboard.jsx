// import React from 'react';
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import CarsHeaven from "../assets/SVG Files/sportcar.svg";
import AllCars from "../components/AllCars";
import SearchCars from "../components/SearchCars";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [userData, setUserData] = useState({});
  const [profilePic, setProfilePic] = useState(
    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
  );
  const fetchUserCalled = useRef(false);
  useEffect(() => {
    if (!fetchUserCalled.current) {
      fetchUser();
      fetchUserCalled.current = true;
    }
  }, []);
  const userId = sessionStorage.getItem("UserId");
  const fetchUser = async () => {
    const requestData = {
      eventID: "1002",
      addInfo: {
        UserId: "",
        Email: userId,
      },
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
      if (data.rData && data.rData.rCode === 0) {
        setUserData(data.rData);
        setProfilePic(
          data.rData.ProfilePic || "https://via.placeholder.com/160"
        );
      } else {
        setUserData({});
        toast.warning("Failed to get user details!!");
      }
    } catch (error) {
      console.error("Error:", error);
      prompt("An error occurred while trying to fetch user details.");
      setUserData({});
    }
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    let Token = sessionStorage.getItem("Token");
    let UserId = sessionStorage.getItem("UserId");
    if ((Token, UserId)) {
      sessionStorage.removeItem("Token");
      sessionStorage.removeItem("UserId");
      toast.success("Logout successfully");
      navigate("/login");
    } else {
      toast.warning("Some error occurred, token not found!");
    }
  };

  return (
    <>
      {/* navbar starts here */}
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-800">
        <div className="max-w-screen-4xl flex items-center justify-between mx-auto px-4 py-3">
          {/* Logo and Brand Name */}
          <a
            href="/userdashboard"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={CarsHeaven} className="h-12" alt="CarsHeaven Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CarsHeaven
            </span>
          </a>

          {/* User Menu */}
          <div className="flex items-start space-x-5">
            {/* Profile Button */}
            <div className="flex justify-end items-center space-x-5 left-80">
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full focus:ring-2 focus:ring-gray-300 dark:focus:ring-white"
                onClick={toggleDropdown}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-16 h-10 rounded-full"
                  src={profilePic}
                  alt="user photo"
                />
              </button>
              <button
                onClick={handleLogout}
                type="submit"
                className="flex justify-center items-center w-full bg-red-600 text-white py-2 px-2 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <FiLogOut />
                &nbsp;
                <span>Log Out</span>
              </button>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-10 mt-12 w-56 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600">
                {Object.keys(userData).length > 0 ? (
                  <>
                    <div className="px-4 py-3">
                      <span className="block text-sm font-medium text-gray-900 dark:text-white">
                        {userData.UserName}
                      </span>
                      <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                        {userData.Email}
                      </span>
                    </div>
                  </>
                ) : (
                  <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                    User data not found.
                  </p>
                )}
                <ul className="py-2">
                  <li>
                    <Link
                      to="/userprofile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/editprofile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Edit Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/changepassword"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Change Password
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      type="submit"
                      className="block px-4 py-2 text-sm text-gray-700 dark:hover:bg-red-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isDropdownOpen}
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </nav>
      {/* navbar ends here */}

      <div className="flex">
        {/* Sidebar (Vertical Tabs) */}
        <div className="bg-gray-100 dark:bg-gray-800 w-48 p-4 h-[2200px] relative bottom-[1px]">
          <ul className="space-y-2">
            <li>
              <button
                className={`w-full py-2 text-left font-medium ${activeTab === "dashboard"
                  ? "text-blue-600 dark:text-blue-300"
                  : "text-gray-600 dark:text-gray-300"
                  }`}
                onClick={() => handleTabClick("dashboard")}
                type="button"
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                className={`w-full py-2 text-left font-medium ${activeTab === "search"
                  ? "text-blue-600 dark:text-blue-300"
                  : "text-gray-600 dark:text-gray-300"
                  }`}
                onClick={() => handleTabClick("search")}
                type="button"
              >
                Search
              </button>
            </li>
            <li>
              <button
                className={`w-full py-2 text-left font-medium ${activeTab === "wishlist"
                  ? "text-blue-600 dark:text-blue-300"
                  : "text-gray-600 dark:text-gray-300"
                  }`}
                onClick={() => handleTabClick("wishlist")}
                type="button"
              >
                Wishlist
              </button>
            </li>
            <li>
              <button
                className={`w-full py-2 text-left font-medium ${activeTab === "orders"
                  ? "text-blue-600 dark:text-blue-300"
                  : "text-gray-600 dark:text-gray-300"
                  }`}
                onClick={() => handleTabClick("orders")}
                type="button"
              >
                Orders
              </button>
            </li>
          </ul>
        </div>

        <div className="flex-1 p-4">
          <div className={`${activeTab !== "dashboard" && "hidden"}`}>
            <AllCars />
          </div>
          <div className={`${activeTab !== "search" && "hidden"}`}>
            <SearchCars />
          </div>
          <div className={`${activeTab !== "wishlist" && "hidden"}`}>
            {/* <AllWishlists /> */}
          </div>
          <div className={`${activeTab !== "orders" && "hidden"}`}>
            {/* <AllOrders /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
