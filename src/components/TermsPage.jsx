import React from 'react';
import SEO from './SEO';

const TermsPage = () => {
    const sections = [
        {
            title: '1. Acceptance of Terms',
            content:
                'By accessing or using the services offered by ZOE Healthcare, you agree to comply with these Terms & Conditions. If you do not agree with any part of the terms, you must discontinue use of our services immediately.'
        },
        {
            title: '2. Services Provided',
            content:
                'We offer telemedicine consultations, diagnostic coordination, pharmacy support, home nursing, counselling, and nutrition services. The scope of each service is subject to availability and may vary by location.'
        },
        {
            title: '3. Medical Disclaimer',
            content:
                'All consultations are provided by licensed healthcare professionals; however, telemedicine cannot replace physical examinations. In case of emergencies, contact local emergency services immediately.'
        },
        {
            title: '4. User Responsibilities',
            content:
                'You agree to provide accurate personal and medical information, keep login credentials confidential, and follow prescribed treatment plans. Misuse of the platform may lead to termination of services.'
        },
        {
            title: '5. Payments & Refunds',
            content:
                'Consultation fees must be paid in advance. Refunds are evaluated on a case-by-case basis and issued only if the service could not be delivered due to technical or scheduling issues attributable to us.'
        },
        {
            title: '6. Data Usage',
            content:
                'We collect and store personal data solely to deliver healthcare services. Detailed information about data handling is provided in our Privacy Policy.'
        },
        {
            title: '7. Limitation of Liability',
            content:
                'ZOE Healthcare and its staff shall not be liable for indirect, incidental, or consequential damages arising from the use of our services, except as required by applicable law.'
        },
        {
            title: '8. Changes to Terms',
            content:
                'We may update these terms periodically. Continued use of our services after changes are posted constitutes acceptance of the revised terms.'
        }
    ];

    return (
        <>
            <SEO
                title="Terms & Conditions | ZOE Healthcare"
                description="Read the terms and conditions that govern your use of ZOE Healthcare services, including telemedicine consultations, diagnostics, and home care."
                canonicalUrl="https://zoe-healthcare.com/terms"
            />
            <section className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                        <h1 className="text-4xl font-bold text-primary-900 mb-4">Terms &amp; Conditions</h1>
                        <p className="text-gray-600 mb-10">
                            These terms govern the use of ZOE Healthcare services. Please read them carefully before booking
                            appointments or using any digital services hosted on our platform.
                        </p>

                        <div className="space-y-8">
                            {sections.map((section, idx) => (
                                <div key={idx}>
                                    <h2 className="text-2xl font-semibold text-primary-800 mb-3">{section.title}</h2>
                                    <p className="text-gray-600 leading-relaxed">{section.content}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 bg-primary-50 border border-primary-100 rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-primary-900 mb-2">Need Clarification?</h3>
                            <p className="text-gray-700">
                                If you have questions about these terms, please reach out to{' '}
                                <a href="mailto:legal@zoehealthcare.com" className="text-accent-600 font-medium">
                                    legal@zoehealthcare.com
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TermsPage;

