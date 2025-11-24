import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Banner */}
            <section className="bg-primary-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-primary-200 max-w-2xl mx-auto">
                        We&apos;re here to help. Reach out to us for any queries or to book an appointment.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-primary-900 mb-6">Get in Touch</h2>
                                <p className="text-gray-600 text-lg mb-8">
                                    Have questions about our services? Our team is available to assist you.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 text-xl flex-shrink-0">
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary-900 mb-1">Phone</h3>
                                        <p className="text-gray-600">958-12-24-365</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 text-xl flex-shrink-0">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary-900 mb-1">Email</h3>
                                        <p className="text-gray-600">info@zoehealthcare.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 text-xl flex-shrink-0">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary-900 mb-1">Address</h3>
                                        <p className="text-gray-600">
                                            D.No- 10-65, Nallapadu,<br />
                                            GUNTUR, PIN-522005,<br />
                                            Andhra Pradesh
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 text-xl flex-shrink-0">
                                        <FaClock />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary-900 mb-1">Business Hours</h3>
                                        <div className="text-gray-600 space-y-1">
                                            <p><span className="font-medium">Consultations:</span></p>
                                            <p>Mon - Fri: 10:00 AM - 8:00 PM</p>
                                            <p>Sat - Sun: 10:00 AM - 2:00 PM</p>
                                            <p className="mt-2"><span className="font-medium text-accent-600">Diagnostics & Pharmacy:</span></p>
                                            <p>24/7 - 365 Days</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="bg-gray-200 rounded-3xl overflow-hidden min-h-[400px] relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.663290422468!2d80.3963!3d16.2916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDE3JzI5LjgiTiA4MMKwMjMnNDYuNyJF!5e0!3m2!1sen!2sin!4v1635765432109!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Location Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
