import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { FaWhatsapp, FaTimes, FaInfoCircle } from 'react-icons/fa';

const BookingModal = () => {
    const { isModalOpen, closeBooking, selectedService } = useBooking();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        phone: '',
        gender: '',
        sameNumber: true,
        consent: false
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
Phone: ${formData.phone}`;
        
        // Simplified message for all services - only basic patient details
        return `Hello, I would like to book a *${service || 'General Inquiry'}* consultation.\n\n${baseMessage}`;
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
        
        if (!formData.consent) validationErrors.consent = 'Please accept the telemedicine consent terms';
        
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length) return;

        const message = getServiceSpecificMessage(selectedService);
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919581224365?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
        closeBooking();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 bg-black/50 backdrop-blur-sm animate-fade-in sm:p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-slide-up max-h-[95vh] flex flex-col">
                <div className="bg-primary-900 p-4 sm:p-6 flex justify-between items-center">
                    <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                        <FaWhatsapp className="text-green-400 text-xl sm:text-2xl" />
                        Book via WhatsApp
                    </h3>
                    <button onClick={closeBooking} className="text-white/80 hover:text-white transition-colors p-1">
                        <FaTimes size={20} className="sm:size-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-grow">
                    <div className="bg-green-50 border border-green-200 rounded-xl p-3 sm:p-4 text-xs sm:text-sm text-green-800 flex items-start gap-2 sm:gap-3">
                        <FaInfoCircle className="text-green-500 mt-0.5 flex-shrink-0 text-sm sm:text-base" />
                        <div>
                            <p className="font-medium">How Booking Works</p>
                            <p>Fill out this form and click "Proceed to WhatsApp". We'll pre-fill a message with your details for quick booking!</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                Patient&apos;s Full Name<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                                placeholder="Please provide your full name"
                            />
                            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                    Patient&apos;s Age<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    name="age"
                                    min="0"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                                    placeholder="Age"
                                />
                                {errors.age && <p className="text-xs text-red-500 mt-1">{errors.age}</p>}
                            </div>

                            <div>
                                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                                    Phone Number<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all text-sm sm:text-base"
                                    placeholder="Contact number"
                                />
                                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2 sm:mb-3">Gender<span className="text-red-500">*</span></label>
                            <div className="grid grid-cols-3 gap-2 sm:gap-3">
                                {['Male', 'Female', 'Other'].map((option) => (
                                    <label
                                        key={option}
                                        className={`flex items-center justify-center gap-1 sm:gap-2 border rounded-lg sm:rounded-xl py-2 sm:py-3 cursor-pointer transition-all text-xs sm:text-sm ${
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
                            {errors.gender && <p className="text-xs text-red-500 mt-1 sm:mt-2">{errors.gender}</p>}
                        </div>

                        <div className="bg-blue-50 p-3 sm:p-4 rounded-xl">
                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className="flex-shrink-0 mt-0.5">
                                    <input
                                        type="checkbox"
                                        id="consent"
                                        name="consent"
                                        checked={formData.consent}
                                        onChange={handleChange}
                                        className="w-3 h-3 sm:w-4 sm:h-4 text-accent-500 rounded border-gray-300 focus:ring-accent-500"
                                    />
                                </div>
                                <label htmlFor="consent" className="text-xs sm:text-sm text-primary-800 leading-relaxed cursor-pointer">
                                    I understand that telemedicine is the use of electronic information and communication technologies by healthcare professionals and hereby consent to Dr. Nabi Vali for providing health care services to me via digital telemedicine.
                                    <span className="text-red-500">*</span>
                                </label>
                            </div>
                            {errors.consent && <p className="text-xs text-red-500 mt-1">{errors.consent}</p>}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg flex items-center justify-center gap-2"
                    >
                        <FaWhatsapp className="text-lg sm:text-xl" />
                        Proceed to WhatsApp
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;