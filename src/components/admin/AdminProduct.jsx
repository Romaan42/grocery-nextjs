'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaStar } from "react-icons/fa";


export default function AdminProduct({ product }) {
    const router = useRouter()
    return (
        <div className="group relative bg-white rounded-2xl p-3 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-gray-100">
            {/* Image Container */}
            <div className="relative w-full bg-gray-50 rounded-xl overflow-hidden aspect-square flex justify-center items-center">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="w-full h-48 object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                />

                {/* Bottom Slide-up Add to Cart */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0 flex gap-5">
                    <button onClick={() => router.push(`/admin/edit-product/${product._id}`)} className="w-full bg-slate-900 text-white py-2.5 rounded-xl font-bold text-sm shadow-xl active:scale-95 transition-all cursor-pointer hover:bg-slate-800">
                        edit
                    </button>
                    <button className="w-full bg-slate-900 text-white py-2.5 rounded-xl font-bold text-sm shadow-xl active:scale-95 transition-all cursor-pointer hover:bg-slate-800">
                        delete
                    </button>
                </div>
            </div>

            {/* Content Section */}
            <div className="mt-4 px-1">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-xs font-bold text-orange-500 uppercase tracking-wider mb-1">
                            {product.category}
                        </p>
                        <h2 className="text-base font-bold text-slate-800 line-clamp-1 group-hover:text-orange-600 transition-colors">
                            {product.title}
                        </h2>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-3">
                    <div className="flex flex-col">
                        <span className="text-xl font-black text-slate-900">${product.price}</span>
                    </div>

                    <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
                        <FaStar className="text-green-600 text-[10px]" />
                        <span className="text-xs font-bold text-green-700">4.4</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
