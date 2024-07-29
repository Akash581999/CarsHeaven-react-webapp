// import React from "react";
import { useEffect, useState } from "react";

const AllCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const requestData = {
      eventID: "1005",
      addInfo: {
        CarId: "",
        BrandName: "",
        CarName: "",
        CarType: "",
      },
    };
    try {
      const response = await fetch("http://localhost:2005/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data, "API response data");

      if (data.rData && data.rData.rCode === 0) {
        console.log(data.rData.carss, "cars data"); // Ensure data structure is correct
        setCars(data.rData.carss || []);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Failed to fetch cars: ${error}`);
      setCars([]);
    }
  };

  const handleAddCarToWishlist = (id) => {
    console.log("Add this Car to wishlist ID:", id);
    alert("Add this Car to wishlist ID:", id);
    // setSelectedCar(id);
    // setEditCar(true);
  };

  const handleCarRent = (Car) => {
    console.log("Rent this Car:", Car);
    alert("Rent this Car:", Car);
    // setSelectedCar(Car);
    // setDeleteCar(true);
  };

  return (
    <div className="bg-white my-3 p-3">
      <section>
        <span className="text-3xl text-blue-600 text-left mx-3 my-3">
          ALL Cars
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cars.map((Car, index) => (
            <div
              key={index}
              className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
            >
              <a href="#">
                <img
                  className="object-cover w-full h-64"
                  src={Car.carPic || "/path/to/default/image.jpg"}
                  alt={Car.carName}
                />
              </a>
              <div className="px-5 py-4">
                <a href="#">
                  <h5 className="text-xl font-semibold text-gray-900 mb-2">
                    {Car.carName}
                  </h5>
                </a>
                <div className="mb-2 text-gray-600">
                  <p>Brand: {Car.brandName}</p>
                  <p>Type: {Car.carType}</p>
                  <p>Color: {Car.color}</p>
                  <p>Seats: {Car.seats}</p>
                  <p>Rent Rate: Rs{Car.rentRate}</p>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded-md mx-1"
                    onClick={() => handleAddCarToWishlist(Car.carId)}
                  >
                    {/* <i className="fas fa-edit"></i> */}Add To Wishlist
                  </button>
                  <button
                    type="button"
                    className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded-md mx-1"
                    onClick={() => handleCarRent(Car)}
                  >
                    {/* <i className="fas fa-trash"></i> */}Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllCars;
