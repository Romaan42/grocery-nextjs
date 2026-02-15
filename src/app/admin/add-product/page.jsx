"use client"
import { useState } from "react"
import { MdDeleteForever } from "react-icons/md";


export default function AddProduct() {
    const [image, setImage] = useState(null)
    const [serverImage, setServerImage] = useState(null)
    const [errors, setErrors] = useState(null)
    const [message, setMessage] = useState()
    const [loading, setLoading] = useState(false)

    const onAction = async (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        data.append("image", serverImage)
        if (!serverImage) {
            return alert("image is required")
        }
        try {
            setLoading(true)
            const res = await fetch("/api/product", {
                method: "POST",
                body: data
            })
            const result = await res.json()
            setLoading(false)
            if (!result.success) {
                return setErrors(result.message)
            }

            setMessage(result.message)
            alert(result.message)
            setImage(null)
            setServerImage(null)

        } catch (error) {
            setErrors("something went wrong!")
        }


    }


    const onChangeImage = (e) => {
        const file = e.target.files[0]
        setImage(URL.createObjectURL(file))
        setServerImage(file)

    }

    const onRemoveImage = () => {
        setImage(null)
        setServerImage(null)
    }

    if (loading) return <h1>Loading...</h1>
    return (
        <div className="w-full flex justify-center">
            <div className="min-h-screen bg-gray-50 p-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-2xl font-semibold text-gray-800">
                            Add New Product
                        </h1>
                        <p className="text-sm text-gray-500">
                            Fill in the details below to create a new product
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white rounded-2xl shadow-sm p-6">
                        {errors && <p className="text-xs py-4 text-red-500">{errors}</p>}
                        {message && <p className="text-xs py-4 text-green-500">{message}</p>}
                        <form className="space-y-6" onSubmit={onAction}>
                            {/* Product Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder="Enter product name"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
                                />
                            </div>

                            {/* Price & Category */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Price
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="$0.00"
                                        name="price"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Category
                                    </label>
                                    <select name="category" className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none">
                                        <option>Select category</option>
                                        <option>vegitables</option>

                                    </select>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Description
                                </label>
                                <textarea
                                    rows="4"
                                    name="description"
                                    placeholder="Write product description..."
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none"
                                />
                            </div>

                            {/* Image Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Product Image
                                </label>
                                <div className="flex items-center justify-center w-full relative group">

                                    {image && <>
                                        <div className="absolute w-full h-full bg-red-300 opacity-0 group-hover:opacity-35"></div>
                                        <div className="absolute w-full h-full hidden group-hover:flex justify-center items-center ">
                                            <button className="bg-red-500 px-2 py-1 rounded-xs text-white cursor-pointer flex items-center" onClick={onRemoveImage}><MdDeleteForever />Remove</button>
                                        </div>
                                    </>}

                                    {image ? <img className="w-40" src={image} /> :
                                        <label className="w-full cursor-pointer rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-indigo-400 transition">
                                            <input type="file" className="hidden" onChange={onChangeImage} />
                                            <p className="text-sm text-gray-500">
                                                Click to upload or drag & drop
                                            </p>
                                            <p className="text-xs text-gray-400 mt-1">
                                                PNG, JPG up to 5MB
                                            </p>
                                        </label>}
                                </div>
                            </div>

                            {/* Status */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-700">
                                        Product Status
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                        Enable or disable this product
                                    </p>
                                </div>
                                <input
                                    type="checkbox"
                                    className="h-5 w-5 accent-indigo-600 cursor-pointer"
                                    defaultChecked
                                />
                            </div>

                            {/* Actions */}
                            <div className="flex justify-end gap-3 pt-4 border-t">
                                <button
                                    type="button"
                                    className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-sm"
                                >
                                    Save Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
