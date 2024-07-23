import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import MainImg from '../assets/16.jpg'
import Footer from '../components/Footer';
// import PrivacyPolicy from "./PrivacyPolicy";

const Register = () => {
    const [modalShow, setModalShow] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isRegitered, setIsRegitered] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        rememberMe: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;
        setFormData({ ...formData, [name]: val });
    };
    // const togglePasswordVisibility = () => {
    //     setShowPassword(!showPassword);
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const requestData = {
            eventID: "1001",
            addInfo: {
                Role: "User",
                FirstName: formData.firstName,
                LastName: formData.lastName,
                Email: formData.email,
                Mobile: formData.phoneNumber,
                UserPassword: formData.password,
            },
        };

        try {
            const response = await fetch("http://localhost:5164/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            const data = await response.json();
            console.log(data, "Api response data");

            if (response.ok && data.rData.rCode === 0) {
                setIsRegitered(true);
                alert(data.rData.rMessage || "Account created successfully!");
            } else {
                alert(
                    data.rData.rMessage || "Email or mobile number already registered!"
                );
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while trying to register.");
        }
    };
    if (isRegitered) {
        return <Navigate to="/LoginScreen" />;
    }

    return (
        <>
            <div className='relative'>
                <img src={MainImg} alt="" className='h-[40vh] w-full object-cover' />
                <h1 className='absolute inset-0 flex justify-center items-center text-white text-6xl font-semibold'>Create Your Free Account</h1>
            </div>
            <section aria-label="section" className="px-20 py-10">
                <div className="container mx-auto px-4 w-[50%] flex justify-center items-center">
                    <div className="mx-auto bg-white p-8">
                        <h3 className="text-2xl font-bold mb-4">Dont have an account? Register now.</h3>
                        <p className="mb-6">Welcome to CarsHeaven. We are excited to have you on board. By creating an account with us, you will gain access to a range of benefits and convenient features that will enhance your car rental experience.</p>

                        <form
                            name="registerForm"
                            id="register_form"
                            className="space-y-4"
                            method="post"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                                <div className="field-set">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="w-full border border-gray-300 p-2 rounded"
                                    />
                                </div>

                                <div className="field-set">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="w-full border border-gray-300 p-2 rounded"
                                    />
                                </div>

                                <div className="field-set">
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Choose a Username:</label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="w-full border border-gray-300 p-2 rounded"
                                    />
                                </div>

                                <div className="field-set">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone:</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        className="w-full border border-gray-300 p-2 rounded"
                                    />
                                </div>

                                <div className="field-set">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="w-full border border-gray-300 p-2 rounded"
                                    />
                                </div>

                                <div className="field-set">
                                    <label htmlFor="re-password" className="block text-sm font-medium text-gray-700">Re-enter Password:</label>
                                    <input
                                        type="password"
                                        name="re-password"
                                        id="re-password"
                                        className="w-full border border-gray-300 p-2 rounded"
                                    />
                                </div>
                            </div>

                            <div className="mt-4 flex justify-end">
                                <input
                                    type="submit"
                                    id="send_message"
                                    value="Register Now"
                                    className=" w-[10vw] bg-green-600 text-white py-2 rounded cursor-pointer hover:bg-green-700"
                                />
                            </div>

                            {/* <div id="mail_success" className="text-green-600 mt-4">
                            Your message has been sent successfully.
                        </div>
                        <div id="mail_fail" className="text-red-600 mt-4">
                            Sorry, error occurred this time sending your message.
                        </div> */}
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Register;
