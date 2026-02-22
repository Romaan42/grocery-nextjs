import React from 'react';
import Link from 'next/link';
import RegisterForm from '@/components/auth/RegisterForm';

export default function Register() {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
            <div className="max-w-5xl w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">

                {/* Left Side: Brand/Marketing */}
                <div className="md:w-1/2 bg-gradient-to-br from-orange-500 to-orange-600 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/5 rounded-full -ml-20 -mb-20"></div>

                    <div className="relative z-10">
                        <Link href="/" className="text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity">
                            STORE<span className="text-orange-200">DOOR.</span>
                        </Link>
                        <h2 className="text-4xl font-bold mt-16 leading-tight">
                            Join our community <br /> of smart shoppers.
                        </h2>
                        <p className="mt-4 text-orange-100 font-medium">
                            Create an account to track orders, save favorites, and get exclusive 25% member discounts.
                        </p>
                    </div>

                    <div className="relative z-10 mt-12 md:mt-0">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-orange-500 bg-slate-200 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" />
                                </div>
                            ))}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-orange-500 bg-orange-400 text-[10px] font-bold">
                                +2k
                            </div>
                        </div>
                        <p className="text-xs mt-3 text-orange-100 italic">
                            "The fastest delivery I've ever experienced!" – Sarah J.
                        </p>
                    </div>
                </div>

                {/* Right Side: Register Form */}
                <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
                    <div className="mb-10">
                        <h3 className="text-2xl font-black text-slate-800">Create Account</h3>
                        <p className="text-slate-500 text-sm mt-1">Already have an account? <Link href="/login" className="text-orange-500 font-bold hover:underline">Log in</Link></p>
                    </div>

                    <RegisterForm />

                    <p className="mt-8 text-center text-[10px] text-slate-400 leading-relaxed px-4">
                        By clicking "Create Account", you agree to our
                        <span className="underline cursor-pointer ml-1">Terms of Service</span> and
                        <span className="underline cursor-pointer ml-1">Privacy Policy</span>.
                    </p>
                </div>
            </div>
        </div>
    );
}