"use client"
import { useEffect } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchResults } from '@/store/serchProductSlice'
import { useRouter } from 'next/navigation';
import { getCartItemsCount } from '@/store/cartSlice';
import { addToCart } from '@/actions/userAction';

export default function MobileSearch({ setIsSearch }) {
    const router = useRouter()
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.products)
    const { items } = useSelector(state => state.cart)
    const { user, loading } = useSelector(state => state.user)

    const onSearchChange = (e) => {
        const query = e.target.value;
        dispatch(fetchSearchResults({ search: query }))
    }


    useEffect(() => {
        dispatch(getCartItemsCount())
    }, [])


    const handleAdded = () => {
        setIsSearch(false)
        router.push('/cart')
    }

    const handleAddToCart = async (id) => {
        if (!user && !loading) {
            setIsSearch(false)
            return router.push("/login")
        }
        const data = await addToCart(id)
        if (data.success) {
            dispatch(getCartItemsCount())
        }
    }

    return (
        <div className='min-w-full h-screen fixed bg-gray-100 z-20'>
            <div className='flex items-center'>
                <input type="text" name="serach" id="search" placeholder="Search..." className='w-full border border-white p-2 ' onChange={onSearchChange} />
                <RxCross2 className='p-2 text-5xl' onClick={() => setIsSearch(false)} />

            </div>

            {products.map(product => (
                <div key={product._id} className="flex items-center justify-between gap-4 p-3 px-5 hover:bg-gray-100 cursor-pointer border-b last:border-b-0 transition">
                    <img src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded" />
                    <div className="flex-1 flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800">{product.title}</h3>
                        <p className="text-blue-600 font-bold">${product.price}</p>
                    </div>
                    {items.some((v) => v._id === product._id) ?
                        <button className='bg-slate-900 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 cursor-pointer text-xs' onClick={handleAdded}>Added</button> :
                        <button className='bg-slate-900 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 cursor-pointer text-xs' onClick={() => handleAddToCart(product._id)}>Add To Cart</button>
                    }
                </div>
            ))}
        </div>
    )
}
