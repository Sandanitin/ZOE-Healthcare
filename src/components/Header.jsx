import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { openBooking } = useBooking();

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            {/* Main Navigation */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl md:text-3xl font-bold text-primary-900">ZOE</span>
                        <span className="text-2xl md:text-3xl font-light text-accent-500 ml-1">Healthcare</span>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-base font-medium transition-colors duration-200 ${isActive(link.path)
                                    ? 'text-accent-600'
                                    : 'text-gray-700 hover:text-primary-900'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={() => openBooking('General Consultation')}
                            className="btn-accent py-2 px-6 rounded-full text-sm transition-transform hover:scale-105"
                        >
                            Book Consultation
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-primary-900 focus:outline-none"
                        >
                            <span className="text-2xl">{isMenuOpen ? '✕' : '☰'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                    ? 'text-accent-600 bg-accent-50'
                                    : 'text-gray-700 hover:text-primary-900 hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <button
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    openBooking('General Consultation');
                                }}
                                className="block w-full text-center btn-accent py-3 rounded-lg"
                            >
                                Book Consultation
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
