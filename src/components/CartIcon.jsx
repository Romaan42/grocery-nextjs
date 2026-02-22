"use client"
import { getCartItemsCount } from "@/store/cartSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { IoBagRemove } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

export default function CartIcon() {
    const dispatch = useDispatch()
    const router = useRouter()

    const { loading, items } = useSelector(state => state.cart)

    const fetchCartItems = () => {
        dispatch(getCartItemsCount())
    }
    useEffect(() => {
        fetchCartItems()
    }, [])

    return (
        <div className="flex items-center gap-3 ml-4 relative float-end group" onClick={() => router.push("/cart")}>
            <div className='p-2 bg-red-50 rounded-full group-hover:bg-red-100 transition-colors cursor-pointer'>
                <IoBagRemove className='text-red-600 text-2xl' />
            </div>
            {/* Cart Notification Badge */}
            <div className='absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg animate-pulse'>
                {loading ? ".." : items?.length ?? 0}
            </div>
        </div>
    )
}
