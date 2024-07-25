import { useState } from "react";
import { Link } from "react-router-dom";

const DeleteCar = () => {
    const [searchTerm, setSearchTerm] = useState({
        CarId: "",
        BrandName: "",
        CarName: "",
    });
    const [carRecords, setCarRecords] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchTerm((prevTerm) => ({
            ...prevTerm,
            [name]: value,
        }));
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        const requestData = {
            eventID: "1003",
            addInfo: {
                CarId: searchTerm.CarId,
                BrandName: searchTerm.BrandName,
                CarName: searchTerm.CarName,
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
                alert(data.rData.rMessage || "Car found successfully");
                setCarRecords([data.rData] || []);
            } else {
                alert(data.rData.rMessage || "Car not found!");
                setCarRecords([]);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to search Car.");
        }
    };

    return (
        <div className="container mx-auto">
            <form onSubmit={handleSearch} className="flex items-center justify-between border border-gray-300 p-4 rounded-md shadow-sm">
                <label htmlFor="DeleteCar" className="font-bold text-primary text-xl">
                    Search:
                </label>
                <input
                    id="DeleteCar"
                    name="CarId"
                    className="form-input rounded-md w-1/4 h-10 px-3 ml-2"
                    type="search"
                    placeholder="Car ID"
                    value={searchTerm.CarId}
                    onChange={handleInputChange}
                />
                <input
                    name="BrandName"
                    className="form-input rounded-md w-1/4 h-10 px-3 ml-2"
                    type="search"
                    placeholder="Brand Name"
                    value={searchTerm.BrandName}
                    onChange={handleInputChange}
                />
                <input
                    name="CarName"
                    className="form-input rounded-md w-1/4 h-10 px-3 ml-2"
                    type="search"
                    placeholder="Car Name"
                    value={searchTerm.CarName}
                    onChange={handleInputChange}
                />
                <button className="bg-green-500 text-white px-4 py-2 ml-2 rounded-md" type="submit">
                    Search
                </button>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {carRecords.map((carsdata, index) => (
                    <div key={index || carsdata.CarId} className="bg-white rounded-lg shadow-md p-4">
                        <a href="#">
                            <img
                                className="object-cover w-full h-64"
                                src={carsdata.CarPic || "/path/to/default/image.jpg"}
                                alt={carsdata.CarName}
                            />
                        </a>
                        <h2 className="text-xl font-bold text-gray-800">{carsdata.CarName}</h2>
                        <p className="text-sm text-gray-600">{carsdata.Description}</p>
                        <div className="mt-4 flex justify-end">
                            <Link to="/adminpanel" className="text-red-500 hover:text-red-700">
                                Delete Car
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DeleteCar;
