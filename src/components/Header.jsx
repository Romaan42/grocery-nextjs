"use client"
import { TiShoppingCart } from "react-icons/ti";
import { FaBars, FaSearch } from "react-icons/fa";
import Link from 'next/link';
import CartIcon from './CartIcon';
import LoginRegisterBtn from './LoginRegisterBtn';
import MobileSideBar from "./MobileSideBar";
import { useState } from "react";
import SearchedProducts from "./seach-products/SearchedProducts";
import { useDispatch } from "react-redux";
import { fetchSearchResults, setProducts, setSearch } from "@/store/serchProductSlice";
import MobileSearch from "./seach-products/MobileSearch";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isSearch, setIsSearch] = useState(false)
    const dispatch = useDispatch()

    const onSearchChange = (e) => {
        const searchTerm = e.target.value;
        dispatch(setSearch(searchTerm))
        if (searchTerm === "") {
            dispatch(setProducts([]))
            return;
        }
        dispatch(fetchSearchResults({ search: searchTerm }));
    }
    return (
        <>
            <header className={`${isSearch ? "hidden" : "flex"} justify-between px-3 lg:px-20 py-5 items-center shadow-sm bg-white border-b border-gray-100 sticky top-0 z-20`}>
                <div className="sm:block lg:hidden pl-3 pr-10" onClick={() => setIsOpen(!isOpen)}>
                    <FaBars className="text-2xl" />
                </div>
                <div className="flex items-center gap-2 mr-8">
                    <TiShoppingCart className='text-red-600 text-3xl font-bold' />
                    <span className='text-2xl font-black text-gray-800'>Grocery</span>
                </div>

                {/* Navigation */}
                <nav className='md:flex lg:gap-8 hidden gap-2 mr-8 nav-bar-header'>
                    <Link href="/" className='text-gray-700 font-semibold hover:text-red-600 transition-colors text-sm uppercase tracking-wide'>Home</Link>
                    <Link href="/shop" className='text-gray-700 font-semibold hover:text-red-600 transition-colors text-sm uppercase tracking-wide'>Shop</Link>
                    <Link href="/about" className='text-gray-700 font-semibold hover:text-red-600 transition-colors text-sm uppercase tracking-wide'>About</Link>
                    <Link href="/contact" className='text-gray-700 font-semibold hover:text-red-600 transition-colors text-sm uppercase tracking-wide'>Contact</Link>
                </nav>

                {/* Search Bar */}
                <div className="flex-1 mx-6 lg:flex hidden items-center relative">
                    <input
                        className='w-full outline-none px-4 py-2 rounded-full bg-gray-100 text-gray-800 placeholder-gray-500 focus:bg-gray-50 focus:ring-2 focus:ring-red-500 transition-all'
                        type="text"
                        name="search"
                        onChange={onSearchChange}
                        id="search"
                        placeholder="Search products..."
                    />
                    <FaSearch className='absolute right-4 text-gray-400 cursor-pointer hover:text-red-600 transition-colors' />

                    <SearchedProducts />
                </div>
                <div className="flex items-center md:hidden">
                    <FaSearch className='text-gray-700 text-2xl gap-3 cursor-pointer hover:text-red-600 transition-colors' onClick={() => setIsSearch(true)} />

                </div>
                <LoginRegisterBtn setIsOpen={setIsOpen} />
                <CartIcon />
            </header>
            <MobileSideBar isOpen={isOpen} setIsOpen={setIsOpen} />
            {isSearch &&
                <MobileSearch setIsSearch={setIsSearch} />}
        </>
    )
}
