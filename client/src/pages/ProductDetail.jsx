import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, ShoppingCart, Globe, Shield, Zap } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();

    // Updated with real data from linlax.in
    const productData = {
        'qb365': {
            title: 'QB365 - Question Bank Solution',
            subtitle: 'Premium Assessment & Examination Software',
            description: 'A comprehensive question bank solution designed for schools and colleges. It allows institutions to generate professional-quality question papers based on specific blueprints and curriculum requirements.',
            features: [
                'Manual & Automatic Paper Generation',
                'Blueprint-based Assessment',
                'Multi-user & Multi-subject Support',
                'Mathematical & Scientific Formula Support',
                'Bulk Question Upload (CSV/Excel)',
                'Comprehensive Reporting & Analytics'
            ],
            benefits: [
                'Saves 70% of exam preparation time',
                'Ensures 100% syllabus coverage',
                'Maintains high security for exam papers',
                'Easy to use for all faculty members'
            ],
            image: '/images/software_development_1772359610436.png'
        },
        'oti365': {
            title: 'OTI365 - Online Test Interface',
            subtitle: 'Scalable Online Assessment Platform',
            description: 'A high-performance online testing portal that provides a seamless experience for both students and institutions. Features a robust dashboard for real-time monitoring and automated result processing.',
            features: [
                'Multiple Question Types (MCQ, Fill-ups, etc.)',
                'Real-time Result Generation',
                'Secure Online Proctoring',
                'Automated Export to Excel/PDF',
                'Student & Admin Dashboards',
                'Scalable Concurrent Users Support'
            ],
            benefits: [
                'Eliminates manual grading errors',
                'Accessibility from any location',
                'Detailed performance analytics',
                'Instant feedback for students'
            ],
            image: '/images/software_development_1772359610436.png'
        },
        'sas365': {
            title: 'SAS365 - School Automation System',
            subtitle: 'All-in-One Educational Management',
            description: 'A complete enterprise-grade school management software. From student admissions to academic tracking and payroll, SAS365 streamlines all administrative and educational workflows.',
            features: [
                'Student & Staff Profile Management',
                'Fee Collection & Billing',
                'Examination & Report Generation',
                'Payroll & HR Integration',
                'Attendance Management',
                'Parent-Teacher Communication Portal'
            ],
            benefits: [
                'Centralized data management',
                'Transparent fee processing',
                'Improved administrative efficiency',
                'Real-time academic alerts'
            ],
            image: '/images/web_development_1772359589740.png'
        },
        'las365': {
            title: 'LAS365 - Library Automation System',
            subtitle: 'Smart Library Inventory & Transaction Management',
            description: 'Specialized software for managing library operations in schools and colleges. LAS365 handles the complete lifecycle of books from procurement to circulation and fine management.',
            features: [
                'Barcode-ready Circulation System',
                'Automated Fine Calculation',
                'OPAC (Online Public Access Catalog)',
                'Stock Verification & Reporting',
                'Book Registration & Categorization',
                'Member Management & Alerts'
            ],
            benefits: [
                'Quick book issuing and returning',
                'Accurate stock inventory',
                'Easy accessibility for members',
                'Comprehensive transaction logs'
            ],
            image: '/images/epub_service_1772359661921.png'
        },
        'online-test-india': {
            title: 'Online Test India',
            subtitle: 'Competitive Exam Preparation Portal',
            description: 'A flagship portal dedicated to Indian competitive exams like TNPSC, TET, and TRB. Providing thousands of students with access to high-quality test series and preparation materials.',
            features: [
                'Category-wise Competitive Exams',
                'Institutional & Student Sign-ups',
                'Online Payment Gateway Integration',
                'Detailed Results & Ranking System',
                'Latest Exam Notifications',
                'Mobile-friendly Test Portal'
            ],
            benefits: [
                'Focused on Indian state/national exams',
                'Affordable prep materials',
                'Real exam environment simulation',
                'Track progress over time'
            ],
            image: '/images/software_development_1772359610436.png'
        },
        'indian-product': {
            title: 'Indian Product Global e-Commerce',
            subtitle: 'Worldwide Reach for Quality Indian Goods',
            description: 'A dedicated global e-commerce network bridge connecting premium Indian products to over 20 countries including USA, UK, and Australia. Focused on high-quality delivery and customer service.',
            features: [
                'Multi-national Shipping Support',
                'Dedicated Stores for 20+ Countries',
                'High-quality Quality Assurance',
                'Worldwide Delivery Network',
                'Secure Global Payment Support',
                'Localized Customer Service'
            ],
            benefits: [
                'Global visibility for Indian brands',
                'Trustworthy delivery process',
                'Seamless cross-border shopping',
                'Dedicated support teams'
            ],
            image: '/images/ecommerce_1772359632129.png'
        },
    };

    const product = productData[id] || productData['qb365'];

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '100px' }} className="fade-in">
            <div className="container">
                <Link to="/#products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '2rem' }}>
                    <ArrowLeft size={18} /> Back to Products
                </Link>

                <div className="grid grid-cols-1 grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span style={{
                            color: 'var(--primary)',
                            fontWeight: 700,
                            fontSize: '0.875rem',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            display: 'block',
                            marginBottom: '0.5rem'
                        }}>{product.subtitle}</span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>{product.title}</h1>
                        <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                            {product.description}
                        </p>

                        <div style={{ marginBottom: '3rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Shield size={20} color="var(--primary)" /> Key Features
                            </h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                {product.features.map((feature, index) => (
                                    <div key={index} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                        <CheckCircle2 size={18} color="var(--primary)" style={{ marginTop: '3px' }} />
                                        <span style={{ fontSize: '0.925rem', fontWeight: 500, color: 'var(--text)' }}>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ marginBottom: '3rem', padding: '2rem', background: 'var(--bg-subtle)', borderRadius: 'var(--radius-lg)', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Zap size={20} color="var(--secondary)" /> Why Choose {product.title.split(' - ')[0]}?
                            </h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {product.benefits.map((benefit, index) => (
                                    <li key={index} style={{ fontSize: '0.925rem', color: 'var(--text-muted)', display: 'flex', gap: '0.75rem' }}>
                                        <span style={{ color: 'var(--secondary)', fontWeight: 800 }}>•</span> {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Request Live Demo</button>
                            <button className="btn btn-outline" style={{ padding: '1rem 2rem' }}>Download Brochure</button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            left: '-20px',
                            right: '20px',
                            bottom: '20px',
                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                            borderRadius: 'var(--radius-xl)',
                            opacity: 0.1,
                            zIndex: -1
                        }}></div>
                        <div style={{
                            borderRadius: 'var(--radius-xl)',
                            overflow: 'hidden',
                            boxShadow: '0 30px 60px -12px rgba(0,0,0,0.25)',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                            <img src={product.image} alt={product.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
