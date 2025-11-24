import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserMd, FaMicroscope, FaPills, FaUserNurse, FaBrain, FaAppleAlt } from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { openBooking } = useBooking();

    // Hero slides with images
    const heroSlides = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1920&auto=format&fit=crop',
            title: 'Expert Doctor Consultations',
            subtitle: 'Professional healthcare at your fingertips'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1920&auto=format&fit=crop',
            title: 'Advanced Diagnostic Services',
            subtitle: 'Accurate testing with state-of-the-art equipment'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1920&auto=format&fit=crop',
            title: 'Compassionate Home Care',
            subtitle: 'Quality nursing care in the comfort of your home'
        }
    ];

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [heroSlides.length]);

    const services = [
        {
            icon: <FaUserMd />,
            title: 'Online Consultations',
            description: 'Expert medical advice from certified doctors at your convenience',
            highlight: true
        },
        {
            icon: <FaMicroscope />,
            title: 'Diagnostics',
            description: 'At-home sample collection & trusted lab results',
            highlight: true
        },
        {
            icon: <FaPills />,
            title: 'Pharmacy',
            description: 'Fast and reliable medicine delivery 24/7',
            highlight: true
        },
        {
            icon: <FaUserNurse />,
            title: 'Home Nursing',
            description: 'Skilled nursing services at your doorstep'
        },
        {
            icon: <FaBrain />,
            title: 'Counselling',
            description: 'Mental health support for all ages'
        },
        {
            icon: <FaAppleAlt />,
            title: 'Nutrition',
            description: 'Personalized diet and wellness plans'
        }
    ];

    const benefits = [
        {
            icon: '🕐',
            title: '24/7 Availability',
            description: 'Diagnostics & Pharmacy available round the clock'
        },
        {
            icon: '👥',
            title: 'Expert Team',
            description: 'Certified and experienced healthcare professionals'
        },
        {
            icon: '💰',
            title: 'Affordable Care',
            description: 'Safe and cost-effective services'
        },
        {
            icon: '🏠',
            title: 'Home-Based Care',
            description: 'Comfort and convenience at your doorstep'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative h-[600px] overflow-hidden">
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        {/* Background Image with Overlay */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-linear transform scale-105"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)'
                            }}
                        />
                        {/* Removed blue gradient overlay as requested */}
                        <div className="absolute inset-0 bg-black/40" />

                        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                            <div className="text-white max-w-3xl text-center animate-fade-in">
                                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-lg">
                                    {slide.title}
                                </h1>
                                <p className="text-lg md:text-2xl font-light mb-6 md:mb-8 text-gray-100 drop-shadow-md">
                                    {slide.subtitle}
                                </p>
                                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                                    <button
                                        onClick={() => openBooking('General Consultation')}
                                        className="btn-accent text-base md:text-lg px-8 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all w-full md:w-auto"
                                    >
                                        Book Consultation
                                    </button>
                                    <Link to="/services" className="px-8 py-3 md:py-4 rounded-full border-2 border-white text-white hover:bg-white hover:text-primary-900 transition-all duration-300 font-semibold text-base md:text-lg shadow-lg w-full md:w-auto block text-center">
                                        Explore Services
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Slide Indicators */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-accent-500 w-10'
                                : 'bg-white/50 w-3 hover:bg-white'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* Intro Section */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-accent-600 font-bold tracking-wider uppercase text-sm mb-2 block">
                        Welcome to ZOE Healthcare
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight">
                        Complete Healthcare Services at <span className="text-accent-600">Your Convenience</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        ZOE Healthcare brings doctor consultations, diagnostic tests, pharmacy support,
                        home nursing care, counselling & nutrition services — all in one place.
                        Accessible, reliable, and patient-focused care designed for your modern lifestyle.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-primary-900 mb-4">Our Core Services</h2>
                        <div className="w-24 h-1 bg-accent-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary-50 text-4xl flex items-center justify-center mb-6 group-hover:bg-primary-900 group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-primary-700">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="flex items-center gap-4 mt-6">
                                    <Link to="/services" className="text-accent-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Learn More <span>→</span>
                                    </Link>
                                    <a
                                        href="https://wa.me/919876543210?text=Hi%20ZOE%20Healthcare,%20I'm%20interested%20in%20your%20services"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-green-600 font-semibold flex items-center gap-2 hover:text-green-700 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 9.888-5.335 9.891-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
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
                                <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
                                    <div className="text-4xl font-bold text-accent-600 mb-2">5+</div>
                                    <div className="text-primary-900 font-medium">Years Experience</div>
                                </div>
                                <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
                                    <div className="text-4xl font-bold text-accent-600 mb-2">10k+</div>
                                    <div className="text-primary-900 font-medium">Happy Patients</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2000&auto=format&fit=crop"
                                    alt="Medical Team"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block border border-gray-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 text-2xl">
                                        🏥
                                    </div>
                                    <div>
                                        <p className="font-bold text-primary-900">Trusted Care</p>
                                        <p className="text-sm text-gray-600">Excellence in every service</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-primary-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-800 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-600 rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Why Choose ZOE Healthcare?</h2>
                        <p className="text-primary-200 text-lg max-w-2xl mx-auto">
                            We are dedicated to providing the best care for you and your family with our comprehensive approach to health and wellness.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="text-5xl mb-6">{benefit.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                                <p className="text-primary-200">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-primary-50 rounded-3xl p-10 border border-primary-100">
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

                        <div className="bg-accent-50 rounded-3xl p-10 border border-accent-100">
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

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-6">Ready to Prioritize Your Health?</h2>
                    <p className="text-xl text-white/90 mb-10">
                        Book a consultation today and experience healthcare reimagined.
                    </p>
                    <button
                        onClick={() => openBooking('General Consultation')}
                        className="bg-white text-accent-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-block"
                    >
                        Book Appointment Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
