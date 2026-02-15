import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const OrderSuccess = async ({ params }) => {
    const { id } = await params


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">

                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                    <FaCheckCircle className="text-green-500 w-20 h-20" />
                </div>

                {/* Heading */}
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Order Placed Successfully!
                </h1>

                {/* Subtext */}
                <p className="text-gray-600 mb-6">
                    Thank you for your purchase. Your order has been confirmed and will be shipped soon.
                </p>

                {/* Order Details Box */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Order ID:</span>
                        <span className="font-semibold text-gray-800">#{id}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Estimated Delivery:</span>
                        <span className="font-semibold text-gray-800">3-5 Business Days</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Payment Method:</span>
                        <span className="font-semibold text-gray-800">Credit Card</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3">
                    <Link href={'/orders'} className="bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition">
                        Track Order
                    </Link>
                    <Link href={'/'} className="border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold transition">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrderSuccess;
