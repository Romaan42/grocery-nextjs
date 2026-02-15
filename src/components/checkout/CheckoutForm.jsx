"use client"
import React, { useActionState, useEffect } from 'react'
import TotalPrice from './TotalPrice'
import { useDispatch, useSelector } from 'react-redux'
import { placeOrder } from '@/actions/userAction'
import { getCartItemsCount } from '@/store/cartSlice'
import { useRouter } from 'next/navigation'

export default function CheckoutForm({ setMessage }) {
    const dispatch = useDispatch()
    const router = useRouter()
    const [state, action, loading] = useActionState(placeOrder)
    const { items } = useSelector(state => state.cart)

    const total = items.reduce((acc, item) => acc + item.price * item.qty, 0)


    useEffect(() => {
        if (state?.success) {
            dispatch(getCartItemsCount())
            router.push(`/success-message/${state.id}`)
        }
    }, [state])

    const handleSubmitForm = async (formData) => {
        if (items.length === 0 && !loading) {
            return alert('cart is empty')
        }
        const name = formData.get('name')
        const address = formData.get('address')
        const phone = formData.get('phone')

        action({ name, address, phone, items, totalPrice: Math.floor(total) })

    }
    return (
        <div className='rounded-sm border border-gray-200 p-4'>
            <form action={handleSubmitForm} className='flex flex-col gap-y-3'>
                <div className='flex flex-col'>
                    <label htmlFor="name">Full Name</label>
                    <input className='border border-gray-400 p-2 rounded-lg mt-2' type="text" name='name' placeholder='enter your name' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="address">Address</label>
                    <input className='border border-gray-400 p-2 rounded-lg mt-2' type="text" name='address' placeholder='123 streat, city...' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="phone">Phone</label>
                    <input className='border border-gray-400 p-2 rounded-lg mt-2' type="text" name='phone' placeholder='+92 3xxxxxxx' />
                </div>

                <TotalPrice />
                <button type='submit' className='w-full bg-gray-900 py-2 rounded-lg text-white font-semibold cursor-pointer'>Place Order</button>
            </form>
        </div>
    )
}
