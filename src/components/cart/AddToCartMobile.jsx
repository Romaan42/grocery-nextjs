'use client'
import { addToCart } from '@/actions/userAction'
import { getCartItemsCount } from '@/store/cartSlice'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

export default function AddToCartMobile({ id }) {
    const router = useRouter()
    const [cartItems, setCartItems] = useState([])
    const [cartLoading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const { user, loading } = useSelector(state => state.user)

    const fetchCartItems = () => {
        setLoading(true)
        fetch("/api/cart-items")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                if (data.success) {
                    setCartItems(data.cartItems)
                } else {
                    setCartItems([])
                }

                setLoading(false)
            })
    }
    useEffect(() => {
        fetchCartItems()
    }, [])

    const handleAddToCart = async () => {
        if (!user && !loading) {
            return router.push('/login')
        }
        const data = await addToCart(id)
        if (data.success) {
            fetchCartItems()
            dispatch(getCartItemsCount())
        }
    }

    return (
        <button className=" bg-slate-900/10 md:hidden transition-opacity flex items-center justify-center">
            {cartItems.some((v) => v._id === id) ?
                <div className="bg-slate-900 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2  transition-transform cursor-pointer" onClick={() => router.push('/cart')}>Added! View</div> :
                <div className="bg-slate-900 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 cursor-pointer" onClick={handleAddToCart}>
                    <FaShoppingCart size={16} /> Add to Cart
                </div>
            }
        </button>
    )
}