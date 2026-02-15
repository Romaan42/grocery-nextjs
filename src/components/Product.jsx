"use client";
import { addToCart } from "@/actions/userAction";
import { getCartItemsCount } from "@/store/cartSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaStar, FaRegHeart, FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";


export default function Product({ product }) {
    const dispatch = useDispatch()
    const { user, loading } = useSelector(state => state.user)
    const router = useRouter()

    const [cartItems, setCartItems] = useState([])
    const [cartLoading, setLoading] = useState(true)


    const fetchCartItems = () => {
        setLoading(true)
        fetch("/api/cart-items")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                if (data.success) {
                    setCartItems(data.cartItems)
                }

                setLoading(false)
            })
    }
    useEffect(() => {
        fetchCartItems()
    }, [])

    const handleAddToCart = async () => {
        if (!user && !loading) {
            return router.push("/login")
        }
        const data = await addToCart(product._id)
        if (data.success) {
            fetchCartItems()
            dispatch(getCartItemsCount())
        }
    }


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

                {/* Wishlist & Quick View Overlay (Top Right) */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-12 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <button className="p-2 bg-white rounded-full shadow-md text-gray-600 hover:text-red-500 hover:scale-110 transition-all">
                        <FaRegHeart size={16} />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-md text-gray-600 hover:text-blue-500 hover:scale-110 transition-all">
                        <FaEye size={16} />
                    </button>
                </div>

                {/* Bottom Slide-up Add to Cart */}
                <div className="absolute inset-x-0 bottom-0 p-4 md:translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    {cartLoading ? <div>loading...</div> :
                        <>
                            {cartItems.some((val) => val._id === product._id) ? <button className="w-full bg-slate-900 text-white py-2.5 rounded-xl font-bold text-sm shadow-xl active:scale-95 transition-all cursor-pointer hover:bg-slate-800">
                                Added
                            </button> : <button onClick={handleAddToCart} className="w-full bg-slate-900 text-white py-2.5 rounded-xl font-bold text-sm shadow-xl active:scale-95 transition-all cursor-pointer hover:bg-slate-800">
                                Add to Cart
                            </button>
                            }
                        </>
                    }

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
                        <span className="text-xs text-gray-400 line-through font-medium">$ {(product.price * 1.2).toFixed(2)}</span>
                        <span className="text-xl font-black text-slate-900">${product.price}</span>
                    </div>

                    <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
                        <FaStar className="text-green-600 text-[10px]" />
                        <span className="text-xs font-bold text-green-700">4.4</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
