import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const itServices = [
        { name: 'Web Dev', href: '/services/web-development' },
        { name: 'Software', href: '/services/software-development' },
        { name: 'E-commerce', href: '/services/ecommerce' },
        { name: 'Exams', href: '/services/exam-systems' },
        { name: 'Android', href: '/services/android-apps' },
    ];

    const businessServices = [
        { name: 'BPO', href: '/services/bpo' },
        { name: 'Epub', href: '/services/epub' },
        { name: 'Publishing', href: '/services/digital-publishing' },
        { name: 'Type Setting', href: '/services/type-setting' },
        { name: 'Localization', href: '/services/localization' },
    ];

    const products = [
        { name: 'QB365', href: '/products/qb365' },
        { name: 'OTI365', href: '/products/oti365' },
        { name: 'SAS365', href: '/products/sas365' },
        { name: 'LAS365', href: '/products/las365' },
    ];

    const trustHighlights = [
        '24/7 Support', 'Data Security', 'Trial Available'
    ];

    const relatedPortals = [
        'Qb365.in', 'OTI365.com', 'TimeTable', 'PayRoll',
        'Indian Product', 'Our Videos', 'NEET Tamil', 'Student LMS'
    ];

    return (
        <footer style={{ background: '#0F172A', color: '#F8FAFC', paddingTop: '60px', paddingBottom: '30px', overflow: 'hidden' }}>
            <div className="container">

                {/* Compact Top Bar */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: '2.5rem',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    marginBottom: '2.5rem',
                    flexWrap: 'wrap',
                    gap: '2rem'
                }}>
                    <Link to="/" style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--primary)', letterSpacing: '-1px' }}>
                        LINLAX<span style={{ color: '#fff' }}>INFOTECH</span>
                    </Link>

                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                        {trustHighlights.map((text, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="var(--primary)" />
                                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#94A3B8' }}>{text}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="#" style={{ color: '#94A3B8' }} className="hover-white"><Facebook size={18} /></a>
                        <a href="#" style={{ color: '#94A3B8' }} className="hover-white"><Linkedin size={18} /></a>
                    </div>
                </div>

                {/* Beautiful Compact Grid */}
                <div className="grid grid-cols-2 grid-cols-4" style={{ gap: '2.5rem', marginBottom: '3rem' }}>

                    {/* Contact Info - Compact */}
                    <div>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.25rem', textTransform: 'uppercase', color: '#fff' }}>Get in Touch</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                                <Phone size={14} color="var(--primary)" />
                                <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>+91 84286 49000</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                                <Mail size={14} color="var(--primary)" />
                                <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>admin@linlax.in</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                                <MapPin size={14} color="var(--primary)" />
                                <span style={{ fontSize: '0.85rem', color: '#94A3B8' }}>India (HQ)</span>
                            </div>
                        </div>
                    </div>

                    {/* IT Services */}
                    <div>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.25rem', textTransform: 'uppercase', color: '#fff' }}>IT Solutions</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            {itServices.map(link => (
                                <li key={link.name}><Link to={link.href} className="footer-link">{link.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Business Services */}
                    <div>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.25rem', textTransform: 'uppercase', color: '#fff' }}>BPO & Digital</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            {businessServices.map(link => (
                                <li key={link.name}><Link to={link.href} className="footer-link">{link.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '1.25rem', textTransform: 'uppercase', color: '#fff' }}>Products</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            {products.map(link => (
                                <li key={link.name}><Link to={link.href} className="footer-link">{link.name}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Ecosystem - Very Compact Tags */}
                <div style={{
                    padding: '1.5rem',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    marginBottom: '2.5rem'
                }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)', marginRight: '0.5rem', alignSelf: 'center' }}>ECOSYSTEM:</span>
                        {relatedPortals.map((portal, i) => (
                            <span key={i} style={{
                                fontSize: '0.7rem',
                                color: '#64748B',
                                padding: '2px 8px',
                                cursor: 'pointer',
                                transition: 'color 0.3s ease'
                            }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = '#64748B'}>
                                {portal} {i < relatedPortals.length - 1 ? '•' : ''}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <p style={{ color: '#64748B', fontSize: '0.75rem' }}>
                        © {currentYear} Linlax Infotech.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#" style={{ color: '#64748B', fontSize: '0.75rem' }}>Privacy</a>
                        <a href="#" style={{ color: '#64748B', fontSize: '0.75rem' }}>Terms</a>
                        <a href="#" style={{ color: '#64748B', fontSize: '0.75rem' }}>Careers</a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .footer-link {
                    color: #94A3B8;
                    font-size: 0.85rem;
                    transition: all 0.2s ease;
                }
                .footer-link:hover {
                    color: #fff;
                    padding-left: 4px;
                }
                .hover-white:hover {
                    color: #fff !important;
                }
                @media (max-width: 768px) {
                    .grid-cols-4 { grid-template-columns: repeat(2, 1fr) !important; }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
