"use client";
import { registerUser } from '@/actions/userAction';
import { useActionState, useEffect, useState } from 'react';
import { FaGoogle, FaGithub, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

export default function RegisterForm() {
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null)

    const [state, formAction, loading] = useActionState(registerUser);
    console.log({ state, loading })

    useEffect(() => {
        if (state?.error) {
            return setError(state.error)
        }
        if (state?.message) {
            return setMessage(state.message)
        }
    }, [state])

    const onRegister = async (formData) => {
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");

        if (!name || !email || !password) {
            return alert("Please fill in all fields.");
        }
        setError(null);
        setMessage(null);

        formAction({ name, email, password })
    }

    return (
        <form action={onRegister} className="space-y-5">
            {/* Name Input */}
            {message && <p className="text-green-500 text-sm font-medium text-center">{message}</p>}
            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Full Name</label>
                <div className="relative group">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
                    <input
                        type="text"
                        placeholder="John Doe"
                        name='name'
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    />
                </div>
            </div>

            {/* Email Input */}
            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email Address</label>
                <div className="relative group">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors" />
                    <input
                        type="email"
                        name='email'
                        placeholder="hello@example.com"
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                    />
                </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Password</label>
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

            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
            <button className={`w-full ${loading ? 'bg-orange-400 cursor-not-allowed' : 'hover:bg-orange-600'} bg-orange-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/30 transition-all active:scale-[0.98] mt-4`} disabled={loading}>
                Create Account
            </button>

            <div className="relative my-8 text-center">
                <hr className="border-slate-100" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-xs font-bold text-slate-400 uppercase">
                    Or register with
                </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button type="button" className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-semibold text-slate-700">
                    <FaGoogle className="text-red-500" /> Google
                </button>
                <button type="button" className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors font-semibold text-slate-700">
                    <FaGithub /> GitHub
                </button>
            </div>
        </form>
    )
}
