import React, { useState, useEffect } from "react";
// import EditOrder from "./EditOrder";
// import DeleteOrder from "./DeleteOrder";

const AllOrders = (props) => {
    const [OrdersRecord, setOrdersRecord] = useState([]);
    const [editOrder, setEditOrder] = useState(false);
    const [deleteOrder, setDeleteOrder] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState("");

    useEffect(() => {
        fetchOrdersRecord();
    }, []);

    const fetchOrdersRecord = async () => {
        const requestData = {
            eventID: "1001",
            addInfo: {
                Order_Id: "",
                UserId: "",
                Title: "",
                Description: "",
                CreatedOn: "",
                OrderImageUrl: "",
                Type: "",
                NumSongs: "",
            },
        };
        try {
            const response = await fetch("http://localhost:5164/allOrders", {
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
                setOrdersRecord(data.rData.Ordersdata || []);
            }
        } catch (error) {
            console.error("Error:", error);
            alert(`Failed to fetch Orders: ${error}`);
            setOrdersRecord([]);
        }
    };

    const handleOrderEdit = (id) => {
        console.log("Edit this Order with ID:", id);
        setSelectedOrder(id);
        setEditOrder(true);
    };

    const handleOrderDelete = (Order) => {
        console.log("Delete this Order:", Order);
        setSelectedOrder(Order);
        setDeleteOrder(true);
    };

    return (
        <div className={`bg-${props.mode}`}>
            <section>
                <span className="text-3xl text-info text-left mx-3 my-3">
                    ALL Orders
                </span>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full my-3 mx-auto text-center bg-gray-800 text-white">
                        <thead>
                            <tr>
                                <th className="text-info px-4 py-2">Order Id</th>
                                <th className="text-info px-4 py-2">User Id</th>
                                <th className="text-info px-4 py-2">Title</th>
                                <th className="text-info px-4 py-2">Description</th>
                                <th className="text-info px-4 py-2">Created On</th>
                                <th className="text-info px-4 py-2">Order Image</th>
                                <th className="text-info px-4 py-2">Order Type</th>
                                <th className="text-info px-4 py-2">Num of Songs</th>
                                <th className="text-info px-4 py-2">Options</th>
                            </tr>
                        </thead>
                        <tbody className="text-white">
                            {OrdersRecord.map((Order, index) => (
                                <tr key={index}>
                                    <td className="border px-4 py-2">{Order.Order_Id}</td>
                                    <td className="border px-4 py-2">{Order.userId}</td>
                                    <td className="border px-4 py-2">{Order.title}</td>
                                    <td className="border px-4 py-2">{Order.description}</td>
                                    <td className="border px-4 py-2">{Order.createdOn}</td>
                                    <td className="border px-4 py-2">
                                        <img
                                            src={Order.OrderImageUrl}
                                            alt={Order.title}
                                            className="h-16 mx-auto"
                                            style={{ objectFit: "contain" }}
                                        />
                                    </td>
                                    <td className="border px-4 py-2">{Order.type}</td>
                                    <td className="border px-4 py-2">{Order.numSongs}</td>
                                    <td className="border px-4 py-2">
                                        <button
                                            type="button"
                                            className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-2 rounded-md mx-1"
                                            onClick={() => handleOrderEdit(Order.Order_Id)}
                                        >
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button
                                            type="button"
                                            className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md mx-1"
                                            onClick={() => handleOrderDelete(Order)}
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
            {/* {editOrder && (
                <EditOrder
                    id={selectedOrder}
                    onClose={() => setEditOrder(false)}
                />
            )}
            <DeleteOrder
                show={deleteOrder}
                onHide={() => setDeleteOrder(false)}
                id={OrdersRecord.map((Order) => Order.title)}
            /> */}
        </div>
    );
};

export default AllOrders;
