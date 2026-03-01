import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

const ServiceDetail = () => {
    const { id } = useParams();

    // Updated with complete service data from linlax.in
    const serviceData = {
        // IT SERVICES
        'web-development': {
            title: 'Web Application Development',
            description: 'We offer creative and innovative web design using CSS, HTML, and SEO-friendly standards. Our developers specialize in creating self-sufficient admin interfaces and dynamic solutions that drive business growth.',
            features: [
                'Creative & Innovative Designs',
                'Self-sufficient Admin Interfaces',
                'Dynamic URL Generation',
                'Centralized Databases',
                'Full SEO Services',
                'W3C Standard Compliance'
            ],
            image: '/images/web_development_1772359589740.png'
        },
        'software-development': {
            title: 'Software Development',
            description: 'Linlax provides customized process-driven solutions using Microsoft.Net, ASP.Net, Java, and PHP. We build enterprise-level software that streamlines your business operations and increases productivity.',
            features: [
                'Custom Application Development',
                'Software Re-engineering',
                'Enterprise Software Solutions',
                'Software Maintenance & Support',
                'Offshore Project Management',
                'Quality Assurance & Testing'
            ],
            image: '/images/software_development_1772359610436.png'
        },
        'ecommerce': {
            title: 'Ecommerce Development',
            description: 'Building secure, high-performance e-commerce solutions from scratch or using leading platforms. We focus on transaction safety, user engagement, and seamless shopping experiences.',
            features: [
                'Custom Transaction Cycle Design',
                'Magento & WooCommerce Expertise',
                'Secure Payment Gateways',
                'Product Setup & Categorization',
                'Social Media Integration',
                'Inventory Management Systems'
            ],
            image: '/images/ecommerce_1772359632129.png'
        },
        'exam-systems': {
            title: 'Online Exam Systems',
            description: 'Advanced digital tools for institutions and coaching centers to administer, create, and monitor exams online with full flexibility and improved reliability.',
            features: [
                'Location & Timing Flexibility',
                'Paperless Exam Environment',
                'Real-time Monitoring & Results',
                'Automated Question Banks',
                'Enhanced Security & Reliability',
                'Performance Tracking Analytics'
            ],
            image: '/images/software_development_1772359610436.png'
        },
        'android-apps': {
            title: 'Android App Development',
            description: 'Specialized "Book-as-an-App" development for education and business. We transform static content into interactive, feature-rich mobile applications for global reach.',
            features: [
                'Interactive Book-as-an-App',
                'Educational & Business Apps',
                'Google Play Store Deployment',
                'Feature-rich UI/UX Design',
                'Scalable Mobile Solutions',
                'Platform-specific Optimization'
            ],
            image: '/images/web_development_1772359589740.png'
        },

        // GENERAL SERVICES
        'bpo': {
            title: 'BPO Services',
            description: 'Premium Business Process Outsourcing services designed to improve operational efficiency and reduce costs through expert data management and research.',
            features: [
                'Data Entry Services',
                'Litigation Coding',
                'Large-scale Data Processing',
                'Data Appending & Research',
                'Data Mining & Collection',
                'Data Cleansing & Conversion'
            ],
            image: '/images/web_development_1772359589740.png'
        },
        'epub': {
            title: 'Epub Service',
            description: 'Comprehensive eBook solutions from creation to conversion for a wide range of global formats, ensuring your content is accessible on all digital platforms.',
            features: [
                'Epub2 & Epub3 Conversion',
                'Interactive Ebooks',
                'Kindle / Mobi Formatting',
                'Audio Ebooks Integration',
                'Ebook Cover Design',
                'Digital Publishing Strategy'
            ],
            image: '/images/epub_service_1772359661921.png'
        },
        'ecommerce-service': {
            title: 'Ecommerce Service (Catalog Management)',
            description: 'Expert services focusing on the operational side of e-commerce, including catalog management and product data optimization to drive sales.',
            features: [
                'Catalog Management',
                'Product Data Entry',
                'Product Categorization',
                'Data Cleansing & Validation',
                'Image Editing (BPO)',
                'Competitor Price Comparison'
            ],
            image: '/images/ecommerce_1772359632129.png'
        },
        'digital-publishing': {
            title: 'Digital Publishing',
            description: 'High-quality electronic publishing for books and journals using advanced formats like ePub3 and Fixed Layout to provide an immersive reading experience.',
            features: [
                'Read Aloud Conversion',
                'Multimedia-rich eBooks',
                'Fixed Layout Design',
                'Animated / Children\'s Books',
                'Multi-lingual Publishing',
                'Edutainment Content'
            ],
            image: '/images/epub_service_1772359661921.png'
        },
        'type-setting': {
            title: 'Type Setting',
            description: 'Custom production flow solutions for books and journals, from template execution to release-for-print for conventional and digital products.',
            features: [
                'XML & Non-XML Flow Expert',
                'InDesign & QuarkXpress',
                'Mathematical Setting (MathType)',
                'Release-for-Print Production',
                'LaTeX-based Composition',
                'Template Design & Execution'
            ],
            image: '/images/epub_service_1772359661921.png'
        },
        'localization': {
            title: 'Localization',
            description: 'End-to-end multilingual solutions designed to localize your business documents into all global languages, helping you bridge cultures and markets.',
            features: [
                'Text Extraction (OCR)',
                'Source Document Recreation',
                'End-to-End Multilingual DTP',
                'Target Language Check / Fix',
                'HTML QA & Localization',
                'Global Language Support'
            ],
            image: '/images/translation_hero.png'
        },
        'translation': {
            title: 'Translation Services',
            description: 'Professional human translations by native experts across 100+ language pairs, delivering over 10 million words annually for global marketing success.',
            features: [
                'Professional Human Translations',
                'Native Language Experts',
                '100+ Global Language Pairs',
                'Proofreading & Editing',
                'Global Marketing Translation',
                'Customized Terminology Bases'
            ],
            image: '/images/translation_hero.png'
        }
    };

    const service = serviceData[id] || serviceData['web-development'];

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '100px' }}>
            <div className="container">
                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 600, marginBottom: '2rem' }}>
                    <ArrowLeft size={18} /> Back to Services
                </Link>

                <div className="grid grid-cols-1 grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>{service.title}</h1>
                        <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                            {service.description}
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '3rem' }}>
                            {service.features.map((feature, index) => (
                                <div key={index} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                                    <CheckCircle2 size={20} color="var(--primary)" />
                                    <span style={{ fontSize: '0.925rem', fontWeight: 500 }}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <button className="btn btn-primary">Get Started</button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            position: 'relative',
                            borderRadius: 'var(--radius-xl)',
                            overflow: 'hidden',
                            boxShadow: 'var(--box-shadow)'
                        }}
                    >
                        <img src={service.image} alt={service.title} style={{ width: '100%', minHeight: '400px', objectFit: 'cover', display: 'block' }} />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))'
                        }}></div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
