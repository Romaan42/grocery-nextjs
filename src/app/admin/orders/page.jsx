'use client';
import { useEffect, useState } from "react";

const statusColors = {
    Pending: "bg-yellow-100 text-yellow-800",
    Shipped: "bg-blue-100 text-blue-800",
    Delivered: "bg-green-100 text-green-800",
    Cancelled: "bg-red-100 text-red-800",
};

export default function OrdersPage() {
    const [orders, setOrdersData] = useState([]);

    useEffect(() => {
        fetch("/api/orders", {
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setOrdersData(data.ordersData);
                }
            })
            .catch((err) => console.error("Error fetching orders:", err));
    }, [])
    console.log(orders)
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Admin Orders</h1>

            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="min-w-full text-sm text-left text-gray-600">
                    <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-3">Order ID</th>
                            <th className="px-6 py-3">Customer</th>
                            <th className="px-6 py-3">Date</th>
                            <th className="px-6 py-3">Total</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr
                                key={order._id}
                                className="border-b hover:bg-gray-50 transition"
                            >
                                <td className="px-6 py-4 font-medium">{order._id}</td>
                                <td className="px-6 py-4">{order.name}</td>
                                <td className="px-6 py-4">{order.createdAt}</td>
                                <td className="px-6 py-4">{order.totalPrice}</td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 space-x-2">
                                    <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600">
                                        View
                                    </button>
                                    <button className="px-3 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600">
                                        Update
                                    </button>
                                    <button className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
