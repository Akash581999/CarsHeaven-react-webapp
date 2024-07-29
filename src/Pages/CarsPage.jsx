// import React from "react";
import SearchCars from "./../components/SearchCars";
import AddCars from "../components/AddCars";
import EditCars from "../components/EditCars";
import DeleteCar from "../components/DeleteCar";

const CarsPage = () => {
  return (
    <>
      <SearchCars />
      <AddCars />
      <EditCars />
      <DeleteCar />
    </>
  );
};

export default CarsPage;
