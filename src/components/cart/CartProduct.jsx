'use client'
import { decreaseQty, increaseQty, removeFromCart } from '@/actions/userAction'
import { getCartItemsCount } from '@/store/cartSlice'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

export default function CartProduct({ item }) {
    const dispatch = useDispatch()
    const router = useRouter()

    const removeItem = async (id) => {
        const message = await removeFromCart(id)
        dispatch(getCartItemsCount())
        router.refresh()

    }

    const increaseItemQty = async (id) => {
        await increaseQty(id)
        router.refresh()
    }

    const decreaseItemQty = async (id) => {
        if (item.qty === 1) {
            return await removeItem(id)
        }
        await decreaseQty(id)
        router.refresh()
    }

    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center gap-6 transition-hover hover:shadow-md">
            <div className="w-32 h-32 bg-slate-50 rounded-xl overflow-hidden shrink-0 relative">
                <Image src={item.image} alt={item.title} width={100} height={100} className="w-full h-full object-contain p-2" />
            </div>

            <div className="grow text-center sm:text-left">
                <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">{item.category}</p>
                <h3 className="text-lg font-bold text-slate-800 mt-1">{item.title}</h3>
                <p className="text-slate-400 text-sm font-medium mt-1">${item.price.toFixed(2)} each</p>
            </div>

            {/* Quantity Toggler */}
            <div className="flex items-center gap-4 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
                <button className="text-slate-400 hover:text-orange-500 transition-colors"><FaMinus size={12} onClick={() => decreaseItemQty(item.id)} /></button>
                <span className="font-bold text-slate-800 w-4 text-center">{item.qty}</span>
                <button className="text-slate-400 hover:text-orange-500 transition-colors"><FaPlus size={12} onClick={() => increaseItemQty(item.id)} /></button>
            </div>

            <div className="text-right flex items-center gap-4">
                <p className="text-xl font-black text-slate-900">${(item.price * item.qty).toFixed(2)}</p>
                <button className="text-slate-300 hover:text-red-500 mt-2 transition-colors">
                    <FaTrashAlt className='cursor-pointer -mt-2 text-red-400' size={24} onClick={() => removeItem(item.id)} />
                </button>
            </div>
        </div>
    )
}
