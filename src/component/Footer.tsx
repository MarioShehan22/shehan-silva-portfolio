const Footer = () => {
    return (
        <footer className="glass-dark py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/*Brand*/}
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-2xl font-bold gradient-text mb-4">Shehan Silva</div>
                        <p className="text-gray-300 mb-6 max-w-md">
                            Full-stack developer passionate about creating exceptional digital experiences that drive
                            business growth and user engagement.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://stackoverflow.com/users/21095248/shehan-mario"
                               className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-purple-500 hover:bg-opacity-20 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M15.1348 2.50733C14.8547 2.03139 14.2379 1.86617 13.7573 2.13828C13.2767 2.4104 13.1143 3.01681 13.3945 3.49274L17.6136 10.6594L11.7009 4.86089C11.3066 4.47419 10.6673 4.47419 10.273 4.86089C9.87866 5.24759 9.87866 5.87455 10.273 6.26125L16.2673 12.1399L9.02076 8.03684C8.54016 7.76473 7.92342 7.92995 7.64323 8.40589C7.36304 8.88182 7.5255 9.48823 8.0061 9.76035L15.4385 13.9686L7.26356 11.8204C6.72941 11.6801 6.1784 11.9982 6.03283 12.5309C5.88727 13.0637 6.20229 13.6093 6.73644 13.7497L15.3001 16H7C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18H17C17.5523 18 18 17.5523 18 17C18 16.6823 17.8519 16.3993 17.6209 16.2161C17.7958 16.086 17.93 15.8989 17.9917 15.6734C18.0661 15.4009 18.0201 15.125 17.8858 14.9017C18.0828 14.82 18.2557 14.6766 18.3713 14.4802C18.5095 14.2455 18.54 13.9791 18.4779 13.7368C18.6834 13.7061 18.8811 13.6132 19.0393 13.458C19.2258 13.2751 19.3241 13.0385 19.3342 12.7989C19.5443 12.8256 19.7641 12.7875 19.961 12.676C20.4416 12.4039 20.6041 11.7975 20.3239 11.3215L15.1348 2.50733ZM4 17C4 16.4477 3.55228 16 3 16C2.44772 16 2 16.4477 2 17V18C2 20.2092 3.79086 22 6 22H18C20.2091 22 22 20.2092 22 18V17C22 16.4477 21.5523 16 21 16C20.4477 16 20 16.4477 20 17V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V17Z"/>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/shehan-mario-7395a8251/"
                               className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-blue-600 hover:bg-opacity-20 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a href="https://github.com/MarioShehan22"
                               className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-gray-600 hover:bg-opacity-20 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/*Quick Links*/}
                    <div>
                        <h4 className="font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                            </li>
                            <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                            </li>
                            <li><a href="#projects"
                                   className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
                            <li><a href="#testimonials"
                                   className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
                            <li><a href="#contact"
                                   className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/*Services*/}
                    <div>
                        <h4 className="font-bold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Web
                                Development</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mobile Apps</a>
                            </li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API
                                Development</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">UI/UX
                                Design</a></li>
                            <li><a href="#"
                                   className="text-gray-300 hover:text-white transition-colors">Consultation</a></li>
                        </ul>
                    </div>
                </div>

                {/*Bottom Footer*/}
                <div
                    className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-300 text-sm mb-4 md:mb-0">
                        © 2024 Shehan Silva. All rights reserved.
                    </div>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;