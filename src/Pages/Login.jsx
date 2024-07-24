// import React from "react";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import img from "../assets/1.jpg";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
// import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("User");
  // const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    let requestData = {};
    if (activeTab === "User") {
      requestData = {
        eventID: "1001",
        addInfo: {
          Role: "User",
          UserId: userEmail,
          UserPassword: userPassword,
        },
      };
    } else if (activeTab === "Admin") {
      requestData = {
        eventID: "1001",
        addInfo: {
          Role: "Admin",
          UserId: adminEmail,
          UserPassword: adminPassword,
        },
      };
    }

    try {
      const response = await fetch("http://localhost:2005/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "Api response data");
      console.log("JWT token", data.rData.rCode);

      if (response.ok && data.rData.rCode !== 0) {
        toast(data.rData.rMessage || "Login Successfully!");
        setIsLoggedIn(true);
      } else {
        toast(data.rData.rMessage || "Invalid Credentials!");
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error:", error);
      toast("An error occurred while trying to log in.");
    }
  };

  if (isLoggedIn) {
    if (userEmail) {
      return <Navigate to="/DashBoardScreen" />;
    } else if (adminEmail) {
      return <Navigate to="/AdminScreen" />;
    } else {
      return <Navigate to="/LoginScreen" />;
    }
  }

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  // const signInWithGoogle = () => {
  //   alert("Sign in with Google");
  // };

  // const signInWithFacebook = () => {
  //   alert("Sign in with Facebook");
  // };

  return (
    <>
      <div
        className="min-h-screen flex flex-col bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="flex justify-center items-center bg-opacity-10 bg-black min-h-screen w-full">
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <div className="flex justify-center mb-4">
              <button
                onClick={() => setActiveTab("User")}
                className={`px-4 py-2 ${
                  activeTab === "User"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-800"
                } rounded-l-md`}
              >
                User
              </button>
              <button
                onClick={() => setActiveTab("Admin")}
                className={`px-4 py-2 ${
                  activeTab === "Admin"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-800"
                } rounded-r-md`}
              >
                Admin
              </button>
            </div>
            <form className="space-y-6" onSubmit={handleLogin}>
              {activeTab === "User" && (
                <>
                  <div>
                    <label
                      htmlFor="userEmail"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Enter User Email
                    </label>
                    <input
                      type="email"
                      id="userEmail"
                      name="userEmail"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="userPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Enter User Password
                    </label>
                    <input
                      type="password"
                      id="userPassword"
                      name="userPassword"
                      value={userPassword}
                      onChange={(e) => setUserPassword(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </>
              )}
              {activeTab === "Admin" && (
                <>
                  <div>
                    <label
                      htmlFor="adminEmail"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Enter Admin Email
                    </label>
                    <input
                      type="email"
                      id="adminEmail"
                      name="adminEmail"
                      value={adminEmail}
                      onChange={(e) => setAdminEmail(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="admin@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="adminPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Enter Admin Password
                    </label>
                    <input
                      type="password"
                      id="adminPassword"
                      name="adminPassword"
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    name="remember-me"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    to="/forgotpage"
                    className="font-medium text-blue-500 hover:text-blue-700"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Log In
                </button>
              </div>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Dont have an account?
              <Link
                to="/Register"
                className="font-medium text-blue-500 hover:text-blue-700"
              >
                &nbsp; Register Now
              </Link>
            </p>
            {/* <button onClick={signInWithGoogle}
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          ><FaGoogle />
            Login with Google
          </button>
          <button onClick={signInWithFacebook}
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          ><FaFacebookF />
            Login with Faceboook
          </button> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
