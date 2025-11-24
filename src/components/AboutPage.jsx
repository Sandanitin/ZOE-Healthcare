import React from 'react';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Banner */}
            <section className="bg-primary-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
                    <p className="text-xl text-primary-200 max-w-2xl mx-auto">
                        Dedicated to providing exceptional healthcare with a personal touch.
                    </p>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                                <img
                                    src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2000&auto=format&fit=crop"
                                    alt="Medical Team"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                                    <p className="text-white text-lg italic font-medium">
                                        &ldquo;We treat every patient with empathy, kindness, and understanding.&rdquo;
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 md:order-2">
                            <span className="text-accent-600 font-bold tracking-wider uppercase text-sm mb-2 block">
                                Who We Are
                            </span>
                            <h2 className="text-4xl font-bold text-primary-900 mb-6">
                                Redefining Healthcare Accessibility
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                ZOE Healthcare is a comprehensive health service provider offering medical consultations,
                                diagnostic laboratory services, pharmacy support, home nursing care, counselling, and
                                nutrition guidance.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Our mission is to deliver accessible and compassionate healthcare by blending technology
                                with professional expertise, making quality medical care available to everyone.
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 text-center">
                                    <div className="text-4xl font-bold text-accent-600 mb-2">5+</div>
                                    <div className="text-primary-900 font-medium">Years Experience</div>
                                </div>
                                <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 text-center">
                                    <div className="text-4xl font-bold text-accent-600 mb-2">10k+</div>
                                    <div className="text-primary-900 font-medium">Happy Patients</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl">🎯</span>
                                <h3 className="text-3xl font-bold text-primary-900">Our Mission</h3>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To deliver accessible and compassionate healthcare by blending technology with
                                professional expertise. We strive to make quality medical services available to
                                everyone, regardless of location or circumstance.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl">🌟</span>
                                <h3 className="text-3xl font-bold text-primary-900">Our Vision</h3>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                We aim to become a trusted healthcare partner for families by offering round-the-clock
                                medical support and home-based services that prioritize patient comfort, safety, and wellbeing.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
