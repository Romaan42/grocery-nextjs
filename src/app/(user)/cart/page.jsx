import CartProduct from '@/components/cart/CartProduct';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { FaArrowRight, FaShoppingBag } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

export default async function Cart() {

    const cookieStore = await cookies();
    const res = await fetch('https://grocery-pak.vercel.app/api/cart-items', {
        cache: 'no-store',
        headers: {
            cookie: cookieStore.toString()
        }
    })
    const data = await res.json()
    if (!data.success) {
        return <div>{data.message}</div>
    }

    const { cartItems } = data;

    const subtotal = cartItems?.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const shipping = 1.00;

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <style>
                    {`
                    @media (max-width:650px){
                        #cart-heading {
                            align-items:start;
                        }
                    }
                    `}
                </style>

                {/* Header & Stepper */}
                <div className="flex flex-col md:flex-row justify-between  items-end mb-12 gap-6" id='cart-heading'>
                    <div>
                        <h1 className="text-4xl font-black text-slate-900 flex items-center gap-3">
                            <FaShoppingBag className="text-orange-500" /> Your Cart
                        </h1>
                        <p className="text-slate-500 font-medium mt-2">You have {cartItems?.length} items in your bag.</p>
                    </div>


                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* 1. Items List (Left Side) */}
                    <div className="lg:col-span-2 space-y-6">
                        {cartItems?.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-slate-500 font-medium"><IoCartOutline className="inline-block mr-2 text-3xl" />
                                    Your cart is currently empty.</p>
                            </div>
                        )}
                        {cartItems?.map((item) => (
                            <CartProduct key={item._id} item={item} />
                        ))}

                        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 font-bold hover:text-orange-500 transition-colors mt-4">
                            ← Continue Shopping
                        </Link>
                    </div>

                    {/* 2. Order Summary (Right Side) */}
                    <div className="lg:col-span-1">
                        <div className="bg-slate-900 rounded-4xl p-8 text-white shadow-2xl sticky top-8">
                            <h3 className="text-xl font-bold mb-8">Order Summary</h3>

                            <div className="space-y-4 border-b border-white/10 pb-8">
                                <div className="flex justify-between text-slate-400 font-medium">
                                    <span>Subtotal</span>
                                    <span className="text-white">${subtotal?.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-slate-400 font-medium">
                                    <span>Shipping</span>
                                    <span className="text-white">${shipping?.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-slate-400 font-medium">
                                    <span>Tax estimate</span>
                                    <span className="text-white">$0.00</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-end mt-8">
                                <div>
                                    <p className="text-slate-400 text-xs font-bold uppercase">Total Amount</p>
                                    <p className="text-3xl font-black text-orange-500 mt-1">${(subtotal + shipping).toFixed(2)}</p>
                                </div>
                            </div>

                            {/* Promo Code Input */}
                            <div className="mt-8 relative">
                                <input
                                    type="text"
                                    placeholder="Promo Code"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-orange-500 transition-all"
                                />
                                <button className="absolute right-2 top-1.5 bg-orange-500 text-[10px] font-black uppercase px-3 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                                    Apply
                                </button>
                            </div>
                            {cartItems?.length === 0 ?
                                <button className="w-full bg-orange-200 hover:bg-orange-600 text-white font-black py-5 rounded-2xl mt-8 shadow-xl shadow-orange-500/20 transition-all active:scale-95 flex items-center justify-center gap-3">
                                    Checkout Now <FaArrowRight />
                                </button> :
                                <Link href={'/checkout'} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-5 rounded-2xl mt-8 shadow-xl shadow-orange-500/20 transition-all active:scale-95 flex items-center justify-center gap-3">
                                    Checkout Now <FaArrowRight />
                                </Link>
                            }

                            <div className="mt-8 flex items-center justify-center gap-4 opacity-40 grayscale">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="visa" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="mastercard" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}