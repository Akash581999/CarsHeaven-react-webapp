import React from 'react';
import bmw from "../assets/Cars/bmw-m5.jpg"
import ferrari from "../assets/Cars/ferrari-enzo.jpg"
import ford from "../assets/Cars/ford-raptor.jpg"
import jeep from "../assets/Cars/jeep-renegade.jpg"
import mini from "../assets/Cars/mini-cooper.jpg"
import vw from "../assets/Cars/vw-polo.jpg"
import { MdPerson } from "react-icons/md";
import { IoCarSportSharp } from "react-icons/io5";
import { GiCarDoor } from "react-icons/gi";
import { BsFillSuitcaseLgFill } from "react-icons/bs";



const AllProducts = () => {

    const carData = [
        {
            id: 1,
            name: "Jeep Renegade",
            image: jeep,
            likes: 25,
            attributes: [
                { imgSrc: < MdPerson/>},
                { imgSrc: "images/icons/2-green.svg", value: 2 },
                { imgSrc: "images/icons/3-green.svg", value: 4 },
                { imgSrc: "images/icons/4-green.svg", value: "SUV" }
            ],
            price: 265
        },
        {
            id: 2,
            name: "Mini Cooper",
            image: vw,
            likes: 79,
            attributes: [
                { imgSrc: "images/icons/1-green.svg", value: 5 },
                { imgSrc: "images/icons/2-green.svg", value: 2 },
                { imgSrc: "images/icons/3-green.svg", value: 4 },
                { imgSrc: "images/icons/4-green.svg", value: "Sedan" }
            ],
            price: 244
        },

        {
            id: 2,
            name: "Mini Cooper",
            image: ford,
            likes: 79,
            attributes: [
                { imgSrc: "images/icons/1-green.svg", value: 5 },
                { imgSrc: "images/icons/2-green.svg", value: 2 },
                { imgSrc: "images/icons/3-green.svg", value: 4 },
                { imgSrc: "images/icons/4-green.svg", value: "Sedan" }
            ],
            price: 244
        },
        // Add more car objects here...
    ];

    return (
        <div className='flex flex-wrap p-20'>
            <div className="w-full md:w-1/3 border">
                <div className="filter-group mb-4">
                    <h4 className="font-semibold mb-2">Vehicle Type</h4>
                    <div className="flex flex-col">
                        {['Car', 'Van', 'Minibus', 'Prestige'].map((type, index) => (
                            <label key={index} className="flex items-center mb-2">
                                <input
                                    id={`vehicle_type_${index + 1}`}
                                    name={`vehicle_type_${index + 1}`}
                                    type="checkbox"
                                    value={`vehicle_type_${index + 1}`}
                                    className="mr-2"
                                />
                                {type}
                            </label>
                        ))}
                    </div>
                </div>

            </div>

            <div className="w-full md:w-2/3 h-screen p-4 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {carData.map((car) => (
                        <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h4 className="text-xl font-semibold">{car.name}</h4>
                                <div className="flex items-center mt-2">
                                    <i className="fa fa-heart text-red-500"></i>
                                    <span className="ml-1 text-gray-600">{car.likes}</span>
                                </div>
                                <div className="flex flex-wrap gap-2 my-2">
                                    {car.attributes.map((attr, index) => (
                                        <span key={index} className="flex items-center bg-gray-200 px-2 py-1 rounded-full text-sm">
                                            <img src={attr.imgSrc} alt={attr.value} className="w-4 h-4 mr-1" />
                                            {attr.value}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-xl font-bold">${car.price}</span>
                                    <a href="car-single.html" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Rent Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
