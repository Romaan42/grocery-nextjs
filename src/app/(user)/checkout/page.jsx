import React from 'react'
import CheckOutCart from '@/components/checkout/CheckOutCart'
import CheckoutForm from '@/components/checkout/CheckoutForm'

const CheckOut = () => {
    return (
        <div className='bg-gray-50 min-h-screen p-10 lg:px-30'>
            <section className='p-10 rounded-lg shadow-lg bg-white'>
                <h1 className='text-center text-2xl text-red-500 font-bold'>Checkout Page</h1>
                <div className='grid grid-cols-2 gap-4 mt-6'>
                    <CheckOutCart />
                    <CheckoutForm />
                </div>
            </section>
        </div>
    )
}

export default CheckOut