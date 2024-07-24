// import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import MainImg from "../assets/16.jpg";
import Footer from "../components/Footer";
import { toast } from "react-toastify";

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const requestData = {
      eventID: "1001",
      addInfo: {
        Role: "User",
        UserName: formData.userName,
        Email: formData.email,
        Phone: formData.phone,
        Address: formData.address,
        UserPassword: formData.password,
      },
    };

    try {
      const response = await fetch("http://localhost:2005/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "Api response data");

      if (response.ok && data.rData.rCode === 0) {
        setIsRegistered(true);
        toast(data.rData.rMessage || "Account created successfully!");
      } else {
        toast(data.rData.rMessage || "Account already exists!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast("An error occurred while trying to register.");
    }
  };

  if (isRegistered) {
    return <Navigate to="/Login" />;
  }

  return (
    <>
      <div
        className="min-h-screen flex flex-col bg-cover bg-center"
        style={{ backgroundImage: `url(${MainImg})` }}
      >
        <div className="flex justify-center items-center bg-opacity-0 bg-black min-h-screen w-full">
          <div className="max-w-2xl bg-white p-8 rounded-lg shadow-lg m-24">
            <h3 className="text-2xl font-bold mb-4">
              Dont have an account? Register now.
            </h3>
            <p className="mb-6">
              Welcome to CarsHeaven. We are excited to have you on board. By
              creating an account with us, you will gain access to a range of
              benefits and convenient features that will enhance your car rental
              experience.
            </p>

            <form
              onSubmit={handleRegister}
              name="registerForm"
              id="register_form"
              className="h-full"
              method="post"
            >
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div className="field-set">
                  <label
                    htmlFor="userName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    User Name:
                  </label>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                    required
                  />
                </div>

                <div className="field-set">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email Address:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                    required
                  />
                </div>

                <div className="field-set">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number:
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                    required
                  />
                </div>

                <div className="field-set">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Address:
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                    required
                  />
                </div>

                <div className="field-set">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Create Password:
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border border-gray-300 p-2 rounded"
                    required
                  />
                </div>

                <div className="field-set">
                  <label
                    htmlFor="re-password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password:
                  </label>
                  <input
                    type="password"
                    name="re-password"
                    id="re-password"
                    className="w-full border border-gray-300 p-2 rounded"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  id="send_message"
                  value="Register Now"
                  className="w-[8vw] mt-4 bg-green-600 text-white py-2 rounded cursor-pointer hover:bg-green-700"
                >
                  Register
                </button>
              </div>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?
              <Link
                to="/Login"
                className="font-medium text-blue-500 hover:text-blue-700"
              >
                &nbsp; Login Now
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
