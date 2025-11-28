import React, { useState } from 'react';
import { useBooking } from '../context/BookingContext';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const BookingModal = () => {
    const { isModalOpen, closeBooking, selectedService } = useBooking();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        gender: '',
        consent: false,
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
        if (!formData.consent) validationErrors.consent = 'Please accept terms';

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length) return;

        const message = `Hello, I would like to book a consultation for ${selectedService || 'General Inquiry'}.
    
Name: ${formData.name}
Age: ${formData.age}
Gender: ${formData.gender}
Email: ${formData.email || 'Not provided'}
WhatsApp same as mobile: ${formData.sameNumber ? 'Yes' : 'No'}`;

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
                    <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-xl text-sm text-primary-800">
                        <div className="flex-shrink-0 mt-0.5">
                            <input
                                type="checkbox"
                                id="sameNumber"
                                name="sameNumber"
                                checked={formData.sameNumber}
                                onChange={handleChange}
                                className="w-4 h-4 text-accent-500 rounded border-gray-300 focus:ring-accent-500"
                            />
                        </div>
                        <label htmlFor="sameNumber" className="leading-relaxed cursor-pointer">
                            My mobile number 9581224365 and my WhatsApp number are the same.
                        </label>
                    </div>

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

                    <div className="flex items-end gap-4">
                        <div className="flex-1">
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
                        <div className="w-24">
                            <label className="block text-sm font-medium text-gray-700 mb-1 text-center">Years</label>
                            <div className="px-4 py-2 rounded-lg border border-gray-200 text-gray-500 text-center select-none">
                                ▼
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Patient&apos;s Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                            placeholder="example@mail.com"
                        />
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

                    <div className="space-y-2">
                        <label className="flex items-start gap-3 text-sm text-gray-700">
                            <input
                                type="checkbox"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                                className="mt-1 w-4 h-4 rounded border-gray-300 text-accent-500 focus:ring-accent-500"
                            />
                            <span>
                                I understand that telemedicine uses electronic communication technologies by healthcare professionals. I hereby consent to receiving digital telemedicine services from ZOE Healthcare.
                            </span>
                        </label>
                        {errors.consent && <p className="text-xs text-red-500">{errors.consent}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                    >
                        STEP 2 - PROCEED TO PAY ₹199
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
