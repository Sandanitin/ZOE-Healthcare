import React from 'react';

const AboutPage = () => {
    const features = [
        {
            title: 'Expert Medical Team',
            description: 'Our team consists of certified doctors, nurses, and healthcare professionals with years of experience in their respective fields.'
        },
        {
            title: 'Advanced Technology',
            description: 'We utilize cutting-edge medical technology and digital platforms to provide accurate diagnoses and efficient services.'
        },
        {
            title: 'Personalized Care',
            description: 'Every patient receives individualized attention and care plans tailored to their specific health needs and conditions.'
        },
        {
            title: '24/7 Support',
            description: 'Our dedicated support team is available around the clock to assist with appointments, inquiries, and emergencies.'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-primary-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">About ZEO Healthcare</h1>
                    <p className="text-xl text-primary-200 max-w-3xl mx-auto">
                        Your trusted partner in health and wellness, providing comprehensive medical services with compassion and expertise.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-primary-900 mb-6">Our Mission</h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                To make quality healthcare accessible to everyone by leveraging technology and compassionate care. 
                                We strive to provide personalized medical solutions that empower our patients to live healthier, 
                                more fulfilling lives.
                            </p>
                            <h2 className="text-3xl font-bold text-primary-900 mb-6">Our Vision</h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                To be the leading healthcare provider that bridges the gap between traditional medicine and 
                                modern technology, creating a seamless healthcare experience that prioritizes patient outcomes 
                                and satisfaction.
                            </p>
                        </div>
                        <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                            <div className="bg-gray-300 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center text-gray-500">
                                Mission & Vision Image
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Why Choose ZEO Healthcare?</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            We combine medical expertise with cutting-edge technology to deliver exceptional healthcare services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
                                <h3 className="text-xl font-bold text-primary-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Our Story</h2>
                    </div>
                    
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 mb-6">
                            ZEO Healthcare was founded with a simple yet powerful vision: to make quality healthcare accessible, 
                            affordable, and convenient for everyone. What started as a small clinic has evolved into a comprehensive 
                            healthcare platform that serves thousands of patients across the region.
                        </p>
                        
                        <p className="text-gray-700 mb-6">
                            Our journey began when our founder, Dr. Nabi Vali, recognized the gaps in traditional healthcare delivery. 
                            With a passion for innovation and patient care, he assembled a team of dedicated professionals who shared 
                            his vision of transforming healthcare through technology and personalized attention.
                        </p>
                        
                        <p className="text-gray-700 mb-6">
                            Today, ZEO Healthcare offers a wide range of services including online consultations, diagnostic testing, 
                            pharmacy services, home nursing care, and specialized wellness programs. Our commitment to excellence 
                            and patient satisfaction has made us a trusted name in healthcare.
                        </p>
                        
                        <p className="text-gray-700">
                            As we continue to grow, our core values remain unchanged: compassion, integrity, innovation, and excellence. 
                            We are dedicated to continuously improving our services and expanding our reach to serve more communities 
                            with the quality healthcare they deserve.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;