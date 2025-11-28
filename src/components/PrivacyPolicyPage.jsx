import React from 'react';
import SEO from './SEO';

const PrivacyPolicyPage = () => {
    const sections = [
        {
            title: '1. Information We Collect',
            content:
                'We collect personal details (name, contact number, email, age, gender) and medical history shared during consultations. Technical data such as IP addresses and device information may also be captured to enhance platform security.'
        },
        {
            title: '2. How We Use Your Data',
            content:
                'Your information enables us to schedule consultations, deliver telemedicine services, coordinate diagnostics, and provide follow-ups. Aggregated, anonymized data may be used for internal analytics to improve service quality.'
        },
        {
            title: '3. Data Sharing',
            content:
                'We do not sell your personal data. Information may be shared with affiliated healthcare professionals or diagnostic partners strictly for delivering the service you request, and only under confidentiality agreements.'
        },
        {
            title: '4. Data Security',
            content:
                'Administrative, technical, and physical safeguards are implemented to protect your data. While we strive for high security standards, no method of transmission over the internet is completely risk-free.'
        },
        {
            title: '5. Cookies & Tracking',
            content:
                'Cookies and similar technologies help us remember user preferences and measure site performance. You can modify browser settings to reject cookies, but certain features may not function correctly.'
        },
        {
            title: '6. Your Rights',
            content:
                'You may request access to, correction of, or deletion of your personal data by emailing privacy@zoehealthcare.com. We will respond in accordance with applicable data protection laws.'
        },
        {
            title: '7. Data Retention',
            content:
                'Medical records are retained only for as long as required to comply with legal obligations and provide ongoing care. Once no longer needed, data is securely deleted or anonymized.'
        },
        {
            title: '8. Policy Updates',
            content:
                'We may update this policy periodically. Continued use of our services after updates indicates your acceptance of the revised policy.'
        }
    ];

    return (
        <>
            <SEO
                title="Privacy Policy | ZOE Healthcare"
                description="Learn how ZOE Healthcare collects, uses, and safeguards your personal data across telemedicine, diagnostics, and home care services."
                canonicalUrl="https://zoe-healthcare.com/privacy"
            />
            <section className="min-h-screen bg-gray-50 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
                        <h1 className="text-4xl font-bold text-primary-900 mb-4">Privacy Policy</h1>
                        <p className="text-gray-600 mb-10">
                            ZOE Healthcare is committed to protecting your privacy. This policy outlines the type of
                            information we collect, how it is used, and the choices you have regarding your personal data.
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
                            <h3 className="text-xl font-semibold text-primary-900 mb-2">Questions About Privacy?</h3>
                            <p className="text-gray-700">
                                Contact our Data Protection Officer at{' '}
                                <a href="mailto:privacy@zoehealthcare.com" className="text-accent-600 font-medium">
                                    privacy@zoehealthcare.com
                                </a>{' '}
                                for any clarifications or requests related to your data rights.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicyPage;

