import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import rst from "../images/rst1.jpg";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "../App.css";

const firebaseConfig = {
    apiKey: "AIzaSyBpIKtGFO6IRkK72_bQ4fxGAppCHpuzZDE",
    authDomain: "react-otp-app-1a6df.firebaseapp.com",
    projectId: "react-otp-app-1a6df",
    storageBucket: "react-otp-app-1a6df.appspot.com",
    messagingSenderId: "434954909594",
    appId: "1:434954909594:web:0bfa09b64e4dc2e33dac23",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const auth = firebase.auth();

const ForgotPage = (props) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otp, setOTP] = useState("");
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [otpVerified, setOtpVerified] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [resetSuccess, setResetSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSendOTP = async (e) => {
        e.preventDefault();
        try {
            const phoneNo = `+91${phoneNumber}`;
            const appVerifier = new firebase.auth.RecaptchaVerifier("reCaptcha", {
                size: "invisible",
            });
            const confirmation = await auth.signInWithPhoneNumber(
                phoneNo,
                appVerifier
            );
            setConfirmationResult(confirmation);
            alert("OTP sent to your phone number!");
        } catch (error) {
            console.error("Error sending OTP:", error);
            alert(`Error sending OTP: ${error.message}`);
        }
    };

    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        try {
            await confirmationResult.confirm(otp);
            setOtpVerified(true);
            alert("OTP verified. Proceeding to reset password!");
        } catch (error) {
            alert(`Error verifying OTP: ${error.message}`);
        }
    };

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        const requestData = {
            eventID: "1001",
            addInfo: {
                Mobile: phoneNumber,
                NewPassword: newPassword,
                ConfirmPassword: confirmPassword,
            },
        };

        try {
            const response = await fetch("http://localhost:5164/resetPassword", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData),
            });

            const data = await response.json();
            console.log(data, "API response data");

            if (response.ok && data.rData && data.rData.rCode === 0) {
                alert(data.rData.rMessage || "Password reset successfully!");
                setResetSuccess(true);
                setNewPassword([]);
                setConfirmPassword([]);
            } else {
                alert(data.rData.rMessage || "Failed to reset password!!");
                setNewPassword([]);
                setConfirmPassword([]);
            }
        } catch (error) {
            console.error("Error:", error);
            alert(`Error resetting password: ${error.message}`);
        }
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    if (resetSuccess === true) {
        return <Navigate to="/LoginScreen" />;
    }

    return (
        <div className={`bg-${props.mode}`}>
            <div className="container mx-auto py-10">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <img
                            src={rst}
                            className="rounded my-5 w-full h-auto"
                            alt="resetpic"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <h2 className="text-green-600 my-5 text-center">Reset Password</h2>
                        {!confirmationResult ? (
                            <form onSubmit={handleSendOTP} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                    <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
                                        Enter your registered phone number:
                                    </label>
                                    <input
                                        type="text"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="phoneNumber"
                                        placeholder="Enter phone number here..."
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        required
                                    />
                                    <div id="reCaptcha"></div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <Link to="/LoginScreen" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                        Back
                                    </Link>
                                    <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                        Send OTP
                                    </button>
                                </div>
                            </form>
                        ) : !otpVerified ? (
                            <form onSubmit={handleVerifyOTP} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                    <label htmlFor="otp" className="block text-gray-700 text-sm font-bold mb-2">
                                        Enter the OTP received on your phone number:
                                    </label>
                                    <input
                                        type="text"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="otp"
                                        placeholder="Enter OTP here"
                                        value={otp}
                                        onChange={(e) => setOTP(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="flex items-center justify-end">
                                    <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                        Verify OTP
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={handlePasswordReset} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                    <label htmlFor="newPassword" className="block text-gray-700 text-sm font-bold mb-2">
                                        Enter new password:
                                    </label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="newPassword"
                                        placeholder="Enter new password here"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        required
                                    />
                                    <div className="relative mt-1">
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                            onClick={togglePasswordVisibility}
                                            aria-label="Toggle Password Visibility"
                                        >
                                            <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
                                        Confirm new password:
                                    </label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="confirmPassword"
                                        placeholder="Confirm new password here"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                    <div className="relative mt-1">
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                                            onClick={togglePasswordVisibility}
                                            aria-label="Toggle Password Visibility"
                                        >
                                            <i className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end">
                                    <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                        Reset Password
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPage;
