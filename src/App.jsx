// import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import AllProducts from "./Pages/AllProducts";
import Booking from "./Pages/Booking";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/ContactUs";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPage from "./Pages/ForgotPage";
import UserProfile from "./Pages/UserProfile";
import UserDashboard from "./Pages/UserDashboard";
import AdminPanel from "./Pages/AdminPanel";
import NotFoundPage from "./Pages/NotFoundPage";
import ChangePassword from "./components/ChangePassword";
import EditProfile from "./components/EditProfile";

function App() {
  const location = useLocation();
  const hideNavPaths = [
    "/userprofile",
    "/userdashboard",
    "/adminpanel",
    "/changepassword",
    "/editprofile",
  ]; // Ensure paths are lowercase
  console.log("Current Pathname: ", location.pathname);
  return (
    <>
      <div className="w-full min-h-screen bg-white text-black">
        {!hideNavPaths.includes(location.pathname.toLowerCase()) && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/forgotpage" element={<ForgotPage />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/AdminPanel" element={<AdminPanel />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
