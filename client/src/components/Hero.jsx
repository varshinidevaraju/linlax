import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: '100px 0',
            background: 'url("/src/assets/hero-bg.png") center/cover no-repeat'
        }}>
            {/* Dynamic Background Effects */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.95) 100%)',
                zIndex: 0
            }}></div>

            {/* Floating Animated Gradients */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                    x: [0, 50, 0]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '5%',
                    width: '500px',
                    height: '500px',
                    background: 'var(--primary)',
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                    zIndex: 1
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ maxWidth: '850px' }}
                >
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            display: 'inline-block',
                            padding: '6px 16px',
                            background: 'rgba(79, 70, 229, 0.12)',
                            color: 'var(--primary)',
                            borderRadius: '100px',
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            marginBottom: '2rem',
                            border: '1px solid rgba(79, 70, 229, 0.2)',
                            boxShadow: '0 2px 10px rgba(79, 70, 229, 0.1)'
                        }}
                    >
                        Innovating IT for Global Success
                    </motion.span>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 9vw, 5rem)',
                        fontWeight: 900,
                        lineHeight: 1,
                        marginBottom: '2rem',
                        letterSpacing: '-2px',
                        color: 'var(--text)'
                    }}>
                        Accelerate Your <br />
                        <span style={{
                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            filter: 'drop-shadow(0 2px 10px rgba(79, 70, 229, 0.2))'
                        }}>Digital Evolution</span>
                    </h1>

                    <p style={{
                        fontSize: '1.35rem',
                        color: 'var(--text-muted)',
                        marginBottom: '3rem',
                        maxWidth: '650px',
                        lineHeight: 1.6,
                        fontWeight: 500
                    }}>
                        Linlax Infotech delivers <span style={{ color: 'var(--text)', fontWeight: 700 }}>premium IT services</span>, BPO solutions, and world-class e-Publishing services to global enterprises.
                    </p>

                    <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#services"
                            className="btn btn-primary"
                            style={{ padding: '1rem 2.5rem', fontSize: '1rem', boxShadow: '0 10px 20px -5px rgba(79, 70, 229, 0.4)' }}
                        >
                            Explore Services <ArrowRight size={20} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(79, 70, 229, 0.08)' }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="btn btn-outline"
                            style={{ padding: '1rem 2.5rem', fontSize: '1rem', fontWeight: 700, borderWidth: '2px' }}
                        >
                            Contact Us
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    bottom: '3rem',
                    left: '50%',
                    marginLeft: '-16px',
                    color: 'var(--primary)',
                    cursor: 'pointer'
                }}
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            >
                <ChevronDown size={32} />
            </motion.div>

            {/* Modern glass card element for decoration */}
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-5%',
                width: '300px',
                height: '300px',
                background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.05), rgba(14, 165, 233, 0.05))',
                borderRadius: '40px',
                transform: 'rotate(-15deg)',
                zIndex: 1,
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(5px)'
            }}></div>
        </section>
    );
};

export default Hero;
