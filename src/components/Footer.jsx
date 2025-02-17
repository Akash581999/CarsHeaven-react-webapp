// import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaRss } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="bg-black text-white w-full px-6 md:px-16 lg:px-32 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 leading-8 py-10 px-8">
                    <div>
                        <h4 className="font-bold mb-5">About CarsHeaven</h4>
                        <p>Where quality meets affordability. We understand the importance of a smooth and enjoyable journey without the burden of excessive costs. Thats why we have meticulously crafted our offerings to provide you with top-notch vehicles at minimum expense.</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-5">Contact Info</h4>
                        <p>SourceDotCom Pvt Ltd, Sector 22, Gurgaon, Haryana, India</p>
                        <p>+91 9634708314</p>
                        <p>akash581999@gmail.com</p>
                        <p>Download Mobile App</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-5">Quick Links</h4>
                        <ul>
                            <li>About</li>
                            {/* <li>Blog</li> */}
                            {/* <li>Careers</li> */}
                            <li>News</li>
                            <li>Partners</li>
                        </ul>
                    </div>
                    <div className="w-full space-y-8">
                        <h4 className="text-lg font-semibold">Social Network</h4>
                        <div className="flex space-x-6">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedinIn /></a>
                            <a href="#"><FaPinterestP /></a>
                            <a href="#"><FaRss /></a>
                        </div>
                    </div>
                </div>
                <hr className='mb-5 text-gray-50' />
                <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 pb-5">
                    <p>Copyright 2024 - CarsHeaven</p>
                    <div className='flex flex-row space-x-4'>
                        <p>Terms & Conditions |</p>
                        <p>Privacy Policy </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
