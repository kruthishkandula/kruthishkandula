const Copyright = () => {
    return (
        <footer id="copyright" className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6">
                {/* Main Footer Content */}
                <div className="py-8 grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <h3 className="font-bold text-lg mb-3">Kruthish Kandula</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Full-Stack React Native Developer specializing in cross-platform mobile applications,
                            fintech solutions, and modern web technologies.
                        </p>
                        <div className="flex space-x-4">
                            <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded">
                                React Native Expert
                            </span>
                            <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-2 py-1 rounded">
                                3+ Years Experience
                            </span>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3">Quick Links</h4>
                        <ul className="space-y-2 flex flex-row md:flex-col gap-x-4 text-sm">
                            <li><a href="#home" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Home</a></li>
                            <li><a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">About</a></li>
                            <li><a href="#projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Projects</a></li>
                            <li><a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="border-t border-slate-200 dark:border-slate-700 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            © 2025 Kruthish Kandula. All rights reserved. |
                            <span className="ml-1">Portfolio v2.0</span>
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2 md:mt-0">
                            Built with Next.js, TypeScript & Tailwind CSS
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Copyright