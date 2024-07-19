import React from 'react'
import MainImg from '../assets/16.jpg'
import BoardOfDirectors from '../components/BoardOfDirectors'
import Contactbanner from '../components/Contactbanner';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <>
    <div className='relative '>
    <img src={MainImg} alt="" className='h-[40vh] w-full object-cover' />
    <h1 className='absolute inset-0 flex justify-center items-center text-white text-6xl font-semibold'>Quick Booking</h1>
</div>

<div className="relative w-full h-[60vh] bg-white">
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    // style={{ backgroundImage: `url(${MainImg2})` }}
                >
                    <div className="w-full h-full opacity-50"></div> {/* Overlay */}
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-10">
                    <div className='flex w-[80%] text-left'>

                    <h1 className="text-5xl font-bold mb-10 ">
                        We offer cus    tomers a wide range of <span className="text-green-500">commercial cars</span> and <span className="text-green-500">luxury cars</span> for any occasion.
                    </h1>
                    <p className="max-w-xl leading-7 mb-12 ">
                        At our car rental agency, we believe that everyone deserves to experience the pleasure of driving a reliable and comfortable vehicle, regardless of their budget. We have curated a diverse fleet of well-maintained cars, ranging from sleek sedans to spacious SUVs, all at competitive prices. With our streamlined rental process, you can quickly and conveniently reserve your desired vehicle. Whether you need transportation for a business trip, family vacation, or simply want to enjoy a weekend getaway, we have flexible rental options to accommodate your schedule.
                    </p>
                    </div>
                    <div className="flex justify-evenly w-full">
                        <div className=" shadow-xl rounded-lg py-12 px-20 leading-normal">
                            <h2 className="text-5xl font-bold text-green-500">15425</h2>
                            <p>Completed Orders</p>
                        </div>
                        <div className="shadow-xl rounded-lg py-12 px-20 leading-normal">
                            <h2 className="text-5xl font-bold text-green-500">8745</h2>
                            <p>Happy Customers</p>
                        </div>
                        <div className="shadow-xl rounded-lg py-12 px-20 leading-normal">
                            <h2 className="text-5xl font-bold text-green-500">235</h2>
                            <p>Vehicles Fleet</p>
                        </div>
                        <div className="shadow-xl rounded-lg py-12 px-20 leading-normal">
                            <h2 className="text-5xl font-bold text-green-500">15</h2>
                            <p>Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
<BoardOfDirectors />
<Contactbanner />
<Footer />
</>
  )
}

export default AboutUs