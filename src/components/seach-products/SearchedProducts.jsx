"use client"

import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '@/actions/userAction'
import { getCartItemsCount } from '@/store/cartSlice'
import { setProducts, setSearch } from '@/store/serchProductSlice'

export default function SearchedProducts() {

    const { products, loading, searchTerm } = useSelector(state => state.products)
    const { items } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const searchRef = useRef(null)

    // ✅ Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                dispatch(setProducts([]))
                dispatch(setSearch(''))
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    const handleAddToCart = async (id) => {
        const data = await addToCart(id)

        if (data?.success) {
            dispatch(getCartItemsCount())
        }
    }

    return (
        <div
            ref={searchRef}
            className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 max-h-96 overflow-y-auto z-50"
        >
            {loading && (
                <div className="p-4 text-center text-gray-500">
                    Loading products...
                </div>
            )}

            {products.length === 0 && !loading && searchTerm !== '' && (
                <div className="p-4 text-center text-gray-500">
                    No products found.
                </div>
            )}

            {products.map(product => {

                const isInCart = items.some(v => v.proId === product._id)

                return (
                    <div
                        key={product._id}
                        className="flex items-center justify-between gap-4 p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0 transition"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-16 h-16 object-cover rounded"
                        />

                        <div className="flex-1 flex justify-between items-center">
                            <h3 className="font-semibold text-gray-800">
                                {product.title}
                            </h3>
                            <p className="text-blue-600 font-bold">
                                ${product.price}
                            </p>
                        </div>

                        {isInCart ? (
                            <button
                                disabled
                                className="bg-gray-400 text-white px-4 py-2 rounded-lg font-bold text-xs"
                            >
                                Added
                            </button>
                        ) : (
                            <button
                                onClick={() => handleAddToCart(product._id)}
                                className="bg-slate-900 text-white px-4 py-2 rounded-lg font-bold text-xs"
                            >
                                Add To Cart
                            </button>
                        )}
                    </div>
                )
            })}
        </div>
    )
}
