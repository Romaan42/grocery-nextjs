import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import LoginForm from '@/components/auth/LoginForm';

export default function Login() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
            <div className="max-w-5xl w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">

                {/* Left Side: Brand/Welcome Back */}
                <div className="md:w-1/2 bg-gradient-to-br from-slate-800 to-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    {/* Decorative Elements - Subtle change to Blue/Indigo for Login */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -ml-20 -mb-20"></div>

                    <div className="relative z-10">
                        <Link href="/" className="flex items-center gap-2 text-sm font-bold text-orange-400 hover:text-orange-300 transition-all mb-12">
                            <FaArrowLeft size={12} /> Back to Store
                        </Link>

                        <h2 className="text-4xl font-bold mt-4 leading-tight">
                            Nice to see you <br /> again!
                        </h2>
                        <p className="mt-4 text-slate-400 font-medium">
                            Log in to access your orders, wishlist, and personalized recommendations.
                        </p>
                    </div>

                    <div className="relative z-10 mt-12 md:mt-0 p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <p className="text-sm italic text-slate-300">
                            "The best selection of premium products I've found online. The delivery is always on time!"
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-[10px] font-bold">JD</div>
                            <span className="text-xs font-bold text-slate-200">Jason D. — Verified Member</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Login Form */}
                <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
                    <div className="mb-10">
                        <h3 className="text-2xl font-black text-slate-800">Sign In</h3>
                        <p className="text-slate-500 text-sm mt-1">
                            New to StoreDoor? <Link href="/register" className="text-orange-500 font-bold hover:underline">Create an account</Link>
                        </p>
                    </div>

                    <LoginForm />

                    <p className="mt-8 text-center text-[10px] text-slate-400 leading-relaxed px-4">
                        Trouble logging in? <span className="underline cursor-pointer">Contact our support team</span> for assistance.
                    </p>
                </div>
            </div>
        </div>
    );
}