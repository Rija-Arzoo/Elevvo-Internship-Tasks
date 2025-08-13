import { useState } from 'react'
import BlogCard from './Components/BlogCard'
import Footer from './Components/Footer'

const blogPosts = [
    {
        id: 1,
        title: 'React Basics',
        image: 'react basics.jpg',
        description: 'Learn the basics of React and component structure.',
        date: '2025-08-01',
        category: 'Tech',
    },
    {
        id: 2,
        title: 'Travel to Japan',
        image: 'travel to japan.jpg',
        description: 'My experience exploring Tokyo and Kyoto.',
        date: '2025-07-20',
        category: 'Travel',
    },
    {
        id: 3,
        title: 'Healthy Food Tips',
        image: 'healthy food tips.jpg',
        description: 'Simple ways to eat healthy every day.',
        date: '2025-07-15',
        category: 'Food',
    },
    {
        id: 4,
        title: 'Advanced JavaScript',
        image: 'advance js.jpg',
        description: 'Deep dive into ES6 features and async programming.',
        date: '2025-06-30',
        category: 'Tech',
    },
    {
        id: 5,
        title: 'Street Food in USA',
        image: 'food point.jpg',
        description: 'Best street food spots in California and Chicago.',
        date: '2025-06-10',
        category: 'Food',
    },
]

const categories = ['All', 'Tech', 'Travel', 'Food']
const POSTS_PER_PAGE = 3

function App() {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)

    const filteredByCategory =
        selectedCategory === 'All'
            ? blogPosts
            : blogPosts.filter((post) => post.category === selectedCategory)

    const filteredPosts = filteredByCategory.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
    )

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
    const paginatedPosts = filteredPosts.slice(
        (page - 1) * POSTS_PER_PAGE,
        page * POSTS_PER_PAGE
    )

    function handleCategoryChange(cat) {
        setSelectedCategory(cat)
        setPage(1)
    }
    function handleSearchChange(e) {
        setSearch(e.target.value)
        setPage(1)
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-indigo-400 px-6 py-14">
                <header className="mb-12 text-center">
                    <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight drop-shadow-lg">
                        Elevvo Blog
                    </h1>
                    <p className="mt-3 text-xl text-gray-700 font-medium">
                        Insights, Stories & Tips
                    </p>
                </header>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
                    <div className="flex gap-3 flex-wrap">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`px-6 py-2 rounded-full font-semibold border shadow transition-all duration-200 ${
                                    selectedCategory === cat
                                        ? 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white border-indigo-600 scale-105'
                                        : 'bg-white text-gray-700 border-gray-300 hover:bg-indigo-50'
                                }`}
                                onClick={() => handleCategoryChange(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <input
                        type="text"
                        placeholder="🔍 Search posts..."
                        value={search}
                        onChange={handleSearchChange}
                        className="px-5 py-2 rounded-full border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white text-gray-700 w-full md:w-72"
                    />
                </div>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
                    {paginatedPosts.length === 0 ? (
                        <p className="col-span-full text-center text-gray-700 text-lg font-semibold">
                            No posts found.
                        </p>
                    ) : (
                        paginatedPosts.map((post) => (
                            <BlogCard post={post} key={post.id} />
                        ))
                    )}
                </section>

                <div className="flex justify-center items-center gap-8 mb-8">
                    <button
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                        className="px-6 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition disabled:opacity-50"
                    >
                        ← Prev
                    </button>
                    <span className="text-gray-900 font-bold text-lg">
                        Page {page} of {totalPages}
                    </span>
                    <button
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPages}
                        className="px-6 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition disabled:opacity-50"
                    >
                        Next →
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App
