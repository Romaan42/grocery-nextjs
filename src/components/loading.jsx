import React from 'react'

const Loading = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6">
            {[1, 2, 3, 4, 5].map((val) => (
                <div key={val} className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 animate-pulse">
                    <div className="w-full aspect-square bg-gray-200 rounded-2xl mb-4"></div>

                    <div className="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>

                    <div className="h-5 bg-gray-200 rounded w-full mb-6"></div>

                    <div className="flex justify-between items-end">
                        <div className="space-y-2 w-1/3">
                            <div className="h-3 bg-gray-200 rounded w-full"></div> <div className="h-8 bg-gray-200 rounded w-full"></div> </div>
                        <div className="h-6 bg-gray-200 rounded-lg w-12"></div>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default Loading