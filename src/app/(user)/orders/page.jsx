import { cookies } from "next/headers";
import React from "react";

// const ordersData = [
//     {
//         id: "#10234",
//         date: "Feb 12, 2026",
//         status: "Delivered",
//         total: "PKR 3,250",
//         items: ["Apples", "Milk", "Bread"],
//     },
//     {
//         id: "#10235",
//         date: "Feb 13, 2026",
//         status: "Processing",
//         total: "PKR 1,850",
//         items: ["Bananas", "Eggs"],
//     },
// ];

export default async function OrdersPage() {
    const cookieStore = await cookies()

    const res = await fetch('https://grocery-pak.vercel.app/api/orders', {
        cache: 'no-store',
        headers: {
            cookie: cookieStore.toString()
        }
    })
    const { ordersData } = await res.json()
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">My Orders</h1>

            {ordersData.length === 0 ? (
                <div className="text-center bg-gray-50 p-6 rounded-lg shadow">
                    <p className="text-gray-600 mb-4">You haven’t placed any orders yet.</p>
                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                        Start Shopping
                    </button>
                </div>
            ) : (
                <div className="space-y-4">
                    {ordersData.map((order) => (
                        <div
                            key={order._id}
                            className="border rounded-lg shadow-sm bg-white p-4"
                        >
                            {/* Header */}
                            <div className="flex justify-between font-semibold mb-2">
                                <span>{order._id}</span>
                                <span className="text-gray-500">{order.date}</span>
                            </div>

                            {/* Body */}
                            <div className="space-y-1 text-gray-700">
                                <p>
                                    <strong>Status:</strong>{" "}
                                    <span
                                        className={`font-bold ${order.status === "Delivered"
                                            ? "text-green-600"
                                            : order.status === "Processing"
                                                ? "text-orange-500"
                                                : "text-red-600"
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </p>
                                <p>
                                    <strong>Total:</strong> {order.totalPrice}
                                </p>
                                <p>
                                    <strong>Items:</strong> {order.items.map((item) => item.title).join(", ")}
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2 mt-4">
                                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                                    View Details
                                </button>
                                <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300">
                                    Track Order
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
