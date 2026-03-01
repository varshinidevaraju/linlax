import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const itServices = [
        { name: 'Web Application Development', href: '/services/web-development' },
        { name: 'Software Development', href: '/services/software-development' },
        { name: 'Ecommerce Development', href: '/services/ecommerce' },
        { name: 'Online Exams', href: '/services/exam-systems' },
        { name: 'Android App Development', href: '/services/android-apps' },
    ];

    const generalServices = [
        { name: 'BPO Services', href: '/services/bpo' },
        { name: 'Epub Service', href: '/services/epub' },
        { name: 'Ecommerce Service', href: '/services/ecommerce-service' },
        { name: 'Digital Publishing', href: '/services/digital-publishing' },
        { name: 'Type Setting', href: '/services/type-setting' },
        { name: 'Localization', href: '/services/localization' },
        { name: 'Translation Services', href: '/services/translation' },
    ];

    const productsUnderMenu = [
        { name: 'QB365 - Question Bank', href: '/products/qb365' },
        { name: 'OTI365 - Online Test', href: '/products/oti365' },
        { name: 'SAS365 - School Automation', href: '/products/sas365' },
        { name: 'LAS365 - Library System', href: '/products/las365' },
        { name: 'Online Test India', href: '/products/online-test-india' },
        { name: 'Indian Product Global', href: '/products/indian-product' },
    ];

    const navLinks = [
        { name: 'Home', href: '/' },
        {
            name: 'IT Services',
            href: '/#services',
            dropdown: itServices
        },
        {
            name: 'Services',
            href: '/#other-services',
            dropdown: generalServices
        },
        {
            name: 'Products',
            href: '/#products',
            dropdown: productsUnderMenu
        },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav
            className={`transition-all ${isScrolled ? 'glass' : 'glass'}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                transition: 'all 0.3s ease',
                padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
                boxShadow: isScrolled ? '0 10px 15px -3px rgba(0,0,0,0.1)' : '0 4px 6px -2px rgba(0,0,0,0.05)'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" className="logo" style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '-1px' }}>
                    LINLAX<span style={{ color: '#0f172a', fontWeight: 700 }}>INFOTECH</span>
                </Link>

                {/* Desktop Nav */}
                <ul className="desktop-links" style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <li
                            key={link.name}
                            style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
                            onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                                <Link
                                    to={link.href}
                                    className="nav-link"
                                    style={{ fontWeight: 500, fontSize: '0.9rem', color: 'var(--text)', opacity: 1, letterSpacing: '0.5px' }}
                                    onClick={(e) => {
                                        if (link.href.startsWith('/#')) {
                                            if (location.pathname === '/') {
                                                e.preventDefault();
                                                const hash = link.href.substring(2);
                                                const element = document.getElementById(hash);
                                                if (element) {
                                                    // Jump to top first, then smoothly scroll down
                                                    window.scrollTo({ top: 0, behavior: 'instant' });
                                                    setTimeout(() => {
                                                        const yOffset = -80;
                                                        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                                                        window.scrollTo({ top: y, behavior: 'smooth' });
                                                    }, 50);
                                                }
                                                // Optional: update URL manually
                                                window.history.pushState(null, '', link.href);
                                            }
                                        }
                                    }}
                                >
                                    {link.name}
                                </Link>
                                {link.dropdown && <ChevronDown size={14} style={{ color: 'var(--text)', transform: activeDropdown === link.name ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }} />}
                            </div>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {link.dropdown && activeDropdown === link.name && (
                                    <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', height: '1rem' }}></div>
                                )}
                                {link.dropdown && activeDropdown === link.name && (
                                    <motion.ul
                                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                        className="glass"
                                        style={{
                                            position: 'absolute',
                                            top: 'calc(100% + 1rem)',
                                            left: '-20px',
                                            minWidth: '280px',
                                            padding: '1.25rem',
                                            borderRadius: 'var(--radius-xl)',
                                            boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.15)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '0.25rem',
                                            zIndex: 100,
                                            border: '1px solid rgba(0, 0, 0, 0.05)',
                                            background: 'var(--glass-bg)',
                                            backdropFilter: 'blur(12px)'
                                        }}
                                    >
                                        {link.dropdown.map((subItem) => (
                                            <li key={subItem.name}>
                                                <Link
                                                    to={subItem.href}
                                                    style={{
                                                        fontSize: '0.9rem',
                                                        fontWeight: 600,
                                                        display: 'block',
                                                        padding: '0.75rem 1rem',
                                                        borderRadius: 'var(--radius-md)',
                                                        transition: 'all 0.2s ease',
                                                        color: 'var(--text)',
                                                        opacity: 0.9
                                                    }}
                                                    onMouseOver={e => {
                                                        e.currentTarget.style.background = 'linear-gradient(135deg, var(--primary), var(--secondary))';
                                                        e.currentTarget.style.color = '#ffffff';
                                                        e.currentTarget.style.opacity = '1';
                                                        e.currentTarget.style.transform = 'translateX(5px)';
                                                    }}
                                                    onMouseOut={e => {
                                                        e.currentTarget.style.background = 'transparent';
                                                        e.currentTarget.style.color = 'var(--text)';
                                                        e.currentTarget.style.opacity = '0.9';
                                                        e.currentTarget.style.transform = 'translateX(0)';
                                                    }}
                                                >
                                                    {subItem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </li>
                    ))}
                    <li>
                        <Link
                            to="/#contact"
                            className="btn btn-primary"
                            style={{ padding: '0.6rem 1.75rem', margin: '0 0.25rem 0 1rem', fontSize: '0.85rem', borderRadius: '100px', fontWeight: 500, letterSpacing: '0.5px' }}
                            onClick={(e) => {
                                if (location.pathname === '/') {
                                    e.preventDefault();
                                    const element = document.getElementById('contact');
                                    if (element) {
                                        window.scrollTo({ top: 0, behavior: 'instant' });
                                        setTimeout(() => {
                                            const yOffset = -80;
                                            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                                            window.scrollTo({ top: y, behavior: 'smooth' });
                                        }, 50);
                                    }
                                    window.history.pushState(null, '', '/#contact');
                                }
                            }}
                        >
                            Get a Quote
                        </Link>
                    </li>
                </ul>

                {/* Mobile menu button */}
                <button className="mobile-menu-btn" style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)' }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            <style jsx>{`
                .nav-link:hover { color: var(--primary) !important; text-shadow: 0 0 10px rgba(79, 70, 229, 0.2); }
                @media (max-width: 1024px) {
                    .desktop-links { display: none !important; }
                    .mobile-menu-btn { display: block !important; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
