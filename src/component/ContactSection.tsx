function ContactSection() {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Let's Work Together</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Ready to bring your ideas to life? Let's discuss your project and see how I can help you achieve
                        your goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/*Contact Form*/}
                    <div className="glass p-8 rounded-3xl">
                        <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
                        <form className="space-y-6" id="contact-form">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input type="text" id="name" name="name" required
                                       className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                                <input type="email" id="email" name="email" required
                                       className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"/>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                                <select id="subject" name="subject" required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-purple-500 focus:outline-none transition-colors">
                                    <option value="">Select a subject</option>
                                    <option value="web-development">Web Development</option>
                                    <option value="mobile-app">Mobile App Development</option>
                                    <option value="consultation">Technical Consultation</option>
                                    <option value="maintenance">Maintenance & Support</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Project
                                    Details</label>
                                <textarea id="message" name="message" rows={6} required
                                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
                                          placeholder="Tell me about your project, timeline, and requirements..."></textarea>
                            </div>
                            <button type="submit"
                                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold hover:scale-105 transition-transform glow">
                                Send Message 🚀
                            </button>
                        </form>
                    </div>

                    {/*Contact Info*/}
                    <div className="space-y-8">
                        {/*Quick Contact*/}
                        <div className="glass p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
                            <div className="space-y-4">
                                <a href="mailto:marioshehan025@gmail.com"
                                   className="flex items-center gap-4 p-4 glass-dark rounded-2xl hover:bg-purple-500 hover:bg-opacity-20 transition-colors">
                                    <div
                                        className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                        📧
                                    </div>
                                    <div>
                                        <div className="font-semibold">Email</div>
                                        <div className="text-gray-300">marioshehan025@gmail.com</div>
                                    </div>
                                </a>
                                <a href="tel:+94123456789"
                                   className="flex items-center gap-4 p-4 glass-dark rounded-2xl hover:bg-blue-500 hover:bg-opacity-20 transition-colors">
                                    <div
                                        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                                        📞
                                    </div>
                                    <div>
                                        <div className="font-semibold">Phone</div>
                                        <div className="text-gray-300">+94 12 345 6789</div>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4 p-4 glass-dark rounded-2xl">
                                    <div
                                        className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                                        🌍
                                    </div>
                                    <div>
                                        <div className="font-semibold">Location</div>
                                        <div className="text-gray-300">Jaela, Sri Lanka</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*Availability*/}
                        <div className="glass p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-4">Availability</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span>Monday - Friday</span>
                                    <span className="text-green-400">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Saturday</span>
                                    <span className="text-yellow-400">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Sunday</span>
                                    <span className="text-red-400">Emergency Only</span>
                                </div>
                            </div>
                            <div
                                className="mt-4 p-3 bg-green-500 bg-opacity-20 rounded-xl border border-green-500 border-opacity-30">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                    <span className="text-green-300">Currently available for new projects</span>
                                </div>
                            </div>
                        </div>

                        {/*Social Links*/}
                        <div className="glass p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold mb-6">Connect with me</h3>
                            <div className="flex flex-wrap gap-4">
                                <a href="#"
                                   className="flex items-center gap-3 px-4 py-3 glass-dark rounded-xl hover:bg-blue-500 hover:bg-opacity-20 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                    </svg>
                                    <span>Twitter</span>
                                </a>
                                <a href="#"
                                   className="flex items-center gap-3 px-4 py-3 glass-dark rounded-xl hover:bg-blue-600 hover:bg-opacity-20 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                    <span>LinkedIn</span>
                                </a>
                                <a href="#"
                                   className="flex items-center gap-3 px-4 py-3 glass-dark rounded-xl hover:bg-gray-600 hover:bg-opacity-20 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;