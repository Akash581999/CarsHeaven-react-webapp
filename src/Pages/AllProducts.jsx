import React, { useState } from 'react';
import bmw from "../assets/Cars/bmw-m5.jpg";
import ferrari from "../assets/Cars/ferrari-enzo.jpg";
import ford from "../assets/Cars/ford-raptor.jpg";
import jeep from "../assets/Cars/jeep-renegade.jpg";
import mini from "../assets/Cars/mini-cooper.jpg";
import vw from "../assets/Cars/vw-polo.jpg";
import { MdPerson } from "react-icons/md";
import { IoCarSportSharp } from "react-icons/io5";
import { GiCarDoor } from "react-icons/gi";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import MainImg from "../assets/car_main.jpg"

const AllProducts = () => {
    const carData = [
        {
            id: 1,
            name: "Jeep Renegade",
            image: jeep,
            likes: 25,
            attributes: [
                { component: MdPerson, value: 5 },
                { component: IoCarSportSharp, value: 2 },
                { component: GiCarDoor, value: 4 },
                { component: BsFillSuitcaseLgFill, value: "SUV" }
            ],
            price: 265
        },
        {
            id: 2,
            name: "Mini Cooper",
            image: vw,
            likes: 79,
            attributes: [
                { component: MdPerson, value: 5 },
                { component: IoCarSportSharp, value: 2 },
                { component: GiCarDoor, value: 4 },
                { component: BsFillSuitcaseLgFill, value: "Sedan" }
            ],
            price: 244
        },
        {
            id: 3,
            name: "Ford Raptor",
            image: ford,
            likes: 79,
            attributes: [
                { component: MdPerson, value: 5 },
                { component: IoCarSportSharp, value: 2 },
                { component: GiCarDoor, value: 4 },
                { component: BsFillSuitcaseLgFill, value: "Sedan" }
            ],
            price: 244
        }, {
            id: 3,
            name: "Ford Raptor",
            image: ford,
            likes: 79,
            attributes: [
                { component: MdPerson, value: 5 },
                { component: IoCarSportSharp, value: 2 },
                { component: GiCarDoor, value: 4 },
                { component: BsFillSuitcaseLgFill, value: "Sedan" }
            ],
            price: 244
        }, {
            id: 3,
            name: "Ford Raptor",
            image: ford,
            likes: 79,
            attributes: [
                { component: MdPerson, value: 5 },
                { component: IoCarSportSharp, value: 2 },
                { component: GiCarDoor, value: 4 },
                { component: BsFillSuitcaseLgFill, value: "Sedan" }
            ],
            price: 244
        }, {
            id: 3,
            name: "Ford Raptor",
            image: ford,
            likes: 79,
            attributes: [
                { component: MdPerson, value: 5 },
                { component: IoCarSportSharp, value: 2 },
                { component: GiCarDoor, value: 4 },
                { component: BsFillSuitcaseLgFill, value: "Sedan" }
            ],
            price: 244
        }, {
            id: 3,
            name: "Ford Raptor",
            image: ford,
            likes: 79,
            attributes: [
                { component: MdPerson, value: 5 },
                { component: IoCarSportSharp, value: 2 },
                { component: GiCarDoor, value: 4 },
                { component: BsFillSuitcaseLgFill, value: "Sedan" }
            ],
            price: 244
        }, {
            id: 3,
            name: "Ford Raptor",
            image: ford,
            likes: 79,
            attributes: [
                { component: MdPerson, value: 5 },
                { component: IoCarSportSharp, value: 2 },
                { component: GiCarDoor, value: 4 },
                { component: BsFillSuitcaseLgFill, value: "Sedan" }
            ],
            price: 244
        },
        // Add more car objects here...
    ];

    
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(2000);
    
    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxPrice - 1);
        setMinPrice(value);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minPrice + 1);
        setMaxPrice(value);
    };

    return (
        <>
            <div className='relative'>
                <img src={MainImg} alt="" className='h-[40vh] w-full object-cover' />
                <h1 className='absolute inset-0 flex justify-center items-center text-white text-6xl font-semibold'>Cars</h1>
            </div>

            <div className='flex ml-56 mt-24 gap-10'>
                <div className="w-full md:w-1/5 h-[60vh] flex-col border-black space-y-10">
                    <div className="filter-group p-8 rounded-md border-2 shadow-xl">
                        <h4 className="font-semibold mb-2 text-lg">Vehicle Type</h4>
                        <div className="flex flex-col ">
                            {['Car', 'Van', 'Minibus', 'Prestige'].map((type, index) => (
                                <label key={index} className="flex items-center mb-2">
                                    <input
                                        id={`vehicle_type_${index + 1}`}
                                        name={`vehicle_type_${index + 1}`}
                                        type="checkbox"
                                        value={`vehicle_type_${index + 1}`}
                                        className="mr-2 text-green-300"
                                    />
                                    {type}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="filter-group p-8 rounded-md border-2 shadow-xl">
                        <h4 className="font-semibold mb-2">Vehicle Type</h4>
                        <div className="flex flex-col">
                            {['2 seats', '4 seats', '6 seats', '6+ seats'].map((seats, index) => (
                                <label key={index} className="flex items-center mb-2">
                                    <input
                                        id={`seats_${index + 1}`}
                                        name={`seats_${index + 1}`}
                                        type="checkbox"
                                        value={`seats_${index + 1}`}
                                        className="mr-2 text-green-300"
                                    />
                                    {seats}
                                </label>
                            ))}
                        </div>
                    </div>


                    <div className="item_filter_group p-4 rounded-lg shadow-md bg-white">
            <h4 className="text-lg font-semibold mb-4">Price ($)</h4>
            <div className="price-input mb-4 flex space-x-4">
                <div className="field flex-1">
                    <span className="block mb-2">Min</span>
                    <input 
                        type="number" 
                        className="input-min w-full p-2 border-2 bg-white border-gray-300 rounded-md"
                        value={minPrice}
                        onChange={handleMinChange}
                    />
                </div>
                <div className="field flex-1">
                    <span className="block mb-2">Max</span>
                    <input 
                        type="number" 
                        className="input-max w-full p-2 border border-gray-300 rounded"
                        value={maxPrice}
                        onChange={handleMaxChange}
                    />
                </div>
            </div>
            
            
        </div>
                </div>

                <div className="w-full md:w-2/3 h-screen">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {carData.map((car) => (
                            <div key={car.id} className="bg-white shadow-2xl overflow-hidden">
                                <img src={car.image} alt={car.name} className="w-full h-48 object-cover border rounded-lg p-2" />
                                <div className="px-8 py-8">
                                    <h4 className="text-xl font-semibold">{car.name}</h4>
                                    <div className="flex items-center mt-2">
                                        <i className="fa fa-heart text-red-500"></i>
                                        <span className="ml-1 text-gray-600">{car.likes}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-1 my-2">
                                        {car.attributes.map((attr, index) => (
                                            <span key={index} className="flex items-center text-green-400 px-2 py-1 rounded-full text-sm">
                                                <attr.component className="w-4 h-4 mr-1" />
                                                {attr.value}
                                            </span>
                                        ))}
                                    </div>
                                    <hr className='mt-3' />
                                    <div className="mt-4 flex justify-between items-center">
                                        <div className='flex flex-col justify-center items-start'>
                                            <span>Daily rate from</span>
                                            <span className="text-xl font-bold">${car.price}</span>
                                        </div>
                                        <a href="car-single.html" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex justify-center mt-3">Rent Now</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllProducts;
