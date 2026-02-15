import AdminProduct from '@/components/admin/AdminProduct'
import { getProducts } from '@/lib/getCartItems'
import React from 'react'

const page = async () => {
    const { data } = await getProducts()
    return (
        <div className='grid grid-cols-3 gap-10 p-10'>
            {data.map((product) => (
                <AdminProduct key={product._id} product={product} />
            ))}
        </div>
    )
}

export default page