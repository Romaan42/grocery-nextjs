import React from 'react';
import Image from "next/image";

export default function Banner() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-24">
            {/* Soft Ambient Background Blobs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-[500px] w-[500px] rounded-full bg-orange-100/50 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-[400px] w-[400px] rounded-full bg-yellow-100/50 blur-3xl"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">

                    {/* Left Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 border border-orange-100 shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
                            <span className="text-xs font-bold uppercase tracking-wider text-orange-700">
                                Your Comfort is Our Business
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1]">
                            We Bring the <span className="text-orange-500">Store</span> <br />
                            to Your <span className="relative">
                                Door
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="#f97316" strokeWidth="4" fill="none" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        <p className="max-w-md mx-auto lg:mx-0 text-lg text-slate-600 font-medium leading-relaxed">
                            Experience luxury shopping from your couch.
                            <span className="block mt-2 font-bold text-slate-900 underline decoration-orange-400 decoration-2">
                                🎉 GET 25% OFF SITEWIDE TODAY
                            </span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="group relative overflow-hidden rounded-full bg-orange-500 px-10 py-4 text-white shadow-xl transition-all hover:bg-orange-600 active:scale-95">
                                <span className="relative z-10 font-bold">Shop Collection</span>
                                <div className="absolute inset-0 translate-y-[100%] bg-orange-400 transition-transform group-hover:translate-y-0"></div>
                            </button>
                            <button className="rounded-full border-2 border-slate-200 bg-white px-10 py-4 font-bold text-slate-700 transition-all hover:border-orange-200 hover:bg-orange-50">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="relative group">
                        {/* Decorative background ring */}
                        <div className="absolute inset-0 scale-90 rounded-full border-[16px] border-orange-100 opacity-50 transition-transform duration-700 group-hover:scale-100"></div>

                        <div className="relative z-10 transform transition-all duration-500 group-hover:-translate-y-4">
                            <Image
                                src='/banner.png'
                                width={600}
                                height={450}
                                alt="Modern furniture showcase"
                                className="drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                                priority
                            />
                        </div>

                        {/* Floating "Trust" Badge */}
                        <div className="absolute -bottom-4 -left-4 md:bottom-8 md:left-8 z-20 animate-bounce-slow">
                            <div className="rounded-2xl bg-white/80 p-4 backdrop-blur-md shadow-lg border border-white/20">
                                <p className="text-2xl font-black text-orange-500">4.9/5</p>
                                <p className="text-[10px] font-bold uppercase text-slate-400">Customer Rating</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}