import { useState } from 'react';

function NavigationHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-gray-900/80 backdrop-blur-md" id="navbar">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <svg
                        viewBox="0 0 520 120"
                        className="h-12 w-auto sm:h-14"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#1E90FF" stopOpacity={1}/>
                                <stop offset="100%" stopColor="#4169E1" stopOpacity={1}/>
                            </linearGradient>

                            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#1E90FF" stopOpacity={0.8}/>
                                <stop offset="50%" stopColor="#00BFFF" stopOpacity={1}/>
                                <stop offset="100%" stopColor="#1E90FF" stopOpacity={0.8}/>
                            </linearGradient>
                        </defs>

                        {/* Monogram */}
                        <g transform="translate(10, 10)">
                            <path
                                d="M 50 10 L 80 27 L 80 61 L 50 78 L 20 61 L 20 27 Z"
                                fill="none"
                                stroke="url(#accentGradient)"
                                strokeWidth={2}
                                opacity={0.6}
                            />

                            <path
                                d="M 35 30 Q 32 26 35 22 L 55 22 Q 58 22 58 26 Q 58 30 55 32 L 40 38 Q 37 40 37 44 Q 37 48 40 48 L 60 48 Q 63 48 66 51"
                                fill="none"
                                stroke="url(#blueGradient)"
                                strokeWidth={3.5}
                                strokeLinecap="round"
                            />

                            <path
                                d="M 35 50 Q 32 46 35 42 L 55 42 Q 58 42 58 46 Q 58 50 55 52 L 40 58 Q 37 60 37 64 Q 37 68 40 68 L 60 68 Q 63 68 66 71"
                                fill="none"
                                stroke="#FFFFFF"
                                strokeWidth={3.5}
                                strokeLinecap="round"
                                opacity={0.9}
                            />
                        </g>

                        {/* Text */}
                        <g transform="translate(110, 70)">
                            <text
                                x={0}
                                y={0}
                                fontFamily="Inter, Segoe UI, Helvetica Neue, Arial, sans-serif"
                                fontSize={42}
                                fontWeight={700}
                                letterSpacing={2}
                                fill="url(#blueGradient)"
                            >
                                SHEHAN
                            </text>

                            <line
                                x1={0}
                                y1={10}
                                x2={230}
                                y2={10}
                                stroke="url(#accentGradient)"
                                strokeWidth={1.5}
                                opacity={0.5}
                            />
                        </g>

                        {/* Decorative dots */}
                        <circle cx={95} cy={70} r={2.5} fill="#1E90FF" opacity={0.6}/>
                        <circle cx={105} cy={60} r={2} fill="#00BFFF" opacity={0.4}/>
                        <circle cx={102} cy={78} r={2} fill="#1E90FF" opacity={0.5}/>
                    </svg>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="nav-link hover:text-purple-400 transition-colors">Home</a>
                        <a href="#about" className="nav-link hover:text-purple-400 transition-colors">About</a>
                        <a href="#projects" className="nav-link hover:text-purple-400 transition-colors">Projects</a>
                        <a href="#contact" className="nav-link hover:text-purple-400 transition-colors">Contact</a>
                    </div>

                    {/* CTA Button - Desktop */}
                    <a
                        href="#contact"
                        className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-white font-semibold hover:scale-105 transition-transform"
                    >
                        Contact
                    </a>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="py-4 space-y-4">
                        <a
                            href="#home"
                            className="block nav-link hover:text-purple-400 transition-colors py-2"
                            onClick={closeMobileMenu}
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="block nav-link hover:text-purple-400 transition-colors py-2"
                            onClick={closeMobileMenu}
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            className="block nav-link hover:text-purple-400 transition-colors py-2"
                            onClick={closeMobileMenu}
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="block nav-link hover:text-purple-400 transition-colors py-2"
                            onClick={closeMobileMenu}
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavigationHeader;