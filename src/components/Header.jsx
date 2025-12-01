import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed w-full bg-white shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl md:text-3xl font-bold text-primary-900">ZEO</span>
                        <span className="text-2xl md:text-3xl font-light text-accent-500 ml-1">Healthcare</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link to="/" className="text-primary-900 hover:text-accent-500 transition-colors font-medium">Home</Link>
                        <Link to="/about" className="text-primary-900 hover:text-accent-500 transition-colors font-medium">About</Link>
                        <Link to="/services" className="text-primary-900 hover:text-accent-500 transition-colors font-medium">Services</Link>
                        <Link to="/contact" className="text-primary-900 hover:text-accent-500 transition-colors font-medium">Contact</Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-primary-900 hover:text-accent-500 transition-colors"
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <nav className="flex flex-col space-y-4">
                            <Link to="/" className="text-primary-900 hover:text-accent-500 transition-colors font-medium" onClick={toggleMenu}>Home</Link>
                            <Link to="/about" className="text-primary-900 hover:text-accent-500 transition-colors font-medium" onClick={toggleMenu}>About</Link>
                            <Link to="/services" className="text-primary-900 hover:text-accent-500 transition-colors font-medium" onClick={toggleMenu}>Services</Link>
                            <Link to="/contact" className="text-primary-900 hover:text-accent-500 transition-colors font-medium" onClick={toggleMenu}>Contact</Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
