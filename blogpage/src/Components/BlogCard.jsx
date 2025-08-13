export default function BlogCard({ post }) {
    return (
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden group">
            <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                    {post.title}
                </h2>
                <p className="text-gray-700 mb-4 flex-1">{post.description}</p>
                <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold border border-indigo-300">
                        {post.category}
                    </span>
                </div>
            </div>
        </div>
    )
}