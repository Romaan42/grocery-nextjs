import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";

function page() {
    return (
        <main className="min-h-screen bg-gray-50 text-slate-900">
            {/* Hero */}
            <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-10">
                <div className="w-full lg:w-1/2">
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                        Fresh groceries, delivered with care
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        We bring farm-fresh produce and everyday essentials straight to your
                        door — fast, affordably, and sustainably. Our mission is to make
                        healthy eating simple for every household.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <Link
                            href="/"
                            className="inline-block bg-slate-900 text-white px-5 py-3 rounded-lg font-semibold hover:bg-slate-800 transition"
                        >
                            Start shopping
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-block border border-slate-200 text-slate-800 px-5 py-3 rounded-lg hover:shadow-sm transition"
                        >
                            Contact us
                        </Link>
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                        <Image
                            src="/images/about-hero.svg"
                            alt="Fresh produce"
                            width={900}
                            height={600}
                            className="w-full h-64 object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="bg-white py-12">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold">Our Mission</h2>
                        <p className="mt-3 text-gray-600">
                            To connect local producers with our community and make wholesome
                            food accessible to everyone. We curate quality products, reduce
                            waste, and deliver convenience without compromise.
                        </p>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="p-4 bg-gray-50 rounded-lg text-center">
                                <h3 className="text-xl font-semibold">Quality</h3>
                                <p className="mt-2 text-sm text-gray-500">Handpicked produce</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg text-center">
                                <h3 className="text-xl font-semibold">Sustainability</h3>
                                <p className="mt-2 text-sm text-gray-500">Eco-friendly packaging</p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-lg text-center">
                                <h3 className="text-xl font-semibold">Community</h3>
                                <p className="mt-2 text-sm text-gray-500">Supporting local farms</p>
                            </div>
                        </div>
                    </div>

                    <aside className="p-6 bg-slate-900 text-white rounded-lg">
                        <h4 className="text-lg font-bold">At a glance</h4>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li>• Fast delivery across the city</li>
                            <li>• Hundreds of quality products</li>
                            <li>• Easy returns & support</li>
                        </ul>
                    </aside>
                </div>
            </section>

            {/* Stats */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                    <div className="p-6 bg-white rounded-lg shadow">
                        <div className="text-3xl font-extrabold">10k+</div>
                        <div className="mt-2 text-sm text-gray-500">Happy customers</div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow">
                        <div className="text-3xl font-extrabold">250+</div>
                        <div className="mt-2 text-sm text-gray-500">Products available</div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow">
                        <div className="text-3xl font-extrabold">150+</div>
                        <div className="mt-2 text-sm text-gray-500">Local suppliers</div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="bg-white py-12">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl font-bold">Meet the team</h2>
                    <p className="mt-2 text-gray-600">A small team with a big love for food.</p>

                    <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {[
                            { name: "Aisha Khan", role: "Founder" },
                            { name: "Ravi Patel", role: "Head of Operations" },
                            { name: "Lina Gomez", role: "Product Lead" },
                            { name: "Noah Lee", role: "Customer Success" },
                        ].map((m) => (
                            <div key={m.name} className="text-center">
                                <div className="mx-auto w-28 h-28 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center">
                                    <Image src={`/images/avatar-placeholder.svg`} alt={m.name} width={112} height={112} className="object-cover" />
                                </div>
                                <div className="mt-3 font-semibold">{m.name}</div>
                                <div className="text-sm text-gray-500">{m.role}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-6xl mx-auto px-6 py-12">
                <div className="rounded-2xl bg-linear-to-r from-green-600 to-emerald-500 text-white p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-bold">Ready to try fresh groceries?</h3>
                        <p className="mt-2 text-sm opacity-90">Sign up and get free delivery on your first order.</p>
                    </div>
                    <div>
                        <a href="/register" className="bg-white text-slate-900 px-5 py-3 rounded-lg font-semibold">Create an account</a>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default page;