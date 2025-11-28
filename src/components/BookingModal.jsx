import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const BookingModal = () => {
    const { isModalOpen, closeBooking, selectedService } = useBooking();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        phone: '',
        gender: '',
        sameNumber: true
    });
    const [errors, setErrors] = useState({});

    if (!isModalOpen) return null;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const getServiceSpecificMessage = (service) => {
        const baseMessage = `*Patient Details:*
Name: ${formData.name}
Age: ${formData.age}
Gender: ${formData.gender}
Phone: ${formData.phone}
WhatsApp same as mobile: ${formData.sameNumber ? 'Yes' : 'No'}`;
        
        switch(service) {
            case 'Doctor Consultations':
            case 'Online Consultations':
                return `Hello, I would like to book a *${service}*.

${baseMessage}

*Consultation Details:*
Preferred consultation type: [Video/Audio/Chat]
Preferred time: [Morning/Afternoon/Evening]`;
            
            case 'Diagnostic Tests':
            case 'Diagnostics':
                return `Hello, I would like to book *${service}*.

${baseMessage}

*Test Details:*
Preferred test type: [Blood Test/Scan/Other]
Preferred date: [Date]
Home collection preferred: [Yes/No]`;
            
            case 'Pharmacy Services':
            case 'Pharmacy':
                return `Hello, I would like to order medicines through *${service}*.

${baseMessage}

*Medicine Details:*
Prescription attached: [Yes/No]
Delivery address: [Address]
Delivery time preferred: [Morning/Afternoon/Evening]`;
            
            case 'Home Nursing':
                return `Hello, I would like to book *${service}*.

${baseMessage}

*Nursing Requirements:*
Care type needed: [Post-op/Elderly/Chronic]
Duration: [Hours/Days]
Start date: [Date]`;
            
            case 'Counselling':
                return `Hello, I would like to book a *${service}* session.

${baseMessage}

*Counselling Details:*
Concern area: [Stress/Anxiety/Relationship/Family]
Preferred session type: [Individual/Family]
Preferred time: [Morning/Afternoon/Evening]`;
            
            case 'Nutrition':
                return `Hello, I would like to book a *${service}* consultation.

${baseMessage}

*Nutrition Goals:*
Primary goal: [Weight Loss/Gain/Maintenance]
Dietary preferences: [Vegan/Vegetarian/Other]
Health conditions: [Diabetes/Hypertension/Other]`;
            
            default:
                return `Hello, I would like to book a consultation for *${service || 'General Inquiry'}*.\n\n${baseMessage}`;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = {};

        if (!formData.name.trim()) validationErrors.name = 'Please provide your full name';

        if (!formData.age) {
            validationErrors.age = 'Please fill in Age';
        } else if (Number.isNaN(Number(formData.age)) || Number(formData.age) <= 0) {
            validationErrors.age = 'Enter a valid age';
        }

        if (!formData.gender) validationErrors.gender = 'Please select a gender';
        if (!formData.phone.trim()) {
            validationErrors.phone = 'Please enter a contact number';
        } else if (!/^\d{8,15}$/.test(formData.phone.trim())) {
            validationErrors.phone = 'Enter a valid phone number';
        }
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length) return;

        const message = getServiceSpecificMessage(selectedService);
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919581224365?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
        closeBooking();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-slide-up">
                <div className="bg-primary-900 p-6 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <FaWhatsapp className="text-green-400 text-2xl" />
                        Book via WhatsApp
                    </h3>
                    <button onClick={closeBooking} className="text-white/80 hover:text-white transition-colors">
                        <FaTimes size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Patient&apos;s Full Name<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                            placeholder="Please provide your full name"
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Patient&apos;s Age<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            name="age"
                            min="0"
                            value={formData.age}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                            placeholder="Please fill in Age"
                        />
                        {errors.age && <p className="text-xs text-red-500 mt-1">{errors.age}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Patient&apos;s Phone Number<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                            placeholder="Enter contact number"
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">Gender<span className="text-red-500">*</span></label>
                        <div className="grid grid-cols-3 gap-3">
                            {['Male', 'Female', 'Other'].map((option) => (
                                <label
                                    key={option}
                                    className={`flex items-center justify-center gap-2 border rounded-xl py-3 cursor-pointer transition-all ${
                                        formData.gender === option ? 'border-primary-600 bg-primary-50 text-primary-900' : 'border-gray-300 text-gray-700 hover:border-primary-200'
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="gender"
                                        value={option}
                                        checked={formData.gender === option}
                                        onChange={handleChange}
                                        className="sr-only"
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                        {errors.gender && <p className="text-xs text-red-500 mt-2">{errors.gender}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                    >
                        Proceed to WhatsApp
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;