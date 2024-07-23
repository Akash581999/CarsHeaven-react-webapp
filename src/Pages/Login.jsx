import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [AdminEmail, setAdminEmail] = useState("");
  const [AdminPassword, setAdminPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleLogin = async (e, Type) => {
    e.preventDefault();

    let requestData = {};

    if (Type === "User") {
      requestData = {
        eventID: "1001",
        addInfo: {
          Role: "User",
          UserId: email,
          UserPassword: password,
        },
      };
    } else if (Type === "Admin") {
      requestData = {
        eventID: "1001",
        addInfo: {
          Role: "Admin",
          UserId: AdminEmail,
          UserPassword: AdminPassword,
        },
      };
    }

    try {
      const response = await fetch("http://localhost:5164/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, "Api response data");
      // console.log("JWT token", data.rData.rCode);

      if (response.ok && data.rData.rCode !== 0) {
        alert(data.rData.rMessage || "Login Successfully!");
        setIsLoggedIn(true);
        setShowAlert(true);
        setShowToast(true);
      } else {
        alert(data.rData.rMessage || "Invalid Credentials!");
        setIsLoggedIn(false);
        setShowAlert(false);
        setShowToast(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to log in.");
    }
  };

  if (isLoggedIn === true) {
    if (email) {
      return <Navigate to="/DashBoardScreen" />;
    } else if (AdminEmail) {
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>
            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Dont have an account?
          <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
