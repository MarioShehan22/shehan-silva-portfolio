function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">What Clients Say</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Don't just take my word for it - here's what some of my clients have to say about working with
                        me.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/*Testimonial 1*/}
                    <div className="glass p-8 rounded-3xl">
                        <div className="flex items-center mb-6">
                            <div
                                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                A
                            </div>
                            <div>
                                <h4 className="font-bold">Alex Johnson</h4>
                                <p className="text-gray-400 text-sm">CEO, TechStart</p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex text-yellow-400">
                                ★★★★★
                            </div>
                        </div>
                        <p className="text-gray-300 italic">"Shehan delivered an exceptional web application that
                            exceeded our expectations. His attention to detail and technical expertise made the entire
                            process smooth and efficient."</p>
                    </div>

                    {/*Testimonial 2 */}
                    <div className="glass p-8 rounded-3xl">
                        <div className="flex items-center mb-6">
                            <div
                                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                S
                            </div>
                            <div>
                                <h4 className="font-bold">Sarah Chen</h4>
                                <p className="text-gray-400 text-sm">Founder, EcoMarket</p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex text-yellow-400">
                                ★★★★★
                            </div>
                        </div>
                        <p className="text-gray-300 italic">"Working with Shehan was a game-changer for our startup. He
                            not only built our e-commerce platform but also provided valuable insights on user
                            experience and scalability."</p>
                    </div>

                    {/*Testimonial 3 */}
                    <div className="glass p-8 rounded-3xl">
                        <div className="flex items-center mb-6">
                            <div
                                className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                M
                            </div>
                            <div>
                                <h4 className="font-bold">Michael Rodriguez</h4>
                                <p className="text-gray-400 text-sm">CTO, DataFlow</p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex text-yellow-400">
                                ★★★★★
                            </div>
                        </div>
                        <p className="text-gray-300 italic">"Shehan's full-stack expertise helped us build a robust
                            analytics dashboard. His code quality and documentation are top-notch, making future
                            maintenance a breeze."</p>
                    </div>
                </div>

                {/*Stats Section*/}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                    <div className="text-center">
                        <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                        <div className="text-gray-300">Project Success Rate</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold gradient-text mb-2">48h</div>
                        <div className="text-gray-300">Avg. Response Time</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold gradient-text mb-2">25+</div>
                        <div className="text-gray-300">Happy Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold gradient-text mb-2">3+</div>
                        <div className="text-gray-300">Years Partnership</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;