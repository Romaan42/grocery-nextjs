import React from "react";
import Footer from "@/components/Footer";
import Link from "next/link";
import { IoMail } from "react-icons/io5";
import { FaMapPin, FaPhone } from "react-icons/fa";

function ContactPage() {
    return (
        <main className="min-h-screen bg-gray-50 text-slate-900">
            {/* Header Section */}
            <section className="max-w-6xl mx-auto px-6 py-16 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                    Get in touch with us
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Have a question about our products, delivery, or your order?
                    Our team is here to help you every step of the way.
                </p>
            </section>

            {/* Contact Info & Form Grid */}
            <section className="max-w-6xl mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Left Side: Contact Details */}
                    <div className="space-y-6">
                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="p-3 bg-slate-900 text-white rounded-lg">
                                <IoMail size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Email us</h3>
                                <p className="text-gray-500 text-sm">support@freshgrocery.com</p>
                                <p className="text-gray-500 text-sm">info@freshgrocery.com</p>
                            </div>
                        </div>

                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="p-3 bg-slate-900 text-white rounded-lg">
                                <FaPhone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Call us</h3>
                                <p className="text-gray-500 text-sm">+92 (300) 123-4567</p>
                                <p className="text-gray-500 text-sm">Mon - Sat, 9am - 6pm</p>
                            </div>
                        </div>

                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
                            <div className="p-3 bg-slate-900 text-white rounded-lg">
                                <FaMapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Visit us</h3>
                                <p className="text-gray-500 text-sm">123 Fresh Lane, Market Area</p>
                                <p className="text-gray-500 text-sm">Islamabad, Pakistan</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 transition" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-gray-700">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 transition" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-700">Subject</label>
                                <input type="text" placeholder="How can we help?" className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 transition" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-gray-700">Message</label>
                                <textarea rows={5} placeholder="Write your message here..." className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 transition"></textarea>
                            </div>
                            <button className="w-full bg-slate-900 text-white py-4 rounded-lg font-bold hover:bg-slate-800 transition shadow-md">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Support Info */}
            <section className="bg-white py-12">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                    <div className="p-4">
                        <h3 className="font-bold text-xl">Help Center</h3>
                        <p className="mt-2 text-sm text-gray-500">Visit our FAQ for quick answers to common questions.</p>
                        <Link href="/faq" className="mt-3 inline-block text-sm font-bold underline">Go to FAQ</Link>
                    </div>
                    <div className="p-4 border-y sm:border-y-0 sm:border-x border-gray-100">
                        <h3 className="font-bold text-xl">Order Tracking</h3>
                        <p className="mt-2 text-sm text-gray-500">Curious about your delivery? Track it in real-time.</p>
                        <Link href="/track" className="mt-3 inline-block text-sm font-bold underline">Track Order</Link>
                    </div>
                    <div className="p-4">
                        <h3 className="font-bold text-xl">Partnerships</h3>
                        <p className="mt-2 text-sm text-gray-500">Are you a local farmer? We'd love to collaborate.</p>
                        <Link href="/partner" className="mt-3 inline-block text-sm font-bold underline">Become a Partner</Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default ContactPage;