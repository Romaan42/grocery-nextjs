"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'

export default function CheckOutCart() {
    const { loading, items } = useSelector(state => state.cart)


    return (
        <div className='rounded-sm shadow-xl p-4 flex flex-col gap-1'>
            {loading && <p>Loading...</p>}
            {items?.length === 0 && <p className="text-center text-slate-500">Your cart is empty</p>}
            {!loading && items?.map((item) => (
                <div key={item._id} className="bg-white rounded-lg p-6 border border-slate-100 flex flex-col sm:flex-row items-center gap-6 transition-hover hover:shadow-md">
                    <div className="w-32 h-32 bg-slate-50 rounded-xl overflow-hidden shrink-0 relative">
                        <Image src={item.image} alt={item.title} width={100} height={100} className="w-full h-full object-contain p-2" />
                    </div>

                    <div className="grow text-center sm:text-left">
                        <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">{item.category}</p>
                        <h3 className="text-lg font-bold text-slate-800 mt-1">{item.title}</h3>
                        <p className="text-slate-400 text-sm font-medium mt-1">${item.price.toFixed(2)} each</p>
                        <p className="text-slate-400 text-sm font-medium mt-1">qty: {item.qty}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
