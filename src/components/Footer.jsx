import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useBooking } from '../context/BookingContext';

const Footer = () => {
    const { openBooking } = useBooking();

    const services = [
        'Doctor Consultations',
        'Diagnostic Tests',
        'Pharmacy Services',
        'Home Nursing',
        'Counselling',
        'Nutrition'
    ];

    return (
        <footer className="bg-primary-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <Link to="/" className="flex items-center mb-6">
                            <span className="text-3xl font-bold text-white">ZEO</span>
                            <span className="text-3xl font-light text-accent-500 ml-1">Healthcare</span>
                        </Link>
                        <p className="text-primary-200 mb-6 leading-relaxed">
                            Providing accessible, compassionate, and high-quality healthcare services to our community.
                            Your health is our priority.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors">
                                <FaFacebook />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors">
                                <FaTwitter />
                            </a>
                            <a
                                href="https://www.instagram.com/zoe_health_care?igsh=dzc4dDZxdnJmbzc4&utm_source=qr"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors"
                            >
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/" className="text-primary-200 hover:text-accent-500 transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-primary-200 hover:text-accent-500 transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-primary-200 hover:text-accent-500 transition-colors">Services</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-primary-200 hover:text-accent-500 transition-colors">Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Our Services</h3>
                        <ul className="space-y-4">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <button 
                                        onClick={() => openBooking(service)}
                                        className="text-primary-200 hover:text-accent-500 transition-colors text-left w-full"
                                    >
                                        {service}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-primary-200">
                                <FaMapMarkerAlt className="mt-1 text-accent-500" />
                                <span>D.No- 10-65, Nallapadu, GUNTUR, PIN-522005, Andhra Pradesh</span>
                            </li>
                            <li className="flex items-center gap-3 text-primary-200">
                                <FaPhone className="text-accent-500" />
                                <span>958-12-24-365</span>
                            </li>
                            <li className="flex items-center gap-3 text-primary-200">
                                <FaEnvelope className="text-accent-500" />
                                <span>info@zoehealthcare.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8">
                    <p className="text-primary-300 text-center mb-4">
                        &copy; {new Date().getFullYear()} ZEO Healthcare. All rights reserved.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-300">
                        <Link to="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
                        <span className="text-white/30">|</span>
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;