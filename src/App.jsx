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
// import { Toaster, toast } from 'sonner';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Toaster, toast } from 'alert';
// import Swal from "sweetalert2";

function App() {
  // const notify = () => { toast("Wow so easy!"); }
  // const triggerSwal = () => {
  //   Swal.fire({
  //     title: "Custom alert!",
  //     text: "Do you want to continue",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonText: "Yes, continue",
  //     cancelButtonText: "No, cancel",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire("Saved!", "", "success");
  //     } else if (result.isDenied) {
  //       Swal.fire("Changes are not saved", "", "info");
  //     }
  //   });
  // };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <button type="button" className="bg-green-700 text-white font-bold py-2 px-4 w-1/12 rounded hover:bg-green-600 ml-4" onClick={() => toast('My first toast')}>Give me a toast</button> */}
        {/* <button type="button" className="bg-green-500" onClick={notify}>Notify!</button> */}
        {/* <button type="button" className="bg-green-500" onClick={() => toast('This is a alert toast.')}>Toast alert</button> */}
        {/* <button type="button" className="bg-red-700 text-white font-bold py-2 px-4 w-1/12 rounded hover:bg-red-600 ml-4"
          onClick={triggerSwal}
        ></button> */}
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
        {/* <Toaster /> */}
        {/* <ToastContainer /> */}
        {/* <Toaster /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
