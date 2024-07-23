import React from "react";
import { Tab } from '@headlessui/react';
import AllUsers from "./AllUsers";
import SearchSong from "./AdminSearchSong";
import AddSong from "./AddSong";
import AllSongs from "./AllSongs";
import AllPlaylists from "./AllPlaylists";
import SearchPlaylist from "./SearchPlaylist";
import AddPlaylist from "./AddPlaylist";
import AllFeedbacks from "./AllFeedbacks";
import AllSubscriptions from "./AllSubscriptions";

const AdminPanel = (props) => {
    return (
        <div className={`bg-${props.mode} min-h-screen`}>
            <section>
                <div className="flex">
                    <Tab.Group>
                        <div className="flex flex-col w-1/5 bg-gray-800 text-white">
                            <Tab.List className="flex flex-col p-4 space-y-2">
                                <Tab as="button" className="tab-button flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded">
                                    <i className="fas fa-users text-info mr-2"></i> Users
                                </Tab>
                                <Tab as="button" className="tab-button flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded">
                                    <i className="fas fa-music text-info mr-2"></i> Songs
                                </Tab>
                                <Tab as="button" className="tab-button flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded">
                                    <i className="fas fa-list text-info mr-2"></i> Playlists
                                </Tab>
                                <Tab as="button" className="tab-button flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded">
                                    <i className="fas fa-envelope text-info mr-2"></i> Feedbacks
                                </Tab>
                                <Tab as="button" className="tab-button flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded">
                                    <i className="fas fa-rupee-sign text-info mr-2"></i> Subscriptions
                                </Tab>
                            </Tab.List>
                        </div>
                        <Tab.Panels className="flex-1 p-4">
                            <Tab.Panel>
                                <AllUsers />
                            </Tab.Panel>
                            <Tab.Panel>
                                <AllSongs />
                                <SearchSong />
                                <AddSong />
                            </Tab.Panel>
                            <Tab.Panel>
                                <AllPlaylists />
                                <SearchPlaylist />
                                <AddPlaylist />
                            </Tab.Panel>
                            <Tab.Panel>
                                <AllFeedbacks />
                            </Tab.Panel>
                            <Tab.Panel>
                                <AllSubscriptions />
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </section>
        </div>
    );
};

export default AdminPanel;
