import React from "react";
import { TabGroup, TabPanel, TabList, Tab, TabPanels } from "@headlessui/react";

const AdminPanel = () => {
  return (
    <div className={`bg-white min-h-screen`}>
      <section>
        <div className="flex">
          <TabGroup>
            <div className="flex flex-col w-1/5 bg-gray-800 text-white">
              <TabList className="flex flex-col p-4 space-y-2">
                <Tab
                  as="button"
                  className="tab-button flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded"
                >
                  <i className="fas fa-users text-info mr-2"></i> Users
                </Tab>
                <Tab
                  as="button"
                  className="tab-button flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded"
                >
                  <i className="fas fa-music text-info mr-2"></i> Songs
                </Tab>
                <Tab
                  as="button"
                  className="tab-button flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded"
                >
                  <i className="fas fa-list text-info mr-2"></i> Playlists
                </Tab>
                <Tab
                  as="button"
                  className="tab-button flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded"
                >
                  <i className="fas fa-envelope text-info mr-2"></i> Feedbacks
                </Tab>
                <Tab
                  as="button"
                  className="tab-button flex items-center px-3 py-2 text-gray-300 hover:bg-gray-700 rounded"
                >
                  <i className="fas fa-rupee-sign text-info mr-2"></i>{" "}
                  Subscriptions
                </Tab>
              </TabList>
            </div>
            <TabPanels className="flex-1 p-4">
              <TabPanel>{/* <AllUsers /> */}</TabPanel>
              <TabPanel>
                {/* <AllSongs />
                <SearchSong />
                <AddSong /> */}
              </TabPanel>
              <TabPanel>
                {/* <AllPlaylists />
                <SearchPlaylist />
                <AddPlaylist /> */}
              </TabPanel>
              <TabPanel>{/* <AllFeedbacks /> */}</TabPanel>
              <TabPanel>{/* <AllSubscriptions /> */}</TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </section>
    </div>
  );
};

export default AdminPanel;
