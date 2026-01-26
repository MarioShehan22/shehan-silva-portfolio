
function NavigationHeader() {
    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300" id="navbar">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-bold gradient-text">SS</div>

                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="nav-link hover:text-purple-400 transition-colors">Home</a>
                        <a href="#about" className="nav-link hover:text-purple-400 transition-colors">About</a>
                        <a href="#projects" className="nav-link hover:text-purple-400 transition-colors">Projects</a>
                        {/*<a href="#testimonials"*/}
                        {/*   className="nav-link hover:text-purple-400 transition-colors">Testimonials</a>*/}
                        <a href="#contact" className="nav-link hover:text-purple-400 transition-colors">Contact</a>
                    </div>

                    <a href="#contact"
                       className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-white font-semibold hover:scale-105 transition-transform glow">
                        Book a Call
                    </a>

                     {/*Mobile menu button*/}
                    <button className="md:hidden p-2" id="mobile-menu-btn">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavigationHeader;