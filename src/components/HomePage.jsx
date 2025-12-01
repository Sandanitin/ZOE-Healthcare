import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserMd, FaMicroscope, FaPills, FaUserNurse, FaBrain, FaAppleAlt } from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';
import SEO from './SEO';

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

    const handleWhatsAppClick = (serviceName) => {
        const message = `Hi ZEO Healthcare, I'm interested in ${serviceName}. Please share more details.`;
        const whatsappUrl = `https://wa.me/919581224365?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

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
        <>
            <SEO 
                title="Expert Healthcare Services at Your Convenience"
                description="ZEO Healthcare brings doctor consultations, diagnostic tests, pharmacy support, home nursing care, counselling & nutrition services — all in one place. Accessible, reliable, and patient-focused care."
                keywords="healthcare services, doctor consultations, diagnostic services, pharmacy, home nursing, medical counselling, nutrition services, telemedicine, online doctor"
                canonicalUrl="https://zoe-healthcare.com/"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "HealthcareOrganization",
                    "name": "ZEO Healthcare",
                    "url": "https://zoe-healthcare.com",
                    "logo": "https://zoe-healthcare.com/images/logo.png",
                    "description": "Complete healthcare services including doctor consultations, diagnostics, pharmacy, home nursing, counselling and nutrition services.",
                    "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "IN",
                        "addressLocality": "Multiple Cities",
                        "addressRegion": "India"
                    },
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91-9876543210",
                        "contactType": "customer service",
                        "availableLanguage": ["English", "Hindi"]
                    },
                    "sameAs": [
                        "https://www.facebook.com/ZEOHealthcare",
                        "https://www.twitter.com/ZEOHealthcare",
                        "https://www.instagram.com/ZEOHealthcare"
                    ],
                    "openingHours": "Mo-Su 00:00-23:59",
                    "priceRange": "$$",
                    "serviceType": [
                        "Doctor Consultation",
                        "Diagnostic Services",
                        "Pharmacy Services",
                        "Home Nursing",
                        "Medical Counselling",
                        "Nutrition Services"
                    ]
                }}
            />
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
                                ? 'w-8 bg-white'
                                : 'w-3 bg-white/50 hover:bg-white/75'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* Services Section */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Our Healthcare Services</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Comprehensive medical solutions tailored to your needs. From consultations to home care, we cover it all.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col ${
                                    service.highlight ? 'border-accent-300 border-2' : ''
                                    }`}
                            >
                                <div className="text-accent-600 text-3xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-bold text-primary-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                                <button
                                    onClick={() => handleWhatsAppClick(service.title)}
                                    className="text-accent-600 font-semibold hover:text-accent-700 transition-colors flex items-center gap-2"
                                >
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Why Choose ZEO Healthcare?</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            We combine medical expertise with cutting-edge technology to deliver exceptional healthcare services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold text-primary-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-primary-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Quality Healthcare?</h2>
                    <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
                        Join thousands of satisfied patients who trust ZEO Healthcare for their medical needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => openBooking('General Consultation')}
                            className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                        >
                            Book Consultation
                        </button>
                        <Link
                            to="/contact"
                            className="border-2 border-white text-white hover:bg-white hover:text-primary-900 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg text-center"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default HomePage;