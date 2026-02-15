import Link from "next/link";
import React from "react";


export default function GroceryPage() {
    return (
        <div className="font-sans bg-gray-50">

            <footer className="bg-gray-800 text-white p-6 mt-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <h3 className="font-bold mb-2">Grocery</h3>
                        <p>Your one-stop online grocery store.</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Quick Links</h3>
                        <ul>
                            <li><Link href="/" className="hover:text-red-500">Home</Link></li>
                            <li><Link href="/shop" className="hover:text-red-500">Shop</Link></li>
                            <li><Link href="/contact" className="hover:text-red-500">Contact</Link></li>
                            <li><Link href="/about" className="hover:text-red-500">About</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Contact</h3>
                        <p>Email: romaan4244@gmail.com</p>
                        <p>Phone: +92 341 6479008</p>
                    </div>
                </div>
                <p className="text-center mt-4 text-gray-400">© 2026 Grocery. All rights reserved.</p>
            </footer>
        </div>
    );
}
