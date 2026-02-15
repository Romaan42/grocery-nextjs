"use client"
import { getCartItemsCount } from '@/store/cartSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function TotalPrice() {
    const { items } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartItemsCount())
    }, [])

    const subtotal = items?.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const shipping = 1.00;
    return (
        <div className='my-3'>
            <h1 className='text-xl font-bold pl-2 '>Total: <span>${Math.floor(subtotal) + shipping}</span></h1>
        </div>
    )
}
