import React from 'react';
import {
    Smartphone, Laptop, Globe, Database, Pencil, BarChart, Code,
    BookOpen, Layout, Languages, MessageSquare, Briefcase
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
    const itServices = [
        { title: 'Web Application Development', id: 'web-development', icon: <Laptop /> },
        { title: 'Software Development', id: 'software-development', icon: <Code /> },
        { title: 'Ecommerce Development', id: 'ecommerce', icon: <Globe /> },
        { title: 'Online Exams', id: 'exam-systems', icon: <BarChart /> },
        { title: 'Android App Development', id: 'android-apps', icon: <Smartphone /> }
    ];

    const businessServices = [
        { title: 'BPO Services', id: 'bpo', icon: <Database /> },
        { title: 'Epub Service', id: 'epub', icon: <BookOpen /> },
        { title: 'Ecommerce Service', id: 'ecommerce-service', icon: <Briefcase /> },
        { title: 'Digital Publishing', id: 'digital-publishing', icon: <Layout /> },
        { title: 'Type Setting', id: 'type-setting', icon: <Pencil /> },
        { title: 'Localization', id: 'localization', icon: <Languages /> },
        { title: 'Translation Services', id: 'translation', icon: <MessageSquare /> }
    ];

    return (
        <section id="services" style={{ padding: '100px 0', background: 'var(--bg-subtle)' }}>
            <div className="container">
                <div className="section-title">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Digital Innovation Service Matrix
                    </motion.h2>
                    <p>We deliver specialized technology and business process solutions to solve complex global challenges.</p>
                </div>

                {/* IT Services Group */}
                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ width: '32px', height: '4px', background: 'var(--primary)', borderRadius: '2px' }}></div>
                        IT & Development
                    </h3>
                    <div className="grid grid-cols-1 grid-cols-2 grid-cols-3" style={{ gap: '2rem' }}>
                        {itServices.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} />
                        ))}
                    </div>
                </div>

                {/* Business Services Group */}
                <div id="other-services">
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{ width: '32px', height: '4px', background: 'var(--secondary)', borderRadius: '2px' }}></div>
                        Business & Publishing Solutions
                    </h3>
                    <div className="grid grid-cols-1 grid-cols-2 grid-cols-4" style={{ gap: '1.5rem' }}>
                        {businessServices.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} compact />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ service, index, compact = false }) => (
    <Link to={`/services/${service.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            style={{
                background: 'var(--bg)',
                padding: compact ? '1.5rem' : '2rem',
                borderRadius: 'var(--radius-xl)',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                border: '1px solid rgba(0,0,0,0.03)',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: compact ? 'center' : 'flex-start',
                textAlign: compact ? 'center' : 'left',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
            }}
            whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', borderColor: 'rgba(79, 70, 229, 0.2)' }}
        >
            <div style={{
                width: compact ? '40px' : '50px',
                height: compact ? '40px' : '50px',
                background: compact ? 'rgba(14, 165, 233, 0.1)' : 'rgba(79, 70, 229, 0.1)',
                color: compact ? 'var(--secondary)' : 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-lg)',
                marginBottom: '1rem'
            }}>
                {React.cloneElement(service.icon, { size: compact ? 22 : 28 })}
            </div>
            <h4 style={{ fontSize: compact ? '0.95rem' : '1.15rem', fontWeight: 600, color: 'var(--text)' }}>
                {service.title}
            </h4>
            {!compact && (
                <span style={{ marginTop: '1rem', color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Learn More →
                </span>
            )}
        </motion.div>
    </Link>
);

export default Services;
