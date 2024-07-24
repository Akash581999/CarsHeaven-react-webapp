import React, { useState, useEffect } from "react";
// import EditCar from "./EditCar";
// import DeleteCar from "./DeleteCar";

const AllCars = (props) => {
    const [CarsRecord, setCarsRecord] = useState([]);
    const [editCar, setEditCar] = useState(false);
    const [deleteCar, setDeleteCar] = useState(false);
    const [selectedCar, setSelectedCar] = useState("");

    useEffect(() => {
        fetchCarsRecord();
    }, []);

    const fetchCarsRecord = async () => {
        const requestData = {
            eventID: "1001",
            addInfo: {
                Car_Id: "",
                UserId: "",
                Title: "",
                Description: "",
                CreatedOn: "",
                CarImageUrl: "",
                Type: "",
                NumSongs: "",
            },
        };
        try {
            const response = await fetch("http://localhost:5164/allCars", {
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
                setCarsRecord(data.rData.Carsdata || []);
            }
        } catch (error) {
            console.error("Error:", error);
            alert(`Failed to fetch Cars: ${error}`);
            setCarsRecord([]);
        }
    };

    const handleCarEdit = (id) => {
        console.log("Edit this Car with ID:", id);
        setSelectedCar(id);
        setEditCar(true);
    };

    const handleCarDelete = (Car) => {
        console.log("Delete this Car:", Car);
        setSelectedCar(Car);
        setDeleteCar(true);
    };

    return (
        <div className={`bg-${props.mode}`}>
            <section>
                <span className="text-3xl text-info text-left mx-3 my-3">
                    ALL Cars
                </span>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full my-3 mx-auto text-center bg-gray-800 text-white">
                        <thead>
                            <tr>
                                <th className="text-info px-4 py-2">Car Id</th>
                                <th className="text-info px-4 py-2">User Id</th>
                                <th className="text-info px-4 py-2">Title</th>
                                <th className="text-info px-4 py-2">Description</th>
                                <th className="text-info px-4 py-2">Created On</th>
                                <th className="text-info px-4 py-2">Car Image</th>
                                <th className="text-info px-4 py-2">Car Type</th>
                                <th className="text-info px-4 py-2">Num of Songs</th>
                                <th className="text-info px-4 py-2">Options</th>
                            </tr>
                        </thead>
                        <tbody className="text-white">
                            {CarsRecord.map((Car, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{Car.Car_Id}</td>
                                    <td className="border px-4 py-2">{Car.userId}</td>
                                    <td className="border px-4 py-2">{Car.title}</td>
                                    <td className="border px-4 py-2">{Car.description}</td>
                                    <td className="border px-4 py-2">{Car.createdOn}</td>
                                    <td className="border px-4 py-2">
                                        <img
                                            src={Car.CarImageUrl}
                                            alt={Car.title}
                                            className="h-16 mx-auto"
                                            style={{ objectFit: "contain" }}
                                        />
                                    </td>
                                    <td className="border px-4 py-2">{Car.type}</td>
                                    <td className="border px-4 py-2">{Car.numSongs}</td>
                                    <td className="border px-4 py-2">
                                        <button
                                            type="button"
                                            className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded-md mx-1"
                                            onClick={() => handleCarEdit(Car.Car_Id)}
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md mx-1"
                                            onClick={() => handleCarDelete(Car)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            {/* {editCar && (
                <EditCar
                    id={selectedCar}
                    onClose={() => setEditCar(false)}
                />
            )}
            <DeleteCar
                show={deleteCar}
                onHide={() => setDeleteCar(false)}
                id={CarsRecord.map((Car) => Car.title)}
            /> */}
        </div>
    );
};

export default AllCars;
