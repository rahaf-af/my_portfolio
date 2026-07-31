import React, { useState, useEffect } from 'react';
import { Grid, Image, Spin, theme } from 'antd';
import { SafetyCertificateOutlined, ArrowRightOutlined, LoadingOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import Certificate1 from '../../../assets/Certificate1.png'
import Certificate2 from '../../../assets/Certificate2.PNG'
import Certificate3 from '../../../assets/Certificate3.png'
import Certificate4 from '../../../assets/Certificate4.jpg'

const { useBreakpoint } = Grid;

export default function Certificates() {
    const screens = useBreakpoint();
    const isDesktop = screens.lg;
    const { token } = theme.useToken();
    const mainPurple = '#a855f7';
    const isDarkMode = token.colorBgLayout === '#07040d' || token.colorBgLayout.startsWith('#0');

    const [selectedCert, setSelectedCert] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);

    // إعادة تعيين حالة التحميل عند تغيير الشهادة المختارة
    useEffect(() => {
        setImageLoaded(false);
    }, [selectedCert]);

    const credentials = [
        {
            id: 1,
            title: 'Full Stack Developer',
            institution: 'Tuwaiq Academy',
            period: 'Feb 2025 - May 2025',
            status: 'Completed',
            certificateImage: Certificate1,
            skills: ['Django', 'JavaScript', 'Bootstrap', 'Moyasar API', 'Git & GitHub'],
        },
        {
            id: 2,
            title: 'Developing Dynamic Websites Using React',
            institution: 'Tuwaiq Academy',
            period: '11/May 2025 - 29/May 2025',
            status: 'Completed',
            certificateImage: Certificate3,
            skills: ['React.js', 'Dynamic UI', 'Component Lifecycle', 'State Management'],
        },
        {
            id: 3,
            title: 'Software Engineering Bootcamp',
            institution: 'SDA & General Assembly',
            period: 'Aug 2025 - Nov 2025',
            status: 'Completed',
            certificateImage: Certificate2,
            skills: ['React.js', 'Django REST Framework', 'REST APIs', 'Postman', 'Agile', 'PostgreSQL'],
        },
        {
            id: 4,
            title: 'Frontend Developer',
            institution: 'Techwin',
            period: 'Nov 2025 - Jul 2026',
            status: 'Completed',
            certificateImage: Certificate4,
            skills: ['React.js', 'Tailwind CSS', 'Ant Design', 'Custom Hooks', 'Netlify CI/CD'],
        }
    ];

    return (
        <section id="certificates" style={{ padding: isDesktop ? '100px 24px' : '60px 16px', maxWidth: '1350px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{once:true}}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: mainPurple, fontSize: '13px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                        <SafetyCertificateOutlined /> Verification
                    </div>
                    <h2 style={{ color: token.colorText, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: '800', margin: 0 }}>
                        Certificates
                    </h2>
                </motion.div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? '1.1fr 1.1fr' : '1fr', gap: '20px', alignItems: 'stretch' }}>

                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '12px' }}>
                    {credentials.map((item, index) => {
                        const isSelected = selectedCert === index;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{once:true}}
                                onClick={() => setSelectedCert(index)}
                                style={{
                                    flex: 1,
                                    background: isSelected
                                        ? (isDarkMode ? 'rgba(168, 85, 247, 0.15)' : 'rgba(168, 85, 247, 0.08)')
                                        : (isDarkMode ? '#0d0718' : '#ffffff'),
                                    border: `1.5px solid ${isSelected ? mainPurple : (isDarkMode ? 'rgba(168, 85, 247, 0.2)' : '#e2e8f0')}`,
                                    borderRadius: '18px',
                                    padding: '16px 24px',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    boxShadow: isSelected ? `0 12px 30px rgba(168, 85, 247, 0.2)` : (isDarkMode ? 'none' : '0 4px 12px rgba(0,0,0,0.03)')
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <div style={{
                                        width: '42px',
                                        height: '42px',
                                        borderRadius: '12px',
                                        background: `${mainPurple}15`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: mainPurple,
                                        fontWeight: '700',
                                        fontSize: '15px'
                                    }}>
                                        {index + 1}
                                    </div>
                                    <div>
                                        <div style={{ color: mainPurple, fontSize: '13px', fontWeight: '700', marginBottom: '3px' }}>
                                            {item.institution} • <span style={{ color: isDarkMode ? '#9ca3af' : '#64748b', fontWeight: '400' }}>{item.period}</span>
                                        </div>
                                        <h4 style={{ color: isDarkMode ? '#fff' : '#0f172a', fontSize: '16px', fontWeight: '600', margin: 0 }}>
                                            {item.title}
                                        </h4>
                                    </div>
                                </div>
                                <ArrowRightOutlined style={{ color: isSelected ? mainPurple : (isDarkMode ? '#4b5563' : '#cbd5e1'), transition: 'transform 0.3s', transform: isSelected ? 'translateX(4px)' : 'none', fontSize: '16px' }} />
                            </motion.div>
                        );
                    })}
                </div>

                <div style={{
                    background: token.colorBgContainer,
                    borderRadius: '26px',
                    padding: '28px',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: `1.5px solid ${mainPurple}80`,
                    boxShadow: `0 10px 30px ${mainPurple}40`,
                }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedCert}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            viewport={{once:true}}
                            style={{ width: '100%' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                                <span style={{ color: mainPurple, fontSize: '14px', fontWeight: '700' }}>
                                    {credentials[selectedCert].institution}
                                </span>
                                <span style={{ color: '#34d399', background: 'rgba(52, 211, 153, 0.1)', padding: '4px 12px', borderRadius: '14px', fontSize: '12px', fontWeight: '600', border: '1px solid rgba(52, 211, 153, 0.3)' }}>
                                    {credentials[selectedCert].status}
                                </span>
                            </div>

                            <div style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0',
                                marginBottom: '18px',
                                background: isDarkMode ? '#160b2e' : '#f8fafc',
                                width: '100%',
                                minHeight: isDesktop ? '260px' : '180px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                boxShadow: isDarkMode ? 'inset 0 2px 4px rgba(0,0,0,0.4)' : 'inset 0 2px 4px rgba(0,0,0,0.02)'
                            }}>
                                {!imageLoaded && (
                                    <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                                        <Spin indicator={<LoadingOutlined style={{ fontSize: 28, color: mainPurple }} spin />} />
                                    </div>
                                )}

                                <Image
                                    src={credentials[selectedCert].certificateImage}
                                    alt="Certificate Preview"
                                    onLoad={() => setImageLoaded(true)}
                                    style={{ 
                                        width: '100%', 
                                        height: 'auto', 
                                        display: 'block', 
                                        objectFit: 'contain',
                                        opacity: imageLoaded ? 1 : 0,
                                        transition: 'opacity 0.3s ease',
                                        minHeight: isDesktop ? '260px' : (screens.md ? '220px' : '140px'),
                                    }}
                                    styles={{ root: { width: '100%', display: 'block' } }}
                                />
                            </div>

                            <h3 style={{ color: isDarkMode ? '#fff' : '#0f172a', fontSize: '18px', fontWeight: '700', marginBottom: '14px' }}>
                                {credentials[selectedCert].title}
                            </h3>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {credentials[selectedCert].skills.map((skill, sIdx) => (
                                    <span key={sIdx} style={{ background: `${mainPurple}1F`, color: mainPurple, border: `1px solid ${mainPurple}59`, padding: '4px 10px', borderRadius: '8px', fontSize: '12px', fontWeight: '500' }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}
