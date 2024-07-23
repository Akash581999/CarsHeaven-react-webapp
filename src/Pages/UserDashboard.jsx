import React from "react";
import { Link } from "react-router-dom";
import AllTraxslogo from "../images/AllTraxslogo.png";
import user from "../images/userimg1.jpg";
import SongPlayer from "./SongPlayer";
import Album from "./Album";
import CardList from "./CardList";
import LikedSongs from "./LikedSongs";
import SongsLibrary from "./SongsLibrary";
import { Tab } from '@headlessui/react';

const UserDashboard = (props) => {
    return (
        <>
            <div className={`bg-${props.mode}`}>
                <nav className="sticky top-0 bg-gray-900 z-10">
                    <div className="container mx-auto flex items-center justify-between py-4 px-6">
                        <div className="flex items-center">
                            <img src={AllTraxslogo} alt="logo" className="h-8 w-8 mr-2" />
                            <Link className="text-3xl font-bold text-purple-700" to="/UserDashboard">
                                AllTraxs
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <form className="flex items-center">
                                <input
                                    onClick={props.toggleMode}
                                    type="checkbox"
                                    className="toggle-checkbox hidden"
                                    id="flexSwitchCheckDefault"
                                />
                                <label
                                    htmlFor="flexSwitchCheckDefault"
                                    className={`toggle-label block w-12 h-6 rounded-full shadow-inner bg-gray-400 ${props.mode === "dark" ? "bg-purple-700" : ""
                                        }`}
                                ></label>
                            </form>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasExample"
                                aria-controls="offcanvasExample"
                            >
                                <i className="fa fa-list"></i>&nbsp;Menu
                            </button>
                            <Link to="/LoginScreen" className="ml-4">
                                <button className="bg-red-500 text-white px-4 py-2 rounded" type="button">
                                    <i className="fa fa-sign-out"></i>&nbsp;Log out
                                </button>
                            </Link>
                        </div>
                    </div>
                </nav>

                <article>
                    <div
                        className="offcanvas offcanvas-end bg-gray-800 text-white"
                        tabIndex="-1"
                        id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel"
                    >
                        <div className="offcanvas-header flex justify-center items-center">
                            <Link
                                to="/DashBoardScreen"
                                className="flex items-center text-gray-300 text-decoration-none"
                            >
                                <h5 className="text-2xl">Profile</h5>
                                <img
                                    src={user}
                                    alt="profile"
                                    className="w-24 h-24 rounded-full ml-2"
                                />
                            </Link>
                            <button
                                type="button"
                                className="btn-close text-gray-400 hover:text-gray-300"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            >
                                <span className="text-xl">&times;</span>
                            </button>
                        </div>
                        <hr className="border-gray-600" />
                        <div className="offcanvas-body">
                            <ul className="flex flex-col space-y-2">
                                <li className="nav-item">
                                    <Link
                                        to="/DashBoardScreen"
                                        className="nav-link text-white bg-purple-600 rounded px-3 py-2"
                                        aria-current="page"
                                    >
                                        <i className="fa fa-home"></i>&nbsp; Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/DashBoardScreen" className="nav-link text-gray-300 hover:bg-gray-700 rounded px-3 py-2">
                                        <i className="fa fa-dashboard"></i>&nbsp; Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/DashBoardScreen" className="nav-link text-gray-300 hover:bg-gray-700 rounded px-3 py-2">
                                        <i className="fa fa-search"></i>&nbsp; Search
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="nav-link text-gray-300 hover:bg-gray-700 rounded px-3 py-2">
                                        <i className="fa fa-list"></i>&nbsp; Playlists
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="nav-link text-gray-300 hover:bg-gray-700 rounded px-3 py-2">
                                        <i className="fa fa-heart"></i>&nbsp; Liked songs
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/SubscriptionScreen" className="nav-link text-gray-300 hover:bg-gray-700 rounded px-3 py-2">
                                        <i className="fa fa-money"></i>&nbsp; Get premium
                                    </Link>
                                </li>
                            </ul>
                            <hr className="border-gray-600" />
                            <div className="dropdown relative">
                                <Link
                                    to="/"
                                    className="flex items-center text-gray-300 hover:text-gray-100"
                                    id="dropdownUser1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        src={user}
                                        alt="user"
                                        className="w-8 h-8 rounded-full mr-2"
                                    />
                                    <strong>User</strong>
                                </Link>
                                <ul
                                    className="dropdown-menu absolute hidden text-gray-300 pt-1"
                                    aria-labelledby="dropdownUser1"
                                >
                                    <li>
                                        <Link className="dropdown-item" to="/UserProfile">
                                            <i className="fa fa-user"></i>&nbsp; Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/">
                                            <i className="fa fa-lock"></i>&nbsp; Account
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/ForgotScreen">
                                            <i className="fa fa-wrench"></i>&nbsp; Settings
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider border-gray-600" />
                                    </li>
                                    <li>
                                        <button
                                            className="w-full text-left bg-red-500 text-white px-4 py-2"
                                            type="submit"
                                        >
                                            <Link to="/LoginScreen" className="dropdown-item">
                                                <i className="fa fa-power-off"></i>&nbsp; Log out
                                            </Link>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </article>

                <section>
                    <div className="flex" style={{ minHeight: "100vh" }}>
                        <Tab.Group>
                            <div className="flex flex-col w-1/5 bg-gray-900">
                                <Tab.List className="flex flex-col p-4">
                                    <Tab as="button" className="tab-button text-gray-300 hover:bg-gray-700 rounded px-3 py-2">
                                        <i className="fa fa-home text-info"></i>&nbsp; Home
                                    </Tab>
                                    <Tab as="button" className="tab-button text-gray-300 hover:bg-gray-700 rounded px-3 py-2">
                                        <i className="fa fa-search text-info"></i>&nbsp; Search
                                    </Tab>
                                    <Tab as="button" className="tab-button text-gray-300 hover:bg-gray-700 rounded px-3 py-2">
                                        <i className="fa fa-table text-info"></i>&nbsp; Library
                                    </Tab>
                                    <Tab as="button" className="tab-button text-gray-300 hover:bg-gray-700 rounded px-3 py-2">
                                        <i className="fas fa-list text-info"></i>&nbsp; Playlists
                                    </Tab>
                                    <Tab as="button" className="tab-button text-gray-300 hover:bg-gray-700 rounded px-3 py-2">
                                        <i className="fa fa-thumbs-up text-info"></i>&nbsp; Liked songs
                                    </Tab>
                                </Tab.List>
                            </div>
                            <Tab.Panels className="flex-1 p-4">
                                <Tab.Panel>
                                    <SongsLibrary />
                                </Tab.Panel>
                                <Tab.Panel>
                                    <SongPlayer />
                                </Tab.Panel>
                                <Tab.Panel>
                                    <Album />
                                </Tab.Panel>
                                <Tab.Panel>
                                    <CardList />
                                </Tab.Panel>
                                <Tab.Panel>
                                    <LikedSongs />
                                </Tab.Panel>
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </section>
            </div>
        </>
    );
};

export default UserDashboard;
