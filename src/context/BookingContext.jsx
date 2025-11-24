import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');

    const openBooking = (serviceName = '') => {
        setSelectedService(serviceName);
        setIsModalOpen(true);
    };

    const closeBooking = () => {
        setIsModalOpen(false);
        setSelectedService('');
    };

    return (
        <BookingContext.Provider value={{ isModalOpen, selectedService, openBooking, closeBooking }}>
            {children}
        </BookingContext.Provider>
    );
};

BookingProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const useBooking = () => useContext(BookingContext);
