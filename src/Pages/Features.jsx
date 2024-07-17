// import React from 'react';
import CarImage from "../assets/Pngs/MainCar.png";
import { GiTrophyCup } from "react-icons/gi";
import { FaRoad } from "react-icons/fa6";
import { MdOutlineCarRental } from "react-icons/md";
import { FaTag } from "react-icons/fa6";
import MainImg2 from "../assets/2.jpg";


const features = [
    {
        icon: <GiTrophyCup size={32} color="white" />,
        title: "First class services",
        description: "Where luxury meets exceptional care, creating unforgettable moments and exceeding your every expectation."
    },
    {
        icon: <FaRoad size={32} color="white" />,
        title: "24/7 road assistance",
        description: "Reliable support when you need it most, keeping you on the move with confidence and peace of mind."
    },
    {
        icon: <MdOutlineCarRental size={32} color="white" />,
        title: "Quality at Minimum Expense",
        description: "Unlocking affordable brilliance with elevating quality while minimizing costs for maximum value."
    },
    {
        icon: <FaTag size={32} color="white" />,
        title: "Free Pick-Up & Drop-Off",
        description: "Enjoy free pickup and drop-off services, adding an extra layer of ease to your car rental experience."
    }
];

const Features = () => {
    return (
        <>
            <div className="relative w-full bg-gray-100 py-20 px-40">
                <div className="text-center mb-12 flex flex-col justify-center items-center">
                    <div className="text-green-600 font-semibold text-lg">Why Choose Us</div>
                    <h2 className="text-4xl font-bold mt-2">Our Features</h2>
                    <p className="mt-6 w-[40vw] font-semibold text-gray-600">Discover a world of convenience, safety, and customization, paving the way for unforgettable adventures and seamless mobility solutions.</p>
                </div>
                <div className="flex justify-between items-cente mt-20 ">
                    <div className="grid">
                        {features.slice(0, 2).map((feature, index) => (
                            <div key={index} className="flex">
                                <div className="w-40 h-20 bg-green-500 flex justify-center items-center rounded-lg mr-10">
                                    {feature.icon}
                                </div>
                                <div className=''>
                                    <h3 className="font-bold">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <img src={CarImage} alt="Car" className="w-1/3 object-cover" />
                    <div className="grid grid-cols-1">
                        {features.slice(2, 4).map((feature, index) => (
                            <div key={index} className="flex items-start ml-4">

                                <div className=' ml-4'>
                                    <h3 className="font-bold">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                                <div className="w-40 h-20 bg-green-500 flex justify-center items-center rounded-lg">
                                    {feature.icon}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative w-full h-[60vh] bg-gray-100">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${MainImg2})` }}
                >
                    <div className="w-full h-full bg-black opacity-50"></div> {/* Overlay */}
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-10">
                    <h1 className="text-4xl font-bold mb-10">
                        We offer customers a wide range of <span className="text-green-500">commercial cars</span> and <span className="text-green-500">luxury cars</span> for any occasion.
                    </h1>
                    <p className="max-w-3xl mb-12  ">
                        At our car rental agency, we believe that everyone deserves to experience the pleasure of driving a reliable and comfortable vehicle, regardless of their budget. We have curated a diverse fleet of well-maintained cars, ranging from sleek sedans to spacious SUVs, all at competitive prices. With our streamlined rental process, you can quickly and conveniently reserve your desired vehicle. Whether you need transportation for a business trip, family vacation, or simply want to enjoy a weekend getaway, we have flexible rental options to accommodate your schedule.
                    </p>
                    <div className="flex justify-evenly w-full space-x-4">
                        <div className=" bg-black bg-opacity-75 rounded-lg py-8 px-10">
                            <h2 className="text-2xl font-bold text-green-500">15425</h2>
                            <p>Completed Orders</p>
                        </div>
                        <div className="bg-black bg-opacity-75 rounded-lg py-8 px-10">
                            <h2 className="text-2xl font-bold text-green-500">8745</h2>
                            <p>Happy Customers</p>
                        </div>
                        <div className="bg-black bg-opacity-75 rounded-lg py-8 px-10">
                            <h2 className="text-2xl font-bold text-green-500">235</h2>
                            <p>Vehicles Fleet</p>
                        </div>
                        <div className="bg-black bg-opacity-75 rounded-lg py-8 px-10">
                            <h2 className="text-2xl font-bold text-green-500">15</h2>
                            <p>Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;
