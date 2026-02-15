"use client"
import { adminLogin } from '@/actions/adminAction'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'

export default function page() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onLoginFormSubmit = async () => {
        const data = await adminLogin({ email, password })
        if (data.login) {
            router.push("/admin")
        }
    }

    return (
        <div className='w-full h-screen flex justify-center items-center bg-gray-50'>
            <form action={onLoginFormSubmit} className='space-y-6 w-[400px] bg-white p-10 shadow-2xl rounded-2xl flex flex-col'>
                <div className="space-y-1 w-full">
                    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email Address</label>
                    <div className="relative group">
                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
                        <input
                            type="email"
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                        />
                    </div>
                </div>

                {/* Password Input */}
                <div className="space-y-1">
                    <div className="flex justify-between items-center px-1">
                        <label className="text-xs font-bold text-slate-500 uppercase">Password</label>
                        <button type="button" className="text-[11px] font-bold text-orange-600 hover:text-orange-700">Forgot password?</button>
                    </div>
                    <div className="relative group">
                        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
                        <input
                            type="password"
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                        />
                    </div>
                </div>

                <button className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-xl shadow-lg shadow-slate-900/20 transition-all active:scale-[0.98] mt-4">
                    Login to Account
                </button>
            </form>
        </div>
    )
}
