import React, { useState } from 'react';
import CarsHeaven from "../assets/SVG Files/sportcar.svg";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {/* navbar starts here */}
      <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
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
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Change Password
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
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
        <div className="bg-gray-100 dark:bg-gray-800 w-48 p-4 h-[100vh]">
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
          <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab !== 'dashboard' && 'hidden'}`}>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content for the <strong className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</strong>.
            </p>
          </div>
          <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab !== 'search' && 'hidden'}`}>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content for the <strong className="font-medium text-gray-800 dark:text-white">Search tab's associated content</strong>.
            </p>
          </div>
          <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab !== 'wishlist' && 'hidden'}`}>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content for the <strong className="font-medium text-gray-800 dark:text-white">Wishlist tab's associated content</strong>.
            </p>
          </div>
          <div className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${activeTab !== 'orders' && 'hidden'}`}>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content for the <strong className="font-medium text-gray-800 dark:text-white">Orders tab's associated content</strong>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
