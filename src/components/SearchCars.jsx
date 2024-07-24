import React, { useState, useEffect } from "react";

const SearchCars = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.example.com/cars?q=${encodeURIComponent(searchTerm)}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCars(data.results); // Assuming the API returns an array of car objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (searchTerm !== "") {
      fetchData();
    } else {
      setCars([]); // Clear cars if search term is empty
    }
  }, [searchTerm]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const requestData = {
      eventID: "1015",
      addInfo: {
        Car_Id: CarData.Car_Id,
        Title: CarData.title,
        Description: CarData.description,
      },
    };

    try {
      const response = await fetch("http://localhost:5164/Cars/id", {
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
        alert(data.rData.rMessage || "Car found successfully");
        setCarsRecord([data.rData]);
      } else {
        alert(data.rData.rMessage || "Car not found!");
        setCarsRecord([]);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to search Car.");
    }
  };

  return (
    <div className="container mx-auto">
      <form className="flex items-center justify-between border border-gray-300 p-4 rounded-md shadow-sm">
        <label htmlFor="SearchCars" className="font-bold text-primary text-xl">
          Search:
        </label>
        <input
          id="SearchCars"
          className="form-input rounded-md w-[100vw] h-10 px-3 ml-2"
          type="search"
          placeholder="Search cars..."
          onChange={handleSearch}
        />
        <button className="bg-green-500 text-white px-4 py-2 ml-2 rounded-md" type="submit">
          <i className="fas fa-search">Search</i>
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {cars.map((car) => (
          <div key={car.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold text-gray-800">{car.name}</h2>
            <p className="text-sm text-gray-600">{car.description}</p>
            <div className="mt-4 flex justify-end">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchCars;
