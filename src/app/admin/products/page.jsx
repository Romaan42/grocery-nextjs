import { getAdminProducts } from '@/actions/adminAction'
import AdminProduct from '@/components/admin/AdminProduct'
import React from 'react'

const page = async () => {
    const res = await fetch(`${process.env.BASE_URL}/admin/api/admin-products`)
    const result = await res.json()

    return (
        <div className='grid grid-cols-3 gap-10 p-10'>
            {result?.products?.map((product) => (
                <AdminProduct key={product._id} product={product} />
            ))}
        </div>
    )
}

export default page