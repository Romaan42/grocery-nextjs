import Link from 'next/link'
import React from 'react'
import { MdEmail } from 'react-icons/md'
import MobileButtons from './MobileButtons'

export default function MobileSideBar({ isOpen, setIsOpen }) {

    const setMenuDefault = () => {
        setIsOpen(false)
    }

    return (
        <div className={`lg:hidden fixed bg-white min-w-screen h-screen z-50 p-4 shadow duration-150 ${isOpen ? "-translate-y" : "-translate-y-[130%] "}`}>
            <nav className='flex flex-col px-10 gap-3 py-5'>
                <Link className='font-semibold text-gray-700 text-lg' onClick={setMenuDefault} href={'/'}>Home</Link>
                <Link className='font-semibold text-gray-700 text-lg' onClick={setMenuDefault} href={"/shop"}>Shop</Link>
                <Link className='font-semibold text-gray-700 text-lg' onClick={setMenuDefault} href={'/contact'}>Contact</Link>
                <Link className='font-semibold text-gray-700 text-lg' onClick={setMenuDefault} href={"/about"}>About</Link>
            </nav>

            <hr className='text-gray-400' />
            <div className='p-6'>
                <h3>NEED HELP?</h3>
                <p className='flex gap-3 items-center text-lg mt-10'><MdEmail /> romaan4244@gmail.com </p>
            </div>
            <hr className='text-gray-700' />

            <MobileButtons setIsOpen={setIsOpen} />
        </div>
    )
}
