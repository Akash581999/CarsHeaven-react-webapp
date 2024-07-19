// import React from 'react'
import MainImg from "../assets/1.jpg";
import png1 from "../assets/Pngs/car.png"
import AddventureBanner from "../components/AddventureBanner";
import Contactbanner from "../components/ContactBanner";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import ProductsBanner from "../components/ProductsBanner";
import Features from './Features';

function Home() {

    const data = [
        {
            heading: "Choose a vehicle",
            description: "Unlock unparalleled adventures and memorable journeys with our vast fleet of vehicles tailored to suit every need, taste, and destination.",
        },
        {
            heading: "Pick location & date",
            description: "Pick your ideal location and date, and let us take you on a journey filled with convenience, flexibility, and unforgettable experiences.",

        },
        {
            heading: "Make a booking",
            description: "Secure your reservation with ease, unlocking a world of possibilities and embarking on your next adventure with confidence.",

        },
        {
            heading: "Sit back & relax",
            description: "Hassle-free convenience as we take care of every detail, allowing you to unwind and embrace a journey filled with comfort.",

        }
    ];

    return (
        <div className='relative w-full h-screen bg-slate-500'>
            <img src={MainImg} alt="Main Background" className='w-full h-full object-cover' />
            <div className='absolute top-[20%] left-[15%] space-y-12 '>
                <h1 className='text-white font-semibold text-5xl'>
                    Looking for a vehicle? Youre at the right place.
                </h1>
                <div className='w-[72vw] h-[32vh] bg-white grid grid-cols-2 gap-4 p-4 border rounded-md'>
                    {/* Left Side */}
                    <div className='col-span-1 flex flex-col justify-start gap-4 '>
                        <h1 className='font-bold'>What is your vehicle type?</h1>
                        <div className='flex items-start justify-between'>
                            <div className='h-24 w-32 bg-green-400 flex flex-col items-center justify-center p-2 rounded-lg'>
                                <img src={png1} alt="Car Icon" className='h-12' />
                                <span>Car</span>
                            </div>
                            <div className='h-24 w-32 bg-green-400 flex flex-col items-center justify-center p-2 rounded-lg'>
                                <img src={png1} alt="Van Icon" className='h-12' />
                                <span>Van</span>
                            </div>
                            <div className='h-24 w-32 bg-green-400 flex flex-col items-center justify-center p-2 rounded-lg'>
                                <img src={png1} alt="Minibus Icon" className='h-12' />
                                <span>Minibus</span>
                            </div>
                            <div className='h-24 w-32 bg-green-400 flex flex-col items-center justify-center p-2 rounded-lg'>
                                <img src={png1} alt="Prestige Icon" className='h-12' />
                                <span>Prestige</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className='col-span-1 flex flex-col justify-start space-y-4'>

                        <div className='flex gap-10 '>

                            <div className='w-full'>
                                <label htmlFor='return-date'>Return Date & Time</label>

                                <input
                                    type='text'
                                    placeholder='Enter your pickup location'
                                    className='border p-2 rounded'
                                />
                            </div>

                            <div className='w-full'>
                                <label htmlFor='return-date'>Return Date & Time</label>

                                <input
                                    type='text'
                                    placeholder='Enter your dropoff location'
                                    className='border p-2 rounded w-full'
                                />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div className='flex flex-col'>
                                <label htmlFor='pickup-date'>Pick Up Date & Time</label>
                                <input
                                    type='date'
                                    id='pickup-date'
                                    className='border p-2 rounded'
                                />
                                <input
                                    type='time'
                                    id='pickup-time'
                                    className='border p-2 rounded mt-2'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='return-date'>Return Date & Time</label>
                                <input
                                    type='date'
                                    id='return-date'
                                    className='border p-2 rounded'
                                />
                                <input
                                    type='time'
                                    id='return-time'
                                    className='border p-2 rounded mt-2'
                                />
                            </div>
                        </div>
                        <button className='bg-green-500 text-white p-2 rounded mt-4 flex justify-center w-40 '>
                            Find a Vehicle
                        </button>
                    </div>
                </div>
                <div className='w-[72vw] h-[32vh] grid grid-cols-4 gap-4 p-8 mt-10'>
                    {data.map((item, index) => (
                        <div key={index} className='flex flex-col items-left w-[13vw] justify-between text-white'>
                            <span className='w-14 h-14 bg-green-500 flex justify-center items-center rounded-full'>
                                1
                            </span>
                            <h1 className='text-left font-bold'>{item.heading}</h1>
                            <p className='text-left'>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Features />
            <ProductsBanner />
            <AddventureBanner />
            <FAQ />
            <Contactbanner  />
            <Footer />
        </div>

    )
}

export default Home