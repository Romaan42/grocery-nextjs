import React from 'react'
import Product from '../Product'

export default async function AllProducts() {
    const res = await fetch("https://grocery-pak.vercel.app/api/product")
    const products = await res.json()
    if (!products.success) {
        return <h1 className='text-center text-2xl'>No products found</h1>
    }
    return (
        <section className='grid lg:grid-cols-5 md:grid-cols-2 mt-10 gap-5'>
            {products.data.map((val, i) => (
                <Product key={i} product={val} />
            ))}
        </section>

    )
}
