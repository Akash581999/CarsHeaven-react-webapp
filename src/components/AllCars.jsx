import React, { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import EditCar from "./EditCar";
import DeleteCar from "./DeleteCar";

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
                <span className="fs-3 text-info text-start mx-3 my-3">
                    ALL CarS
                </span>
                <div className="table-responsive">
                    <Table
                        striped
                        bordered
                        hover
                        variant="dark"
                        className="my-3 mx-auto text-center table-responsive-sm"
                    >
                        <thead>
                            <tr>
                                <th className="text-info">Car Id</th>
                                <th className="text-info">User Id</th>
                                <th className="text-info">Title</th>
                                <th className="text-info">Description</th>
                                <th className="text-info">Created On</th>
                                <th className="text-info">Car Image</th>
                                <th className="text-info">Car Type</th>
                                <th className="text-info">Num of Songs</th>
                                <th className="text-info">Options</th>
                            </tr>
                        </thead>
                        <tbody className="text-light">
                            {CarsRecord.map((Car, index) => (
                                <tr key={index}>
                                    <td>{Car.Car_Id}</td>
                                    <td>{Car.userId}</td>
                                    <td>{Car.title}</td>
                                    <td>{Car.description}</td>
                                    <td>{Car.createdOn}</td>
                                    <td>
                                        <img
                                            src={Car.CarImageUrl}
                                            alt={Car.title}
                                            className="img-fluid"
                                            style={{ height: "5vh", objectFit: "contain" }}
                                        />
                                    </td>
                                    <td>{Car.type}</td>
                                    <td>{Car.numSongs}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-warning mx-1"
                                            onClick={() => handleCarEdit(Car.Car_Id)}
                                        >
                                            <i className="fas fa-edit">&nbsp;</i>
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger mx-1"
                                            onClick={() => handleCarDelete(Car)}
                                        >
                                            <i className="fas fa-trash">&nbsp;</i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </section>
            {editCar && (
                <EditCar
                    id={selectedCar}
                    onClose={() => setEditCar(false)}
                />
            )}
            <DeleteCar
                show={deleteCar}
                onHide={() => setDeleteCar(false)}
                id={CarsRecord.map((Car) => Car.title)}
            />
        </div>
    );
};

export default AllCars;