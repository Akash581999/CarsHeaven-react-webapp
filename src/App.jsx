//  import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import ProductsBanner from "./components/ProductsBanner";
import AddventureBanner from "./components/AddventureBanner";
import News from "./components/News";
import FAQ from "./components/FAQ";
import Contactbanner from "./components/ContactBanner";
import AllProducts from "./Pages/AllProducts";
import Booking from "./Pages/Booking";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/ProductsBanner" element={<ProductsBanner />} />
          <Route path="/AddventureBanner" element={<AddventureBanner />} />
          <Route path="/News" element={<News />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Contactbanner" element={<Contactbanner />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Marquee" element={<Marquee />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
