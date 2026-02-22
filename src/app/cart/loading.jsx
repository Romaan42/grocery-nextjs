export default function Loader() {
    return (
        <div className="space-y-4">
            {[1, 2, 3].map((item) => (
                <div
                    key={item}
                    className="flex items-center gap-4 p-4 border rounded-lg animate-pulse"
                >
                    {/* Image */}
                    <div className="h-16 w-16 bg-gray-300 rounded-md" />

                    {/* Info */}
                    <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-300 rounded w-3/4" />
                        <div className="h-3 bg-gray-300 rounded w-1/2" />
                    </div>

                    {/* Price */}
                    <div className="h-4 w-16 bg-gray-300 rounded" />
                </div>
            ))}
        </div>
    );
}
