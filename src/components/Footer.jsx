import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaRss } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-black text-white ">
            <div className="grid grid-cols-4 gap-8 leading-8 py-10 px-80 mt-10">
                <div>
                    <h4 className="font-bold mb-5">About Rentaly</h4>
                    <p>Where quality meets affordability. We understand the importance of a smooth and enjoyable journey without the burden of excessive costs. That's why we have meticulously crafted our offerings to provide you with top-notch vehicles at minimum expense.</p>
                </div>
                <div>
                    <h4 className="font-bold mb-5">Contact Info</h4>
                    <p>08 W 36th St, New York, NY 10001</p>
                    <p>+1 333 9296</p>
                    <p>contact@example.com</p>
                    <p>Download Brochure</p>
                </div>
                <div>
                    <h4 className="font-bold mb-5">Quick Links</h4>
                    <ul>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>News</li>
                        <li>Partners</li>
                    </ul>
                </div>
                <div className="w-1/4">
          <h4 className="text-lg font-semibold">Social Network</h4>
          <div className="flex space-x-4">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaPinterestP /></a>
            <a href="#"><FaRss /></a>
          </div>
        </div>
            </div>
            <hr className='mb-5 text-gray-50 ' />
            <div className="flex justify-center space-x-[38vw] pb-5">
                <p>Copyright 2024 - Rentaly by Designesia</p>
                <div className='flex flex-row space-x-4'>
                <p>Terms & Conditions | </p>
                
                <p> Privacy Policy </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
