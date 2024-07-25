// import React from 'react';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import CarsHeaven from "../assets/SVG Files/sportcar.svg";
import AllCars from "../components/AllCars";
import SearchCars from '../components/SearchCars';
// import AllOrders from '../components/AllOrders';
// import AllWishlists from '../components/AllWishlists';
// import VehicleCards from '../components/VehicleCards';
// import AllProducts from './AllProducts';
// import Booking from "./Booking";


const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  // const navigate = Navigate();
  // const handleLogout = () => {
  //   const token = sessionStorage.getItem("Token");
  //   if (token) {
  //     sessionStorage.removeItem("Token");
  //     alert("Logout successful");
  //     navigate("/login");
  //   } else {
  //     alert("No token found");
  //   }
  // };

  return (
    <>
      {/* navbar starts here */}
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-800">
        <div className="max-w-screen-2xl flex items-center justify-between mx-auto px-4 py-3">
          {/* Logo and Brand Name */}
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={CarsHeaven} className="h-12" alt="CarsHeaven Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CarsHeaven
            </span>
          </a>

          {/* User Menu */}
          <div className="flex items-start space-x-3">
            {/* Profile Button */}
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              onClick={toggleDropdown}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="user photo"
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-10 mt-12 w-56 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600">
                <div className="px-4 py-3">
                  <span className="block text-sm font-medium text-gray-900 dark:text-white">Akash Kumar</span>
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">akash581999@gmail.com</span>
                </div>
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
                    {/* <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Logout
                    </button> */}
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Logout
                    </Link>
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
                className={`w-full py-2 text-left font-medium ${activeTab === 'dashboard' ? 'text-blue-600 dark:text-blue-300' : 'text-gray-600 dark:text-gray-300'}`}
                onClick={() => handleTabClick('dashboard')}
                type="button"
              >
                Dashboard
              </button>
            </li>
            <li>
              <button
                className={`w-full py-2 text-left font-medium ${activeTab === 'search' ? 'text-blue-600 dark:text-blue-300' : 'text-gray-600 dark:text-gray-300'}`}
                onClick={() => handleTabClick('search')}
                type="button"
              >
                Search
              </button>
            </li>
            <li>
              <button
                className={`w-full py-2 text-left font-medium ${activeTab === 'wishlist' ? 'text-blue-600 dark:text-blue-300' : 'text-gray-600 dark:text-gray-300'}`}
                onClick={() => handleTabClick('wishlist')}
                type="button"
              >
                Wishlist
              </button>
            </li>
            <li>
              <button
                className={`w-full py-2 text-left font-medium ${activeTab === 'orders' ? 'text-blue-600 dark:text-blue-300' : 'text-gray-600 dark:text-gray-300'}`}
                onClick={() => handleTabClick('orders')}
                type="button"
              >
                Orders
              </button>
            </li>
          </ul>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4">
          {/* Tab Content */}
          <div className={`${activeTab !== 'dashboard' && 'hidden'}`}>
            {/* <AllProducts /> */}
            <AllCars />
            {/* <VehicleCards /> */}
          </div>
          <div className={`${activeTab !== 'search' && 'hidden'}`}>
            <SearchCars />
            {/* <Booking /> */}
          </div>
          <div className={`${activeTab !== 'wishlist' && 'hidden'}`}>
            {/* <AllWishlists /> */}
          </div>
          <div className={`${activeTab !== 'orders' && 'hidden'}`}>
            {/* <AllOrders /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
