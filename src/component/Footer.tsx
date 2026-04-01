const Footer = () => {
    return (
        <footer className="glass-dark py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/*Brand*/}
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-2xl font-bold gradient-text mb-4">Shehan Silva</div>

                        <p className="text-gray-300 mb-6 max-w-md">
                            Full-stack developer specializing in backend systems, secure authentication,
                            and scalable applications using Spring Boot, REST APIs, and modern DevOps practices.
                        </p>

                        <div className="flex gap-4">
                            {/* Keep your icons SAME (no change) */}
                        </div>
                    </div>

                    {/*Quick Links (unchanged)*/}
                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
                            <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
                            <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
                            <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/*Services → UPDATED*/}
                    <div>
                        <h4 className="font-bold mb-4">Expertise</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-300">Backend Development</li>
                            <li className="text-gray-300">REST API Design & Integration</li>
                            <li className="text-gray-300">Authentication & Security</li>
                            <li className="text-gray-300">Database Design</li>
                            <li className="text-gray-300">DevOps & Deployment</li>
                        </ul>
                    </div>

                </div>

                {/*Bottom Footer*/}
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-300 text-sm mb-4 md:mb-0">
                        © 2026 Shehan Silva. Built for Full-Stack, Backend & DevOps roles.
                    </div>

                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
                        <a href="#" className="text-gray-300 hover:text-white">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;