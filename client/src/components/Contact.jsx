import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '100px 0', background: 'var(--bg-subtle)' }}>
            <div className="container">
                <div className="grid grid-cols-1 grid-cols-2" style={{ gap: '4rem' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Let's Build Something <span style={{ color: 'var(--primary)' }}>Great Together</span></h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                            Have a project in mind or want to learn more about our services? Our team is ready to help you navigate your digital transformation.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div style={{ width: '50px', height: '50px', background: 'var(--bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', boxShadow: 'var(--box-shadow)' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Us</h4>
                                    <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>admin@linlax.in</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div style={{ width: '50px', height: '50px', background: 'var(--bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', boxShadow: 'var(--box-shadow)' }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Call Us</h4>
                                    <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>+91 94430 49678</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div style={{ width: '50px', height: '50px', background: 'var(--bg)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', boxShadow: 'var(--box-shadow)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Location</h4>
                                    <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>Coimbatore, Tamil Nadu, India</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'var(--bg)',
                            padding: '3rem',
                            borderRadius: 'var(--radius-xl)',
                            boxShadow: 'var(--box-shadow)'
                        }}
                    >
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Full Name</label>
                                    <input type="text" placeholder="John Doe" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', background: '#f8fafc' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Email Address</label>
                                    <input type="email" placeholder="john@example.com" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', background: '#f8fafc' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Subject</label>
                                <input type="text" placeholder="Service Inquiry" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', background: '#f8fafc' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Message</label>
                                <textarea rows="5" placeholder="Tell us about your project..." style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', background: '#f8fafc', resize: 'none' }}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
