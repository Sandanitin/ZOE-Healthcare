import React from 'react';
import { useBooking } from '../context/BookingContext';

const ServicesPage = () => {
    const { openBooking } = useBooking();
    const services = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop',
            title: 'Online Consultations',
            description: 'Connect with expert doctors from the comfort of your home. Get professional medical advice, prescriptions, and follow-up care via video or audio calls.',
            features: ['Certified Doctors', 'Instant Appointments', 'Digital Prescriptions', 'Follow-up Support']
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800&auto=format&fit=crop',
            title: 'Diagnostic Tests',
            description: 'Comprehensive lab testing services with home sample collection. Accurate results delivered digitally to your phone.',
            features: ['Home Collection', 'NABL Accredited Labs', 'Digital Reports', 'Affordable Packages']
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop',
            title: 'Pharmacy Services',
            description: 'Order medicines online and get them delivered to your doorstep. We ensure genuine products and timely delivery.',
            features: ['Genuine Medicines', 'Fast Delivery', 'Cold Chain Storage', 'Refill Reminders']
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop',
            title: 'Home Nursing',
            description: 'Professional nursing care at home for post-operative care, elderly care, and chronic disease management.',
            features: ['Qualified Nurses', '24/7 Support', 'Critical Care', 'Elderly Care']
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop',
            title: 'Counselling',
            description: 'Mental health support and counselling services for individuals of all ages. Safe, confidential, and professional.',
            features: ['Expert Psychologists', 'Confidential Sessions', 'Stress Management', 'Child Counselling']
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop',
            title: 'Nutrition',
            description: 'Personalized diet plans and nutrition guidance to help you achieve your health and wellness goals.',
            features: ['Custom Diet Plans', 'Weight Management', 'Clinical Nutrition', 'Lifestyle Coaching']
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Banner */}
            <section className="bg-primary-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-primary-200 max-w-2xl mx-auto">
                        Comprehensive healthcare solutions tailored to your needs. From consultations to home care, we cover it all.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                                {/* Image Section */}
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-6 flex-grow">
                                    <h3 className="text-xl font-bold text-primary-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-xs font-medium text-gray-500">
                                                <span className="text-accent-500 mr-2 font-bold">✓</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="px-6 pb-6">
                                    <button
                                        onClick={() => openBooking(service.title)}
                                        className="btn-primary w-full py-2 text-sm rounded-lg"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary-900 mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600">Got questions? We&apos;ve got answers.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: 'How do I book a consultation?', a: 'You can book a consultation through our website by clicking the "Book Now" button or by calling our support number.' },
                            { q: 'Are your doctors certified?', a: 'Yes, all our doctors are fully certified and experienced professionals vetted by our medical board.' },
                            { q: 'Do you offer home sample collection?', a: 'Yes, we offer home sample collection for all diagnostic tests at no extra cost.' },
                            { q: 'Is pharmacy delivery available 24/7?', a: 'Yes, our pharmacy partners operate 24/7 to ensure you get your medicines whenever you need them.' }
                        ].map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-primary-200 transition-colors">
                                <h3 className="text-lg font-bold text-primary-900 mb-2">{faq.q}</h3>
                                <p className="text-gray-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
