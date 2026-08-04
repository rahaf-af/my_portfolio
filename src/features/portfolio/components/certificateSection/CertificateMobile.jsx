import React, { useState, useEffect } from 'react';
import { Image, theme } from 'antd';
import { Calendar, Building2, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CertificateDesktop({ credentials, selectedId, setSelectedId, currentCert }) {
    const { token } = theme.useToken();
    const mainPurple = token.colorPrimary;
    const isDarkMode = token.colorBgLayout === '#02060E' || token.colorBgLayout.startsWith('#0');

    // حالة التحميل عند تغيير الشهادة
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setImageLoaded(false);
    }, [currentCert?.id]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
            {/* Top Section: Small Cards (2x2 grid, no images, with clip-path, title, institution, and subtle shadow) */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
                marginBottom: '30px',
                padding: '10px'
            }}>
                {credentials.map((item) => {
                    const isSelected = selectedId === item.id;
                    return (
                        <motion.div
                            key={item.id}
                            onClick={() => setSelectedId(item.id)}
                            whileHover={{ y: -6, scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                background: token.colorBgContainer,
                                border: `2px solid ${isSelected ? mainPurple : token.colorBorder}`,
                                clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)',
                                borderRadius: '20px',
                                padding: '16px',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                gap: '10px',
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                boxShadow: isSelected
                                    ? (isDarkMode ? `0 20px 40px -5px rgba(199,92,255,0.3), 0 0 0 2px ${mainPurple}` : `0 20px 40px -5px rgba(128,6,170,0.15)`)
                                    : (isDarkMode ? '0 8px 20px rgba(0,0,0,0.25)' : '0 4px 12px rgba(0,0,0,0.04)'),
                                position: 'relative',
                                overflow: 'hidden',
                                minHeight: '110px'
                            }}
                        >
                            {/* Corner Fold Accent */}
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '18px',
                                height: '18px',
                                background: isSelected ? mainPurple : token.colorBorder,
                                borderBottomLeftRadius: '6px',
                                zIndex: 2
                            }} />

                            {/* Subtle background glow/shadow effect */}
                            <div style={{
                                position: 'absolute',
                                bottom: '-15px',
                                right: '-15px',
                                width: '50px',
                                height: '50px',
                                background: mainPurple,
                                filter: 'blur(25px)',
                                opacity: isSelected ? 0.4 : 0.1,
                                pointerEvents: 'none',
                                transition: 'opacity 0.4s ease'
                            }} />

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', zIndex: 1 }}>
                                <span style={{ color: isSelected ? mainPurple : token.colorTextSecondary, fontSize: '10px', fontFamily: 'monospace', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1.2px' }}>
                                    {item.institution}
                                </span>
                                <h4 style={{ color: isSelected ? token.colorTextHeading : token.colorText, fontSize: '0.9rem', fontWeight: '900', margin: 0, lineHeight: '1.3' }}>
                                    {item.title}
                                </h4>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Bottom Section: Large Certificate Card (Compact, clean, less crowded) */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentCert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    style={{
                        background: isDarkMode
                            ? 'linear-gradient(135deg, rgba(199,92,255,0.08) 0%, rgba(10,5,20,0.95) 50%, rgba(199,92,255,0.03) 100%)'
                            : 'linear-gradient(135deg, rgba(128,6,170,0.04) 0%, #ffffff 50%, rgba(128,6,170,0.02) 100%)',
                        border: `2px solid ${mainPurple}`,
                        borderRadius: '26px',
                        padding: '18px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px',
                        boxShadow: isDarkMode
                            ? `0 15px 40px rgba(0,0,0,0.6), 0 0 25px rgba(199,92,255,0.12), inset 0 0 15px rgba(199,92,255,0.03)`
                            : `0 15px 35px rgba(128,6,170,0.08), inset 0 0 15px rgba(128,6,170,0.02)`,
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Corner Borders */}
                    <div style={{
                        position: 'absolute', top: 0, left: 0, width: '35px', height: '35px',
                        borderTop: `2px solid ${mainPurple}`, borderLeft: `2px solid ${mainPurple}`,
                        borderTopLeftRadius: '26px', pointerEvents: 'none', opacity: 0.8
                    }} />
                    <div style={{
                        position: 'absolute', bottom: 0, right: 0, width: '35px', height: '35px',
                        borderBottom: `2px solid ${mainPurple}`, borderRight: `2px solid ${mainPurple}`,
                        borderBottomRightRadius: '26px', pointerEvents: 'none', opacity: 0.8
                    }} />

                    {/* Subtle glow effect for large card */}
                    <div style={{
                        position: 'absolute', top: '-25px', right: '-25px', width: '120px', height: '120px',
                        background: mainPurple, filter: 'blur(50px)', opacity: isDarkMode ? 0.2 : 0.1,
                        pointerEvents: 'none'
                    }} />

                    {/* Certificate Image Box with Preview */}
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        background: token.colorBgContainer,
                        border: `1px solid ${token.colorBorder}`,
                        borderRadius: '16px',
                        padding: '10px',
                        boxShadow: isDarkMode ? '0 8px 20px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.02)',
                        zIndex: 1
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${token.colorBorder}`, paddingBottom: '6px' }}>
                            <div style={{ display: 'flex', gap: '4px' }}>
                                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ff5f56' }} />
                                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ffbd2e' }} />
                                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#27c93f' }} />
                            </div>
                            <span style={{ color: mainPurple, fontSize: '9px', fontFamily: 'monospace', fontWeight: '900', letterSpacing: '0.8px' }}>
                                {currentCert.code} // PREVIEW_MODE
                            </span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: token.colorTextSecondary, fontSize: '8px', fontFamily: 'monospace' }}>
                                <ShieldCheck size={10} color={mainPurple} /> SECURE
                            </div>
                        </div>

                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                            {!imageLoaded && (
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: token.colorBgContainer,
                                    borderRadius: '10px',
                                    zIndex: 2
                                }}>
                                    <div style={{
                                        width: '32px',
                                        height: '32px',
                                        border: `3px solid ${token.colorBorder}`,
                                        borderTop: `3px solid ${mainPurple}`,
                                        borderRadius: '50%',
                                        animation: 'spin 1s linear infinite'
                                    }} />
                                    <style>{`
                                        @keyframes spin {
                                            0% { transform: rotate(0deg); }
                                            100% { transform: rotate(360deg); }
                                        }
                                    `}</style>
                                </div>
                            )}
                            <Image
                                src={currentCert.image}
                                alt={currentCert.title}
                                onLoad={() => setImageLoaded(true)}
                                preview={{ cover: <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fff', fontSize: '11px', fontWeight: 'bold' }}><Eye size={13} /> View Full Certificate</div> }}
                                style={{
                                    width: '100%',
                                    maxHeight: '260px',
                                    objectFit: 'contain',
                                    borderRadius: '10px',
                                    filter: isDarkMode ? `drop-shadow(0 8px 16px rgba(199,92,255,0.1))` : `drop-shadow(0 4px 10px rgba(128,6,170,0.04))`
                                }}
                            />
                        </div>
                    </div>

                    {/* Header Info */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px', zIndex: 1 }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '5px',
                            background: isDarkMode ? 'rgba(199,92,255,0.15)' : 'rgba(128,6,170,0.08)',
                            border: `1px solid ${mainPurple}60`,
                            padding: '3px 8px', borderRadius: '15px',
                            color: mainPurple, fontSize: '9px', fontWeight: '900', fontFamily: 'monospace',
                            letterSpacing: '1.2px', textTransform: 'uppercase'
                        }}>
                            <Building2 size={11} /> {currentCert.institution}
                        </div>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '4px',
                            color: token.colorTextSecondary, fontSize: '10px', fontFamily: 'monospace', fontWeight: '800',
                            background: isDarkMode ? 'rgba(255,255,255,0.03)' : token.colorFillSecondary,
                            padding: '3px 8px', borderRadius: '12px', border: `1px solid ${token.colorBorder}`
                        }}>
                            <Calendar size={10} color={mainPurple} /> {currentCert.period}
                        </div>
                    </div>

                    {/* Title & Underline */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', zIndex: 1 }}>
                        <h3 style={{
                            color: token.colorTextHeading,
                            fontSize: '1.15rem',
                            fontWeight: '900',
                            margin: 0,
                            lineHeight: '1.25',
                            letterSpacing: '-0.3px'
                        }}>
                            {currentCert.title}
                        </h3>
                        <div style={{
                            width: '35px', height: '2.5px', background: mainPurple,
                            borderRadius: '2px', boxShadow: `0 0 6px ${mainPurple}`
                        }} />
                    </div>

                    {/* Description */}
                    <p style={{
                        color: token.colorTextSecondary,
                        fontSize: '0.83rem',
                        lineHeight: '1.45',
                        margin: 0,
                        fontWeight: '500',
                        zIndex: 1
                    }}>
                        {currentCert.desc}
                    </p>

                    {/* Skills */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', zIndex: 1 }}>
                        <span style={{ color: token.colorTextSecondary, fontSize: '9px', fontFamily: 'monospace', fontWeight: '900', letterSpacing: '1px', textTransform: 'uppercase' }}>
                            // CORE_SKILLS & TECH
                        </span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                            {currentCert.skills.map((skill, sIdx) => (
                                <span key={sIdx} style={{
                                    fontSize: '9px', fontWeight: '800', color: token.colorText,
                                    background: isDarkMode ? 'rgba(255,255,255,0.04)' : token.colorFillSecondary,
                                    padding: '4px 8px', borderRadius: '8px', fontFamily: 'monospace',
                                    border: `1px solid ${token.colorBorder}`
                                }}>
                                    #{skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Compact Verification Footer */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: isDarkMode ? 'rgba(199,92,255,0.08)' : 'rgba(128,6,170,0.05)',
                        border: `1px solid ${mainPurple}40`,
                        borderRadius: '10px',
                        padding: '8px 10px',
                        zIndex: 1
                    }}>
                        <div style={{
                            width: '20px', height: '20px', borderRadius: '6px',
                            background: isDarkMode ? 'rgba(199,92,255,0.2)' : 'rgba(128,6,170,0.1)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                        }}>
                            <Sparkles size={12} color={mainPurple} />
                        </div>
                        <span style={{ color: token.colorText, fontSize: '0.7rem', fontWeight: '700', letterSpacing: '0.2px' }}>
                            Digitally verified professional certificate.
                        </span>
                    </div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}
