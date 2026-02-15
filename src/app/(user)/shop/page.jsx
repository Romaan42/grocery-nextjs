import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { FaStar } from "react-icons/fa6";
import AddToCart from "@/components/cart/AddToCart";
import AddToCartMobile from "@/components/cart/AddToCartMobile";


async function ProductsPage() {
    const res = await fetch("https://grocery-pak.vercel.app/api/product")
    const products = await res.json()

    return (
        <main className="min-h-screen bg-gray-50 text-slate-900">
            {/* Filter & Search Bar */}
            <section className="bg-white border-b sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h1 className="text-2xl font-bold">Our Products</h1>

                </div>
            </section>

            {/* Product Grid */}
            <section className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {products.data.map((product) => (
                        <div key={product._id} className="group bg-white rounded-3xl p-4 shadow-sm border border-transparent hover:border-gray-200 hover:shadow-md transition-all duration-300 relative">

                            {/* Product Image Container */}
                            <div className="relative w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-4">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={300}
                                    height={300}
                                    className="object-contain p-4 group-hover:scale-105 transition-transform"
                                />
                                {/* Add to Cart Overlay (Optional) */}
                                <AddToCart id={product._id} />
                            </div>

                            {/* Details */}
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">
                                    {product.category}
                                </span>
                                <h3 className="font-bold text-gray-800 leading-snug h-10 line-clamp-2">
                                    {product.title}
                                </h3>

                                <div className="flex items-center justify-between pt-4">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 line-through">
                                            ${product.price.toFixed(2) - 2}
                                        </span>
                                        <span className="text-xl font-extrabold text-slate-900">
                                            ${product.price}
                                        </span>
                                    </div>

                                    {/* Rating Badge */}
                                    <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-md text-xs font-bold border border-green-100">
                                        <FaStar size={12} fill="currentColor" />
                                        {product.rating}
                                    </div>
                                    <AddToCartMobile id={product._id} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default ProductsPage;