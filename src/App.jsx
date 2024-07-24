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
// import Footer from "./components/Footer";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  const location = useLocation();
  const hideNavPaths = ["/userprofile", "/userdashboard", "/adminpanel"]; // Ensure paths are lowercase
  console.log("Current Pathname: ", location.pathname);
  return (
    <>
      <div className="w-full min-h-screen bg-white text-black">
        {!hideNavPaths.includes(location.pathname.toLowerCase()) && <Navbar />}
        {/* Convert pathname to lowercase */}
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
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          {/* <Route path="/Footer" element={<Footer />} /> */}
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
