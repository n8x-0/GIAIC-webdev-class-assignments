const footer = () => {
    return (
        <footer className="glass text-black py-6 px-3">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-2">About</h3>
                    <p className="text-gray-700">
                        Welcome to our modern blog where we share the latest insights and tips. Explore our various categories and stay updated!
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-2">Quick Links</h3>
                    <ul>
                        <li className="mb-1 text-gray-600">About Us</li>
                        <li className="mb-1 text-gray-600">Categories</li>
                        <li className="mb-1 text-gray-600">Contact</li>
                        <li className="mb-1 text-gray-600">Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-2">Subscribe</h3>
                    <p className="text-gray-700 mb-4">Get the latest articles directly to your inbox.</p>
                    <form>
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-4 py-2 w-full bg-[#EFF2F9] text-black rounded-lg mb-4 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-black text-white px-4 py-2 rounded-lg w-full hover:bg-gray-800 transition-all"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="border-t border-gray-200 mt-6 pt-6 text-center text-gray-500 text-sm">
                <p>&copy; 2024 Blog Spot. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default footer