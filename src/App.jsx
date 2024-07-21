// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import ProductsBanner from "./components/ProductsBanner";
import AddventureBanner from "./components/AddventureBanner";
import News from "./components/News";
import FAQ from "./components/FAQ";
import AllProducts from "./Pages/AllProducts";
import Booking from "./Pages/Booking";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import AboutUs from "./Pages/AboutUs";
import BoardOfDirectors from "./components/BoardOfDirectors";
import Contact from './Pages/ContactUs';
import Register from "../src/Pages/Register";
import NotFoundPage from "./components/NotFoundPage";
import Login from "./Pages/Login";
import ContactBanner from './components/ContactBanner';
import CarDetail from "./components/CarDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/ContactBanner" element={<ContactBanner />} />
          <Route path="/ProductsBanner" element={<ProductsBanner />} />
          <Route path="/AddventureBanner" element={<AddventureBanner />} />
          <Route path="/BoardOfDirectors" element={<BoardOfDirectors />} />
          <Route path="/CarDetail" element={<CarDetail />} />
          <Route path="/Marquee" element={<Marquee />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/News" element={<News />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
