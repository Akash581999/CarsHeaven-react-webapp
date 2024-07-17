// import React from 'react';
import { FaTrophy, FaRoad, FaCarSide } from 'react-icons/fa';
import BackgroundImage from "../assets/3.jpg"

const AddventureBanner = () => {
    return (


        <div
            className="relative w-full h-[50vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 w-[20vw]">Lets Your Adventure Begin</h1>
                <div className="flex justify-start items-start text-left mt-8 space-x-4 max-w-5xl">
                    <div className="w-full sm:w-1/3">
                        <div className="p-6 rounded-lg text-left">
                            <FaTrophy size={80} className="bg-green-600 rounded-xl mb-4 p-6" />
                            <h3 className="text-xl font-bold mb-2">First Class Services</h3>
                            <p className="text-gray-300 leading-7">Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/3">
                        <div className="p-6 text-left">
                            <FaRoad size={80} className="bg-green-600 rounded-xl mb-4 p-6" />
                            <h3 className="text-xl font-bold mb-2">24/7 Road Assistance</h3>
                            <p className="text-gray-300 leading-7">Reliable support when you need it most, keeping you on the move with confidence and peace of mind.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/3">
                        <div className="p-6 text-left">
                            <FaCarSide size={80} className="bg-green-600 rounded-xl mb-4 p-6" />
                            <h3 className="text-xl font-bold mb-2">Free Pick-Up & Drop-Off</h3>
                            <p className="text-gray-300 leading-7">Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddventureBanner;
