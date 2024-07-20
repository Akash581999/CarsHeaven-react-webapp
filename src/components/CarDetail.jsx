// import React from 'react';
import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaGooglePlusG, FaStumbleupon, FaEnvelope } from 'react-icons/fa';
import img1 from "../assets/Car-details/1.jpg"
import img2 from "../assets/Car-details/2.jpg"
import img3 from "../assets/Car-details/3.jpg"
import img4 from "../assets/Car-details/4.jpg"
import img5 from "../assets/Car-details/5.jpg"
import MainImg from "../assets/car_main.jpg"
import Footer from './Footer';


const CarDetail = () => {
    const [mainImage, setMainImage] = useState(img1);

    const handleImageClick = (image) => {
        setMainImage(image);
    };

    return (
        <>
            <div className='relative'>
                <img src={MainImg} alt="" className='h-[30vh] w-full object-cover' />
                <h1 className='absolute inset-0 flex justify-center items-center text-white text-6xl font-semibold'>Cars</h1>
            </div>
            <div className="container mx-auto p-20">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <img src={mainImage} alt="BMW M2 2020" className="w-full h-auto object-cover" />
                        <div className="grid grid-cols-5 gap-4 mt-4  w-full h-auto object-cover">
                            <img
                                src={img1}
                                alt="Car"
                                className="w-full h-auto object-cover cursor-pointer"
                                onClick={() => handleImageClick(img1)}
                            />
                            <img
                                src={img2}
                                alt="Car"
                                className="w-full h-auto object-cover cursor-pointer"
                                onClick={() => handleImageClick(img2)}
                            />
                            <img
                                src={img3}
                                alt="Car"
                                className="w-full h-auto object-cover cursor-pointer"
                                onClick={() => handleImageClick(img3)}
                            />
                            <img
                                src={img4}
                                alt="Car"
                                className="w-full h-auto object-cover cursor-pointer"
                                onClick={() => handleImageClick(img4)}
                            />
                            <img
                                src={img5}
                                alt="Car"
                                className="w-full h-auto object-cover cursor-pointer"
                                onClick={() => handleImageClick(img5)}
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">BMW M2 2020</h2>
                        <p className="mb-4">The BMW M2 is the high-performance version of the 2 Series 2-door coupé. The first generation of the M2 is the F87 coupé and is powered by turbocharged.</p>
                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                            <h3 className="text-xl font-bold">Daily rate</h3>
                            <p className="text-3xl font-bold text-green-600">$265</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                            <h3 className="text-lg font-semibold mb-2">Specifications</h3>
                            <ul className="text-sm">
                                <li><strong>Body:</strong> Sedan</li>
                                <li><strong>Seat:</strong> 2 seats</li>
                                <li><strong>Door:</strong> 2 doors</li>
                                <li><strong>Luggage:</strong> 150</li>
                                <li><strong>Fuel Type:</strong> Hybrid</li>
                                <li><strong>Engine:</strong> 3000</li>
                                <li><strong>Year:</strong> 2020</li>
                                <li><strong>Mileage:</strong> 200</li>
                                <li><strong>Transmission:</strong> Automatic</li>
                                <li><strong>Drive:</strong> 4WD</li>
                                <li><strong>Fuel Economy:</strong> 18.5</li>
                                <li><strong>Exterior Color:</strong> Blue Metallic</li>
                                <li><strong>Interior Color:</strong> Black</li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                            <h3 className="text-lg font-semibold mb-2">Booking this car</h3>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-sm mb-1" htmlFor="pickup_location">Pick Up Location</label>
                                    <input type="text" id="pickup_location" className="w-full p-2 border rounded" placeholder="Enter your pickup location" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm mb-1" htmlFor="dropoff_location">Drop Off Location</label>
                                    <input type="text" id="dropoff_location" className="w-full p-2 border rounded" placeholder="Enter your dropoff location" />
                                </div>
                                <div className="mb-4 grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm mb-1" htmlFor="pickup_date">Pick Up Date & Time</label>
                                        <input type="date" id="pickup_date" className="w-full p-2 border rounded" />
                                        <input type="time" id="pickup_time" className="w-full p-2 border rounded mt-1" />
                                    </div>
                                    <div>
                                        <label className="block text-sm mb-1" htmlFor="return_date">Return Date & Time</label>
                                        <input type="date" id="return_date" className="w-full p-2 border rounded" />
                                        <input type="time" id="return_time" className="w-full p-2 border rounded mt-1" />
                                    </div>
                                </div>
                                <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Book Now</button>
                            </form>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Share</h3>
                            <div className="flex space-x-2">
                                <a href="#" className="text-blue-500"><FaFacebookF size={20} /></a>
                                <a href="#" className="text-blue-400"><FaTwitter size={20} /></a>
                                <a href="#" className="text-blue-700"><FaLinkedinIn size={20} /></a>
                                <a href="#" className="text-red-600"><FaPinterestP size={20} /></a>
                                <a href="#" className="text-red-500"><FaGooglePlusG size={20} /></a>
                                <a href="#" className="text-orange-500"><FaStumbleupon size={20} /></a>
                                <a href="#" className="text-green-500"><FaEnvelope size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CarDetail;
