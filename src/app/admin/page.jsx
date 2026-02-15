import { GoPackage } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { ImArrowUpRight2 } from "react-icons/im";
import { FaDollarSign, FaPlus } from "react-icons/fa";
import { getProducts } from "@/lib/getCartItems";

export default async function AdminDashboard() {

    const { data } = await getProducts();

    return (
        <div className="flex w-full min-h-screen bg-slate-50/50">
            {/* Main Content */}
            <main className="flex-1 p-6 lg:p-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                            Dashboard Overview
                        </h2>
                        <p className="text-slate-500 text-sm">Welcome back! Here’s what’s happening today.</p>
                    </div>
                    <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-all shadow-sm w-fit">
                        <FaPlus size={18} />
                        <span>Add Product</span>
                    </button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    <StatCard
                        title="Total Products"
                        value="128"
                        icon={<GoPackage className="text-blue-600" />}
                        trend="+12% from last month"
                    />
                    <StatCard
                        title="Total Orders"
                        value="542"
                        icon={<FaShoppingCart className="text-emerald-600" />}
                        trend="+5.4% from last month"
                    />
                    <StatCard
                        title="Total Revenue"
                        value="₹84,320"
                        icon={<FaDollarSign className="text-amber-600" />}
                        trend="+18% from last month"
                    />
                </div>

                {/* Recent Products Table */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-slate-800">Recent Products</h3>
                        <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">View All</button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Product Name</th>
                                    <th className="px-6 py-4 font-semibold">Category</th>
                                    <th className="px-6 py-4 font-semibold">Price</th>
                                    <th className="px-6 py-4 font-semibold">Stock Status</th>
                                    <th className="px-6 py-4 font-semibold text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
                                {data.map((item) => (
                                    <tr key={item._id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900">{item.title}</td>
                                        <td className="px-6 py-4">
                                            <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md text-xs">{item.category}</span>
                                        </td>
                                        <td className="px-6 py-4">{item.price}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                3 units
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-400 hover:text-indigo-600 transition-colors px-2">Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}

/* Sub-components for cleaner code */
function StatCard(item) {
    const { title, value, icon, trend } = item;
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">{title}</p>
                    <h3 className="text-3xl font-bold mt-2 text-slate-800">{value}</h3>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">{icon}</div>
            </div>
            <div className="mt-4 flex items-center text-xs font-medium text-emerald-600">
                <ImArrowUpRight2 size={14} className="mr-1" />
                {trend}
            </div>
        </div>
    );
}
