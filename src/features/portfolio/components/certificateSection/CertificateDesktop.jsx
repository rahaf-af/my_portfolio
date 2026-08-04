import React from 'react';
import { Image, theme } from 'antd';
import { Calendar, Building2, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CertificateDesktop({ credentials, selectedId, setSelectedId, currentCert }) {
    const { token } = theme.useToken();
    const mainPurple = token.colorPrimary;
    const isDarkMode = token.colorBgLayout === '#02060E' || token.colorBgLayout.startsWith('#0');
    const sharedImageBg = isDarkMode ? 'rgba(255, 255, 255, 0.01)' : 'rgba(0, 0, 0, 0.01)';

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
            {/* Top Section: Small Cards (2x2 on Tablet, 4 in a row on Desktop via Media Query style approach) */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '22px',
                marginBottom: '50px',
                padding: '20px'
            }}>
                {credentials.map((item) => {
                    const isSelected = selectedId === item.id;
                    return (
                        <motion.div
                            key={item.id}
                            onClick={() => setSelectedId(item.id)}
                            whileHover={{ y: -10, scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                background: token.colorBgContainer,
                                border: `2px solid ${isSelected ? mainPurple : token.colorBorder}`,
                                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)',
                                borderRadius: '24px',
                                padding: '20px',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '14px',
                                transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                boxShadow: isSelected
                                    ? (isDarkMode ? `inset 0 0 25px rgba(199,92,255,0.2), 0 0 0 2px ${mainPurple}` : `inset 0 0 20px rgba(128,6,170,0.08)`)
                                    : (isDarkMode ? 'inset 0 0 15px rgba(0,0,0,0.25)' : 'inset 0 0 15px rgba(0,0,0,0.03)'),
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                width: '22px',
                                height: '22px',
                                background: isSelected ? mainPurple : token.colorBorder,
                                borderBottomLeftRadius: '8px',
                                zIndex: 2
                            }} />

                            <div style={{
                                position: 'absolute',
                                bottom: '-20px',
                                right: '-20px',
                                width: '70px',
                                height: '70px',
                                background: mainPurple,
                                filter: 'blur(35px)',
                                opacity: isSelected ? 0.5 : 0.15,
                                pointerEvents: 'none',
                                transition: 'opacity 0.4s ease'
                            }} />

                            {isSelected && (
                                <div style={{
                                    position: 'absolute',
                                    inset: '-50%',
                                    background: `conic-gradient(from 0deg, transparent 0deg, ${mainPurple}50 60deg, transparent 120deg, transparent 180deg, ${mainPurple}20 240deg, transparent 360deg)`,
                                    animation: 'rotate 6s linear infinite',
                                    opacity: isDarkMode ? 0.6 : 0.3,
                                    filter: 'blur(25px)',
                                    zIndex: -1
                                }} />
                            )}

                            <div style={{
                                width: '100%',
                                aspectRatio: '16 / 10',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                position: 'relative',
                                border: `1px solid ${token.colorBorder}`,
                                background: sharedImageBg,
                                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)'
                            }}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: 'top center',
                                        transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                                        transition: 'transform 0.5s ease',
                                        filter: isDarkMode ? 'brightness(0.98)' : 'none'
                                    }}
                                />
                                {!isSelected && (
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: isDarkMode ? 'rgba(5, 2, 10, 0.35)' : 'rgba(255, 255, 255, 0.2)',
                                        transition: 'background 0.4s ease'
                                    }} />
                                )}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                <span style={{ color: isSelected ? mainPurple : token.colorTextSecondary, fontSize: '11px', fontFamily: 'monospace', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                                    {item.institution}
                                </span>
                                <h4 style={{ color: isSelected ? token.colorTextHeading : token.colorText, fontSize: '1rem', fontWeight: '900', margin: 0, lineHeight: '1.4' }}>
                                    {item.title}
                                </h4>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Bottom Section: Large Certificate Card (Switches to vertical single column layout on tablet/smaller screens) */}
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
                        borderRadius: '42px',
                        padding: '50px',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '40px',
                        alignItems: 'center',
                        boxShadow: isDarkMode
                            ? `0 30px 90px rgba(0,0,0,0.8), 0 0 50px rgba(199,92,255,0.18), inset 0 0 30px rgba(199,92,255,0.05)`
                            : `0 30px 70px rgba(128,6,170,0.12), inset 0 0 30px rgba(128,6,170,0.02)`,
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{
                        position: 'absolute', top: 0, left: 0, width: '70px', height: '70px',
                        borderTop: `3px solid ${mainPurple}`, borderLeft: `3px solid ${mainPurple}`,
                        borderTopLeftRadius: '42px', pointerEvents: 'none', opacity: 0.8
                    }} />
                    <div style={{
                        position: 'absolute', bottom: 0, right: 0, width: '70px', height: '70px',
                        borderBottom: `3px solid ${mainPurple}`, borderRight: `3px solid ${mainPurple}`,
                        borderBottomRightRadius: '42px', pointerEvents: 'none', opacity: 0.8
                    }} />

                    <div style={{
                        position: 'absolute', top: '-40px', right: '-40px', width: '280px', height: '280px',
                        background: mainPurple, filter: 'blur(110px)', opacity: isDarkMode ? 0.25 : 0.12,
                        pointerEvents: 'none'
                    }} />
                    <div style={{
                        position: 'absolute', bottom: '-40px', left: '-40px', width: '200px', height: '200px',
                        background: mainPurple, filter: 'blur(90px)', opacity: isDarkMode ? 0.15 : 0.08,
                        pointerEvents: 'none'
                    }} />

                    <div style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px',
                        background: token.colorBgContainer,
                        border: `1px solid ${token.colorBorder}`,
                        borderRadius: '26px',
                        padding: '20px',
                        boxShadow: isDarkMode ? '0 15px 35px rgba(0,0,0,0.5)' : '0 10px 25px rgba(0,0,0,0.03)',
                        zIndex: 1
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${token.colorBorder}`, paddingBottom: '12px' }}>
                            <div style={{ display: 'flex', gap: '6px' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                            </div>
                            <span style={{ color: mainPurple, fontSize: '11px', fontFamily: 'monospace', fontWeight: '900', letterSpacing: '1px' }}>
                                {currentCert.code} // PREVIEW_MODE
                            </span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: token.colorTextSecondary, fontSize: '10px', fontFamily: 'monospace' }}>
                                <ShieldCheck size={13} color={mainPurple} /> SECURE
                            </div>
                        </div>

                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <Image
                                src={currentCert.image}
                                alt={currentCert.title}
                                preview={{ cover: <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#fff', fontSize: '13px', fontWeight: 'bold' }}><Eye size={16} /> View Full Certificate</div> }}
                                style={{
                                    width: '100%',
                                    maxHeight: '450px',
                                    objectFit: 'contain',
                                    borderRadius: '16px',
                                    filter: isDarkMode ? `drop-shadow(0 15px 30px rgba(199,92,255,0.12))` : `drop-shadow(0 10px 20px rgba(128,6,170,0.06))`
                                }}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', zIndex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '8px',
                                background: isDarkMode ? 'rgba(199,92,255,0.15)' : 'rgba(128,6,170,0.08)',
                                border: `1px solid ${mainPurple}60`,
                                padding: '6px 14px', borderRadius: '30px',
                                color: mainPurple, fontSize: '11px', fontWeight: '900', fontFamily: 'monospace',
                                letterSpacing: '2px', textTransform: 'uppercase'
                            }}>
                                <Building2 size={14} /> {currentCert.institution}
                            </div>
                            <div style={{
                                display: 'inline-flex', alignItems: 'center', gap: '6px',
                                color: token.colorTextSecondary, fontSize: '12px', fontFamily: 'monospace', fontWeight: '800',
                                background: isDarkMode ? 'rgba(255,255,255,0.03)' : token.colorFillSecondary,
                                padding: '6px 12px', borderRadius: '20px', border: `1px solid ${token.colorBorder}`
                            }}>
                                <Calendar size={13} color={mainPurple} /> {currentCert.period}
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <h3 style={{
                                color: token.colorTextHeading,
                                fontSize: 'clamp(2rem, 3.8vw, 2.8rem)',
                                fontWeight: '900',
                                margin: 0,
                                lineHeight: '1.1',
                                letterSpacing: '-1px'
                            }}>
                                {currentCert.title}
                            </h3>
                            <div style={{
                                width: '60px', height: '4px', background: mainPurple,
                                borderRadius: '2px', boxShadow: `0 0 12px ${mainPurple}`
                            }} />
                        </div>

                        <p style={{
                            color: token.colorTextSecondary,
                            fontSize: '1.05rem',
                            lineHeight: '1.7',
                            margin: 0,
                            fontWeight: '500'
                        }}>
                            {currentCert.desc}
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <span style={{ color: token.colorTextSecondary, fontSize: '11px', fontFamily: 'monospace', fontWeight: '900', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                                // CORE_SKILLS & TECH
                            </span>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {currentCert.skills.map((skill, sIdx) => (
                                    <span key={sIdx} style={{
                                        fontSize: '11px', fontWeight: '800', color: token.colorText,
                                        background: isDarkMode ? 'rgba(255,255,255,0.04)' : token.colorFillSecondary,
                                        padding: '7px 14px', borderRadius: '12px', fontFamily: 'monospace',
                                        border: `1px solid ${token.colorBorder}`,
                                        boxShadow: isDarkMode ? '0 4px 12px rgba(0,0,0,0.2)' : 'none'
                                    }}>
                                        #{skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            background: isDarkMode ? 'rgba(199,92,255,0.08)' : 'rgba(128,6,170,0.05)',
                            border: `1px solid ${mainPurple}50`,
                            borderRadius: '16px',
                            padding: '14px 18px',
                            boxShadow: isDarkMode ? 'inset 0 0 15px rgba(199,92,255,0.05)' : 'none'
                        }}>
                            <div style={{
                                width: '32px', height: '32px', borderRadius: '10px',
                                background: isDarkMode ? 'rgba(199,92,255,0.2)' : 'rgba(128,6,170,0.1)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                            }}>
                                <Sparkles size={18} color={mainPurple} />
                            </div>
                            <span style={{ color: token.colorText, fontSize: '0.9rem', fontWeight: '800', letterSpacing: '0.3px' }}>
                                Certified and digitally verified for advanced professional standards.
                            </span>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}
