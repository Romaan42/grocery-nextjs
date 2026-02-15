"use client"
import { loginUser } from '@/actions/userAction';
import React, { useActionState, useEffect, useState } from 'react'
import { FaGoogle, FaGithub, FaEnvelope, FaLock } from 'react-icons/fa';


export default function LoginForm() {
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null)

    const [state, formAction, loading] = useActionState(loginUser);


    useEffect(() => {
        if (state?.error) {
            return setError(state.error)
        }
        if (state?.success && state?.message) {
            setMessage(state.message)

            window.location.href = "/"
            return
        }


    }, [state])

    const onLogin = async (formData) => {
        const email = formData.get("email");
        const password = formData.get("password");

        if (!email || !password) {
            return alert("Please fill in all fields.");
        }
        setError(null);
        setMessage(null);

        formAction({ email, password })
    }

    return (
        <form action={onLogin} className="space-y-6">
            {/* Email Input */}
            <div>
                {message && <p className='text-green-600 text-center'>{message}</p>}
            </div>
            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email Address</label>
                <div className="relative group">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
                    <input
                        type="email"
                        name='email'
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
                        placeholder="••••••••"
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    />
                </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2 px-1">
                {error && <p className='text-red-400 text-xs'>{error}</p>}
            </div>

            <button className="w-full bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-xl shadow-lg shadow-slate-900/20 transition-all active:scale-[0.98] mt-4">
                Login to Account
            </button>

            <div className="relative my-8 text-center">
                <hr className="border-slate-100" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-xs font-bold text-slate-400 uppercase">
                    Or continue with
                </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button type="button" className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-semibold text-slate-700 text-sm">
                    <FaGoogle className="text-red-500" /> Google
                </button>
                <button type="button" className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-semibold text-slate-700 text-sm">
                    <FaGithub /> GitHub
                </button>
            </div>
        </form>
    )
}
