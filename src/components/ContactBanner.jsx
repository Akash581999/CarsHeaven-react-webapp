// import React from 'react';
import { FaPhone } from "react-icons/fa6";


const ContactBanner = () => {
  return (
    <section id="section-call-to-action" className="bg-color-2 pt-10 text-light bg-no-repeat bg-cover h-[18vw] bg-green-600 ">
      <div className="container mx-auto bg-no-repeat bg-cover m-10">
        <div className="flex flex-wrap bg-no-repeat bg-cover">
          <div className="w-full lg:w-[22vw] lg:ml-auto px-4 bg-no-repeat text-white bg-cover">
            <span className="subtitle  font-bold bg-green-700 rounded-lg p-2 ">Call us for further information</span>
            <h2 className="text-4xl font-medium mt-4 leading-snug">Rentaly customer care is here to help you anytime.</h2>
          </div>

          <div className="w-full lg:w-1/2 text-center px-4 lg:mt-0 bg-no-repeat bg-cover">
            <div className="phone-num-big text-white flex flex-col items-center justify-between">
              <i className="fa fa-phone text-4xl mb-4">< FaPhone /></i>
              <span className="text-lg mb-2 leading-relaxed">Call Us Now</span>
              <span className="text-4xl font-bold">1 200 333 800</span>
              <a href="#" className="btn-main mt-5 mb-40 bg-green-500 text-white py-2 px-4 rounded font-bold">
                Contact Us
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactBanner;
