// import React from 'react';
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/11.jpg";

const NotFoundPage = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900 text-white">
      <div
        id="de-preloader"
        className="absolute inset-0 flex items-center justify-center bg-gray-900"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="relative">
          <div className="car animate-spin" />
          <div className="text absolute inset-0 flex items-center justify-center">
            Loading...
          </div>
        </div>
      </div>

      <div className="relative">
        <section
          id="section-hero"
          className="flex items-center justify-center h-screen bg-cover bg-center text-light pt-20 pb-20"
          style={{ backgroundImage: "url(images/background/11.jpg)" }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h1 className="text-4xl font-bold mb-4">Something is wrong.</h1>
                <p className="mb-6">
                  Looks like this page is missing. Dont worry though, our best
                  team is on the case.
                </p>
                <Link
                  to="/"
                  className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                >
                  Go Back
                </Link>
              </div>
              <div className="lg:w-1/2 text-center">
                <h1 className="text-6xl font-bold">
                  <span className="text-red-500">404</span>
                  <span className="block mt-4 text-white">Not Found</span>
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NotFoundPage;
