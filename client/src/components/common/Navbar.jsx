import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Milk, ChevronRight } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'About', href: '#about' },
        { name: 'Testimonials', href: '#testimonials' },
    ];

    const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

    if (isAuthPage) return null;

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-2 group">
                        <div className="p-2 bg-emerald-600 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                            <Milk className="text-white w-6 h-6" />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Agri<span className="text-emerald-600">DairyTech</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex items-center space-x-4 pl-4 border-l border-slate-200 dark:border-slate-700">
                            <Link
                                to="/login"
                                className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 font-medium px-4 py-2 transition-colors"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-md shadow-emerald-200 dark:shadow-none hover:shadow-lg transition-all flex items-center group"
                            >
                                Sign Up
                                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-slate-600 dark:text-slate-300 p-2 focus:outline-none"
                        >
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-xl transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0'
                    }`}
            >
                <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 border-t border-slate-100 dark:border-slate-800">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block px-3 py-4 text-slate-600 dark:text-slate-300 hover:text-emerald-600 font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-4 space-y-3">
                        <Link
                            to="/login"
                            className="block w-full py-3 text-center text-slate-600 dark:text-slate-300 font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="block w-full py-3 text-center bg-emerald-600 text-white rounded-xl font-semibold"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

