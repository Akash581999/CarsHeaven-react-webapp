import React from 'react';
import Footer from '../components/Footer';
import MainImg from '../assets/16.jpg'

const Contact = () => {
  return (
    <>
     <div className='relative '>
    <img src={MainImg} alt="" className='h-[40vh] w-full object-cover' />
    <h1 className='absolute inset-0 flex justify-center items-center text-white text-6xl font-semibold'>Contact US</h1>
</div>
      <div className="w-full p-40">
        {/* Main Section */}
        <div className="flex flex-rows gap-4">
          
          {/* Form Section */}
          <div className="w-full lg:w-2/3 p-4 mb-4 lg:mb-0 ">
            <h3 className="text-2xl font-bold mb-4">Do you have any question?</h3>
            
            <form
              name="contactForm"
              id="contact_form"
              className="space-y-4"
              method="post"
              action="#"
            >
              <div className="flex flex-row gap-4 mb-4">
                <div className="w-full md:w-1/3 mb-4">
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    className="w-full border p-2 rounded"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 mb-4">
                  <input
                    type="text"
                    name="Email"
                    id="email"
                    className="w-full border p-2 rounded"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 mb-4">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="w-full border p-2 rounded"
                    placeholder="Your Phone"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <textarea
                  name="message"
                  id="message"
                  className="w-full border py-2 px-5 rounded"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <div
                  className="g-recaptcha"
                  data-sitekey="6LdW03QgAAAAAJko8aINFd1eJUdHlpvT4vNKakj6"
                >
                  {/* reCAPTCHA will be rendered here */}
                </div>
              </div>

              <div className="mb-4">
                <input
                  type="submit"
                  id="send_message"
                  value="Send Message"
                  className="w-40 bg-green-600 text-white p-2 rounded cursor-pointer"
                />
              </div>

              <div id="success_message" className="text-green-600">
                Your message has been sent successfully. Refresh this page if you want to send more messages.
              </div>
              <div id="error_message" className="text-red-600">
                Sorry there was an error sending your form.
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="w-full lg:w-1/3 p-4 space-y-10">
            <div className="border border-gray-200 p-12">
              <h4 className="text-xl font-bold mb-2">US Office</h4>
              <address className="space-y-2">
                <p><i className="fa fa-map-marker fa-lg"></i> 08 W 36th St, New York, NY 10001</p>
                <p><i className="fa fa-phone fa-lg"></i> +1 333 9296</p>
                <p><i className="fa fa-envelope fa-lg"></i> <a href="mailto:contact@example.com">contact@example.com</a></p>
                <p><i className="fa fa-file-pdf-o fa-lg"></i> <a href="#">Download Brochure</a></p>
              </address>
            </div>

            <div className="border border-gray-200 p-12">
              <h4 className="text-xl font-bold mb-2">AU Office</h4>
              <address className="space-y-2">
                <p><i className="fa fa-map-marker fa-lg"></i> 100 Mainstreet Center, Sydney</p>
                <p><i className="fa fa-phone fa-lg"></i> +61 333 9296</p>
                <p><i className="fa fa-envelope fa-lg"></i> <a href="mailto:contact@example.com">contact@example.com</a></p>
                <p><i className="fa fa-file-pdf-o fa-lg"></i> <a href="#">Download Brochure</a></p>
              </address>
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </>
  );
};

export default Contact;
