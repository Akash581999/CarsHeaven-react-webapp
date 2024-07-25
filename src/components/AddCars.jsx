// import React from "react";
import { useState } from "react";

const AddCars = () => {
    const [CarData, setCarData] = useState({
        BrandName: "",
        CarName: "",
        CarType: "",
        Color: "",
        Seats: "",
        RentRate: "",
        Mileage: "",
        FuelType: "",
        Transmission: "",
        Description: "",
        AvailabilityStatus: "",
        RegistrationNumber: "",
        YearOfManufacture: "",
        InsuranceDetails: "",
        LocationId: "",
    });
    const [CarPic, setCarPic] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarData({ ...CarData, [name]: value });
    };

    const handleCarPic = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setCarPic(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleAddCar = async (e) => {
        e.preventDefault();

        const requestData = {
            eventID: "1001",
            addInfo: {
                BrandName: CarData.BrandName,
                CarName: CarData.CarName,
                CarType: CarData.CarType,
                CarPic: CarPic,
                Color: CarData.Color,
                Seats: CarData.Seats,
                RentRate: CarData.RentRate,
                Mileage: CarData.Mileage,
                FuelType: CarData.FuelType,
                Transmission: CarData.Transmission,
                Description: CarData.Description,
                AvailabilityStatus: CarData.AvailabilityStatus,
                RegistrationNumber: CarData.RegistrationNumber,
                YearOfManufacture: CarData.YearOfManufacture,
                InsuranceDetails: CarData.InsuranceDetails,
                LocationId: CarData.LocationId,
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

            const data = await response.json();
            console.log(data, "API response Car data");

            if (data.rData && data.rData.rCode === 0) {
                alert(data.rData.rMessage || "Car added successfully!");
                resetForm();
            } else {
                alert(data.rData.rMessage || "Failed to add Car.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert(`Some error occurred, can't add Car now: ${error}`);
            resetForm();
        }
    };

    const resetForm = () => {
        setCarData({
            BrandName: "",
            CarName: "",
            CarType: "",
            Color: "",
            Seats: "",
            RentRate: "",
            Mileage: "",
            FuelType: "",
            Transmission: "",
            Description: "",
            AvailabilityStatus: "",
            RegistrationNumber: "",
            YearOfManufacture: "",
            InsuranceDetails: "",
            LocationId: "",
        });
        setCarPic("");
    };

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-sm">
            <section>
                <span className="text-2xl text-green-500 font-bold">Add Car</span>
                <form
                    className="form-container grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
                    onSubmit={handleAddCar}
                    autoComplete="on"
                    spellCheck="true"
                    noValidate
                >
                    {[
                        { id: "BrandName", label: "Brand Name", type: "text" },
                        { id: "CarName", label: "Car Name", type: "text" },
                        { id: "CarType", label: "Car Type", type: "text" },
                        { id: "Color", label: "Color", type: "text" },
                        { id: "Seats", label: "Seats", type: "number" },
                        { id: "RentRate", label: "Rent Rate", type: "number" },
                        { id: "Mileage", label: "Mileage", type: "number" },
                        { id: "FuelType", label: "Fuel Type", type: "text" },
                        { id: "Transmission", label: "Transmission", type: "text" },
                        { id: "AvailabilityStatus", label: "Availability Status", type: "text" },
                        { id: "RegistrationNumber", label: "Registration Number", type: "text" },
                        { id: "YearOfManufacture", label: "Year Of Manufacture", type: "number" },
                        { id: "LocationId", label: "Location Id", type: "text" },
                        { id: "InsuranceDetails", label: "Insurance Details", type: "text" },
                    ].map((field) => (
                        <div key={field.id} className="col-span-1">
                            <label htmlFor={field.id} className="block text-sm font-medium text-gray-300">
                                {field.label}
                            </label>
                            <input
                                type={field.type}
                                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500"
                                id={field.id}
                                name={field.id}
                                placeholder={`Enter ${field.label}`}
                                value={CarData[field.id]}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    ))}
                    <div className="col-span-1 md:col-span-2">
                        <label htmlFor="Description" className="block text-sm font-medium text-gray-300">
                            Description
                        </label>
                        <textarea
                            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500"
                            rows="3"
                            id="Description"
                            name="Description"
                            placeholder="Enter Description"
                            value={CarData.Description}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <label htmlFor="CarPic" className="block text-sm font-medium text-gray-300">
                            Upload Car Picture
                        </label>
                        <input
                            type="file"
                            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-green-500 focus:ring-green-500"
                            id="CarPic"
                            name="CarPic"
                            accept="image/*"
                            onChange={handleCarPic}
                            required
                        />
                    </div>
                    {CarPic && (
                        <div className="col-span-1 md:col-span-2">
                            <label htmlFor="CarPic" className="block text-sm font-medium text-gray-300">
                                Selected Picture:
                            </label>
                            <img
                                id="CarPic"
                                src={CarPic}
                                alt="Selected Car"
                                className="mt-2 w-full max-h-40 object-contain rounded-md"
                            />
                        </div>
                    )}
                    <div className="col-span-1 md:col-span-2 flex justify-end space-x-4">
                        <button
                            className="btn btn-danger bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
                            type="button"
                            onClick={resetForm}
                        >
                            <i className="fa fa-remove mr-2"></i>Cancel
                        </button>
                        <button
                            className="btn btn-success bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
                            type="submit"
                        >
                            <i className="fas fa-plus mr-2"></i>Add
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddCars;
