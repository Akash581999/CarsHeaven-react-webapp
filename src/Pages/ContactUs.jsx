import { useState } from 'react';
import Footer from '../components/Footer';
import MainImg from '../assets/16.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFeedback = async (e) => {
    e.preventDefault();

    const requestData = {
      eventID: "1001",
      addInfo: {
        UserName: formData.userName,
        Email: formData.email,
        Phone: formData.phone,
        Topic: formData.topic,
        Message: formData.message,
        Address: formData.address,
      },
    };

    try {
      const response = await fetch("http://localhost:2005/feedbacks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "API response data");

      if (response.ok && data.rData && data.rData.rCode === 0) {
        alert(data.rData.rMessage || "Thank you for your response!");
        resetForm();
      } else {
        alert(data.rData.rMessage || "User data not found, kindly register first!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit feedback.");
    }
  };

  const resetForm = () => {
    setFormData({
      userName: "",
      email: "",
      phone: "",
      topic: "",
      message: "",
      address: "",
    });
  };

  return (
    <>
      <div className="relative">
        <img src={MainImg} alt="Main" className="h-[40vh] w-full object-cover" />
        <h1 className="absolute inset-0 flex justify-center items-center text-white text-6xl font-semibold">Contact Us</h1>
      </div>
      <div className="w-full p-40">
        <div className="flex flex-row gap-4">
          <div className="w-full lg:w-2/3 p-4 mb-4 lg:mb-0">
            <h3 className="text-2xl font-bold mb-4">Do you have any questions?</h3>
            <form onSubmit={handleFeedback} className="space-y-4">
              <div className="flex flex-row gap-4 mb-4">
                <div className="w-full md:w-1/3 mb-4">
                  <input
                    type="text"
                    name="userName"
                    className="w-full border p-2 rounded"
                    placeholder="Your Name"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 mb-4">
                  <input
                    type="email"
                    name="email"
                    className="w-full border p-2 rounded"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 mb-4">
                  <input
                    type="tel"
                    name="phone"
                    className="w-full border p-2 rounded"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  name="topic"
                  className="w-full border p-2 rounded"
                  placeholder="Your Topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  name="address"
                  className="w-full border p-2 rounded"
                  placeholder="Your Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="message"
                  className="w-full border py-2 px-5 rounded"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="mb-4">
                <button
                  type="submit"
                  className="w-40 bg-green-600 text-white p-2 rounded cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-1/3 p-4 space-y-10 mt-10">
            <div className="border border-gray-200 p-12">
              <h4 className="text-xl font-bold mb-2">IN Office</h4>
              <address className="space-y-2">
                <p>
                  <i className="fa fa-map-marker fa-lg"></i> SourceDotCom Pvt Ltd,
                  Plot No. 16, Electronic City, Phase IV, Udyog Vihar, Sector 18,
                  Gurugram, Haryana 122001
                </p>
                <p>
                  <i className="fa fa-phone fa-lg"></i> +91 9634708314
                </p>
                <p>
                  <i className="fa fa-envelope fa-lg"></i>{" "}
                  <a href="mailto:contact@example.com">akash581999@gmail.com</a>
                </p>
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
