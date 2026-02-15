"use client"
import { adminLogout, checkAdmin } from '@/actions/adminAction';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";



const SideBar = () => {
    const [isAdmin, setIsAdmin] = useState(false);


    const handleLogout = async () => {
        const result = await adminLogout();
        if (result.logout) {
            setIsAdmin(false);
            window.location.href = "/admin/i-am-admin";
        }
    }

    useEffect(() => {
        const checkAdminVerify = async () => {
            const result = await checkAdmin();
            if (result.admin) {
                setIsAdmin(true);
            }
        }
        checkAdminVerify();
    }, [isAdmin])

    if (!isAdmin) {
        return null;
    }
    return (
        <div className='w-50 min-h-screen bg-gray-200 p-5  '>
            <div className='text-xl font-bold text-[#6C5FBB] text-center mb-3 flex items-center justify-center gap-2'><FaCartFlatbedSuitcase />
                <span>Admin</span></div>
            <hr className='text-gray-300' />

            <div className='flex flex-col mt-4 gap-x-1'>
                <Link className='p-2 rounded-xl hover:bg-[#6c5fbb] hover:text-white duration-75' href={"/admin"}>Home</Link>
                <Link className='p-2 rounded-xl hover:bg-[#6c5fbb] hover:text-white duration-75' href={"/admin/add-product"}>Add new</Link>
                <Link className='p-2 rounded-xl hover:bg-[#6c5fbb] hover:text-white duration-75' href={"/admin/products"}>Products</Link>
                <Link className='p-2 rounded-xl hover:bg-[#6c5fbb] hover:text-white duration-75' href={"/admin/orders"}>Orders</Link>
            </div>
            <div className='mt-20 flex items-center text-xl bg-red-500 text-white p-2 rounded-xl justify-center gap-2 cursor-pointer hover:bg-red-600 duration-75' onClick={handleLogout}>
                Logout <IoIosLogOut className='mt-1 ml-2' />
            </div>
        </div>
    )
}

export default SideBar