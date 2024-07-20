// import React from 'react';
import MainImg from '../assets/16.jpg'
import Footer from './../components/Footer';
import Marquee from '../components/Marquee';

const BookingForm = () => {

    const data = [
        {
            id: 1,
            heading: "Choose a vehicle",
            description: "Unlock unparalleled adventures and memorable journeys with our vast fleet of vehicles tailored to suit every need, taste, and destination.",
        },
        {
            id: 2,
            heading: "Pick location & date",
            description: "Pick your ideal location and date, and let us take you on a journey filled with convenience, flexibility, and unforgettable experiences.",

        },
        {
            id: 3,
            heading: "Make a booking",
            description: "Secure your reservation with ease, unlocking a world of possibilities and embarking on your next adventure with confidence.",

        },
        {
            id: 4,
            heading: "Sit back & relax",
            description: "Hassle-free convenience as we take care of every detail, allowing you to unwind and embrace a journey filled with comfort.",

        }
    ];

    return (
        <>
            <div className='bg-black'>
                <div className='relative '>
                    <img src={MainImg} alt="" className='h-[40vh] w-full object-cover' />
                    <h1 className='absolute inset-0 flex justify-center items-center text-white text-6xl font-semibold'>Quick Booking</h1>
                </div>
                <div className='relative bottom-48 p-10 '>
                    <div className=" m-32 rounded-5 shadow  border rounded-xl bg-white" data-bgcolor="#ffffff">
                        <form name="contactForm" id="booking_form" className="form-s2 grid grid-cols-1 gap-4 md:grid-cols-2 m-10 bg-white" method="post" action="#">
                            <div className="p-3">
                                <h4 className="text-lg font-semibold mb-4">Booking a Car</h4>
                                <select name="Vehicle Type" id="vehicle_type" className="form-control select2-hidden-accessible w-full border-2 p-5 font-bold rounded-xl">
                                    <option value="Jeep Renegade" data-src="images/cars-alt/jeep-renegade.png">Jeep Renegade - $265</option>
                                    <option value="BMW M5" data-src="images/cars-alt/bmw-m5.png">BMW M5 - $544</option>
                                    <option value="Ferrari Enzo" data-src="images/cars-alt/ferrari-enzo.png">Ferrari Enzo - $167</option>
                                    <option value="Ford Raptor" data-src="images/cars-alt/ford-raptor.png">Ford Raptor - $147</option>
                                    <option value="Mini Cooper" data-src="images/cars-alt/mini-cooper.png">Mini Cooper - $238</option>
                                    <option value="Cheverolet Camaro" data-src="images/cars-alt/vw-polo.png">Cheverolet Camaro - $245</option>
                                    <option value="Hyundai Staria" data-src="images/cars-alt/hyundai-staria.png">Hyundai Staria - $191</option>
                                    <option value="Toyota Rav 4" data-src="images/cars-alt/toyota-rav.png">Toyota Rav 4 - $114</option>
                                    <option value="Bentley" data-src="images/cars-alt/bentley.png">Bentley - $299</option>
                                    <option value="Lexus" data-src="images/cars-alt/lexus.png">Lexus - $131</option>
                                    <option value="Range Rover" data-src="images/cars-alt/range-rover.png">Range Rover - $228</option>
                                </select>

                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4">
                                    <div className="border-2  p-3">
                                        <h5 className="text-md font-semibold">Pick Up Location</h5>
                                        <select name="Pick Up Location" id="pick_up_location" className="form-control w-full" required>
                                            <option value="New York" disabled>Enter your pickup location</option>
                                            <option value="New York">New York</option>
                                            <option value="Pennsylvania">Pennsylvania</option>
                                            <option value="New Jersey">New Jersey</option>
                                            <option value="Connecticut">Connecticut</option>
                                            <option value="Massachusetts">Massachusetts</option>
                                            <option value="Vermont">Vermont</option>
                                            <option value="Rhode Island">Rhode Island</option>
                                            <option value="New Hampshire">New Hampshire</option>
                                        </select>
                                    </div>
                                    <div className="border-2 border-gray-300 rounded-xl p-3">
                                        <h5 className="text-md font-semibold">Destination</h5>
                                        <select name="Destination" id="destination" className="form-control w-full" required>
                                            <option value="New York">Enter your destination</option>
                                            <option value="New York">New York</option>
                                            <option value="Pennsylvania">Pennsylvania</option>
                                            <option value="New Jersey">New Jersey</option>
                                            <option value="Connecticut">Connecticut</option>
                                            <option value="Massachusetts">Massachusetts</option>
                                            <option value="Vermont">Vermont</option>
                                            <option value="Rhode Island">Rhode Island</option>
                                            <option value="New Hampshire">New Hampshire</option>
                                        </select>
                                    </div>
                                    <div className=" p-4">
                                        <h5 className="text-md font-semibold">Pick Up Date &amp; Time</h5>
                                        <div className="date-time-field w-full flex justify-center">
                                            <input type="text" id="date-picker" name="Pick Up Date" className="w-full mb-3 p-3" />
                                            <select name="Pick Up Time" id="pickup-time" className="form-control w-full">
                                                <option value="00:00">00:00</option>
                                                <option value="00:30">00:30</option>
                                                <option value="01:00">01:00</option>
                                                <option value="01:30">01:30</option>
                                                <option value="02:00">02:00</option>
                                                <option value="02:30">02:30</option>
                                                <option value="03:00">03:00</option>
                                                <option value="03:30">03:30</option>
                                                <option value="04:00">04:00</option>
                                                <option value="04:30">04:30</option>
                                                <option value="05:00">05:00</option>
                                                <option value="05:30">05:30</option>
                                                <option value="06:00">06:00</option>
                                                <option value="06:30">06:30</option>
                                                <option value="07:00">07:00</option>
                                                <option value="07:30">07:30</option>
                                                <option value="08:00">08:00</option>
                                                <option value="08:30">08:30</option>
                                                <option value="09:00">09:00</option>
                                                <option value="09:30">09:30</option>
                                                <option value="10:00">10:00</option>
                                                <option value="10:30">10:30</option>
                                                <option value="11:00">11:00</option>
                                                <option value="11:30">11:30</option>
                                                <option value="12:00">12:00</option>
                                                <option value="12:30">12:30</option>
                                                <option value="13:00">13:00</option>
                                                <option value="13:30">13:30</option>
                                                <option value="14:00">14:00</option>
                                                <option value="14:30">14:30</option>
                                                <option value="15:00">15:00</option>
                                                <option value="15:30">15:30</option>
                                                <option value="16:00">16:00</option>
                                                <option value="16:30">16:30</option>
                                                <option value="17:00">17:00</option>
                                                <option value="17:30">17:30</option>
                                                <option value="18:00">18:00</option>
                                                <option value="18:30">18:30</option>
                                                <option value="19:00">19:00</option>
                                                <option value="19:30">19:30</option>
                                                <option value="20:00">20:00</option>
                                                <option value="20:30">20:30</option>
                                                <option value="21:00">21:00</option>
                                                <option value="21:30">21:30</option>
                                                <option value="22:00">22:00</option>
                                                <option value="22:30">22:30</option>
                                                <option value="23:00">23:00</option>
                                                <option value="23:30">23:30</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="rounded-xl p-3">
                                        <h5 className="text-md font-semibold">Return Date &amp; Time</h5>
                                        <div className="date-time-field w-full flex">
                                            <input type="text" id="date-picker-2" name="Return Date" className="w-full mb-3 p-3" />
                                            <select name="Return Time" id="collection-time" className="form-control w-full">
                                                <option value="00:00">00:00</option>
                                                <option value="00:30">00:30</option>
                                                <option value="01:00">01:00</option>
                                                <option value="01:30">01:30</option>
                                                <option value="02:00">02:00</option>
                                                <option value="02:30">02:30</option>
                                                <option value="03:00">03:00</option>
                                                <option value="03:30">03:30</option>
                                                <option value="04:00">04:00</option>
                                                <option value="04:30">04:30</option>
                                                <option value="05:00">05:00</option>
                                                <option value="05:30">05:30</option>
                                                <option value="06:00">06:00</option>
                                                <option value="06:30">06:30</option>
                                                <option value="07:00">07:00</option>
                                                <option value="07:30">07:30</option>
                                                <option value="08:00">08:00</option>
                                                <option value="08:30">08:30</option>
                                                <option value="09:00">09:00</option>
                                                <option value="09:30">09:30</option>
                                                <option value="10:00">10:00</option>
                                                <option value="10:30">10:30</option>
                                                <option value="11:00">11:00</option>
                                                <option value="11:30">11:30</option>
                                                <option value="12:00">12:00</option>
                                                <option value="12:30">12:30</option>
                                                <option value="13:00">13:00</option>
                                                <option value="13:30">13:30</option>
                                                <option value="14:00">14:00</option>
                                                <option value="14:30">14:30</option>
                                                <option value="15:00">15:00</option>
                                                <option value="15:30">15:30</option>
                                                <option value="16:00">16:00</option>
                                                <option value="16:30">16:30</option>
                                                <option value="17:00">17:00</option>
                                                <option value="17:30">17:30</option>
                                                <option value="18:00">18:00</option>
                                                <option value="18:30">18:30</option>
                                                <option value="19:00">19:00</option>
                                                <option value="19:30">19:30</option>
                                                <option value="20:00">20:00</option>
                                                <option value="20:30">20:30</option>
                                                <option value="21:00">21:00</option>
                                                <option value="21:30">21:30</option>
                                                <option value="22:00">22:00</option>
                                                <option value="22:30">22:30</option>
                                                <option value="23:00">23:00</option>
                                                <option value="23:30">23:30</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-20">
                                <h4 className="text-lg font-semibold mb-4">Enter Your Details</h4>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="border-2 border-gray-300 rounded-xl p-3">
                                        <input type="text" name="name" id="name" className="form-control w-full" placeholder="Your Name" required />
                                    </div>
                                    <div className="border-2 border-gray-300 rounded-xl p-3">
                                        <input type="email" name="email" id="email" className="form-control w-full" placeholder="Your Email" required />
                                    </div>
                                    <div className="border-2 border-gray-300 rounded-xl p-3">
                                        <input type="text" name="phone" id="phone" className="form-control w-full" placeholder="Your Phone" required />
                                    </div>
                                    <div className="border-2 border-gray-300 rounded-xl p-3">
                                        <textarea name="message" id="message" className="form-control w-full" placeholder="Do you have any request?"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[10vw] flex justify-strat  items-center '>
                                <div className=" rounded-lg bg-green-500 p-2 col-span-2 w-96 text-center text-white font-semibold" >
                                    <button type="submit" id="send_message" value="Submit" className="btn-main btn-fullwidth  " > Submit </button>
                                </div>

                            </div>


                        </form >
                        <div id="error_message" className="error hidden border-2">Sorry there was an error sending your form.</div>
                    </div>
                    <div className='w-[72vw] h-[30vh] grid grid-cols-4 gap-10 p-8 ml-20 bg-black'>
                        {data.map((item, index) => (
                            <div key={index} className='flex flex-col items-left w-[13vw] justify-between text-white'>
                                <span className='w-14 h-14 bg-green-500 flex justify-center items-center rounded-full'>
                                    {item.id}
                                </span>
                                <h1 className='text-left font-bold'>{item.heading}</h1>
                                <p className='text-left'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Marquee />
            <Footer />
        </>
    );
};

export default BookingForm;
