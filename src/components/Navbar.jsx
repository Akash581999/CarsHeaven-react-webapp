// import React from 'react';
import { Link } from "react-router-dom";
import CarsHeaven from "../assets/SVG Files/sportcar.svg";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 bg-transparent z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={CarsHeaven} className="h-10" alt="CarsHeaven Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            CarsHeaven
          </span>
        </a>
        <div className="hidden w-full md:flex md:w-auto justify-center">
          <ul className="flex flex-col md:flex-row font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:border-0 md: dark: md:dark: dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/AboutUs"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                AboutUs
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/AllProducts"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/Login">
          <button className="bg-green-400 px-4 py-2 font-semibold rounded-md">
            Log In
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
