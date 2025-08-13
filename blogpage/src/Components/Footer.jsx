export default function Footer() {
    return (
        <footer className="w-full mt-10 py-6 bg-indigo-700 text-white text-center rounded-t-2xl shadow-lg">
            <div className="container mx-auto px-4">
                <p className="font-semibold text-lg">© {new Date().getFullYear()} Elevvo Blog. All rights reserved.</p>
                <p className="text-sm mt-2">Made with <span className="text-yellow-300">Tailwind CSS</span> & React</p>
            </div>
        </footer>
    )
}