import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Smartphone, Server, Database, Globe, Search } from 'lucide-react';

const Products = () => {
    const products = [
        {
            title: 'QB365',
            subtitle: 'Question Bank Solution',
            id: 'qb365',
            description: 'Advanced assessment tool for schools and colleges with blueprint-based question paper generation.',
            icon: <Server />
        },
        {
            title: 'OTI365',
            subtitle: 'Online Test Portal',
            id: 'oti365',
            description: 'Secure, high-performance online testing platform for institutions and professional assessments.',
            icon: <Shield />
        },
        {
            title: 'SAS365',
            subtitle: 'School Automation',
            id: 'sas365',
            description: 'Comprehensive school management software covering admissions, academics, and administration.',
            icon: <Database />
        },
        {
            title: 'LAS365',
            subtitle: 'Library Management',
            id: 'las365',
            description: 'Smart library automation for managing cataloging, circulation, and member transactions.',
            icon: <Search />
        },
        {
            title: 'Online Test India',
            subtitle: 'Competitive Gateway',
            id: 'online-test-india',
            description: 'Flagship preparation portal for major Indian competitive exams like TNPSC, TET, and TRB.',
            icon: <Smartphone />
        },
        {
            title: 'Indian Product',
            subtitle: 'Global e-Commerce',
            id: 'indian-product',
            description: 'Dedicated worldwide bridge connecting premium Indian products to over 20 countries.',
            icon: <Globe />
        }
    ];

    return (
        <section id="products" style={{ padding: '100px 0' }}>
            <div className="container">
                <div className="section-title">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Digital Product Ecosystem
                    </motion.h2>
                    <p>Our proprietary software and platforms are designed to revolutionize education and global trade.</p>
                </div>

                <div className="grid grid-cols-1 grid-cols-2 grid-cols-3" style={{ gap: '2rem' }}>
                    {products.map((product, index) => (
                        <Link key={product.id} to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.02), rgba(14, 165, 233, 0.02))',
                                    padding: '2.5rem',
                                    borderRadius: 'var(--radius-xl)',
                                    border: '1px solid rgba(79, 70, 229, 0.08)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flex: 1,
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)', borderColor: 'rgba(79, 70, 229, 0.2)' }}
                            >
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    background: 'white',
                                    color: 'var(--primary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '12px',
                                    marginBottom: '1.5rem',
                                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                                }}>
                                    {React.cloneElement(product.icon, { size: 28 })}
                                </div>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem', letterSpacing: '-1px' }}>{product.title}</h3>
                                <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem' }}>{product.subtitle}</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', marginBottom: '2rem', lineHeight: 1.6 }}>{product.description}</p>

                                <span style={{
                                    marginTop: 'auto',
                                    color: 'var(--primary)',
                                    fontSize: '0.875rem',
                                    fontWeight: 700,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    Explore Product →
                                </span>

                                <div style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    width: '100px',
                                    height: '100px',
                                    background: 'var(--primary)',
                                    borderRadius: '50%',
                                    filter: 'blur(60px)',
                                    opacity: 0.05,
                                    zIndex: -1
                                }}></div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
