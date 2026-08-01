import React, { useState, useEffect } from 'react';
import { theme } from 'antd';
import { motion } from 'framer-motion';
import {
    CodeOutlined,
    RocketOutlined,
    TrophyOutlined,
    ApiOutlined,
    BugOutlined,
    LaptopOutlined,
    CheckCircleOutlined
} from '@ant-design/icons';

export default function Loader({ onFinished }) {
    const { token } = theme.useToken();
    const mainPurple = '#9303C5';

    const isDarkMode = Boolean(
        token?.colorBgLayout &&
        (token.colorBgLayout === '#02060E' || token.colorBgLayout.toLowerCase().includes('0') || token.colorBgLayout.startsWith('#0'))
    );

    const layoutBackground = isDarkMode ? '#02060E' : '#f4eefb';
    const cardBackground = isDarkMode ? '#0a0f1d' : '#ffffff';

    const [progress, setProgress] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    // إزالة اللودر البسيط اللي بـ index.html بشكل ناعم (فيد بدل قطع مباشر)
    // وفي نفس الوقت نفعّل فيد الدخول لكارد اللودر الحقيقي، فيصير تبادل سلس بينهم
    useEffect(() => {
        const staticLoader = document.getElementById('initial-loader');
        if (staticLoader) {
            staticLoader.style.transition = 'opacity 0.3s ease';
            staticLoader.style.opacity = '0';
            setTimeout(() => staticLoader.remove(), 300);
        }

        // requestAnimationFrame بدل setTimeout: مضمون أسرع وأخف من أي مؤقت،
        // ومربوط بدورة رسم المتصفح مباشرة (مو عرضة لتجميد نفس مشكلة setTimeout)
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setHasMounted(true));
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsFadingOut(true);
                    setTimeout(() => {
                        if (onFinished) onFinished();
                    }, 450);
                    return 100;
                }
                return prev + 1;
            });
        }, 16);

        return () => clearInterval(interval);
    }, [onFinished]);

    const isComplete = progress >= 100;

    const getDevLogs = () => {
        if (progress < 20) return { text: 'git init & cloning modules...', icon: <CodeOutlined /> };
        if (progress < 40) return { text: 'npm install react-dom framer-motion...', icon: <ApiOutlined /> };
        if (progress < 60) return { text: 'compiling Tailwind & Ant Design styles...', icon: <LaptopOutlined /> };
        if (progress < 80) return { text: 'running unit tests (0 bugs found)...', icon: <BugOutlined /> };
        if (progress < 100) return { text: 'optimizing production bundle...', icon: <RocketOutlined /> };
        return { text: 'portfolio successfully deployed!', icon: <CheckCircleOutlined /> };
    };

    const currentLog = getDevLogs();

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: layoutBackground,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 99999,
                overflow: 'hidden',
                padding: '16px',
                opacity: isFadingOut ? 0 : 1,
                transition: 'opacity 0.45s ease',
                pointerEvents: isFadingOut ? 'none' : 'auto',
            }}
        >
            <motion.div
                animate={{
                    scale: [1, 1.4, 1.1, 1],
                    rotate: [0, 90, 180, 360],
                    opacity: [0.2, 0.45, 0.25, 0.2]
                }}
                transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    width: '650px',
                    height: '650px',
                    background: `radial-gradient(circle, ${mainPurple}40 0%, transparent 70%)`,
                    filter: 'blur(55px)',
                    borderRadius: '40%',
                    zIndex: 0,
                }}
            />

            {/* فيد دخول ناعم بـ CSS بحت (opacity + transform)، يتفعّل بعد أول رسم مباشرة
                عبر requestAnimationFrame. هذا آمن 100%: حتى لو تأخر شوي، النتيجة النهائية
                (opacity: 1) مضمونة دايماً لأنها مجرد حالة CSS ثابتة، مو أنيميشن معلّق بانتظار JS. */}
            <div
                style={{
                    width: '100%',
                    maxWidth: '540px',
                    background: cardBackground,
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: `1.5px solid ${isDarkMode ? 'rgba(147, 3, 197, 0.5)' : 'rgba(147, 3, 197, 0.3)'}`,
                    borderRadius: '28px',
                    padding: '32px',
                    boxShadow: isDarkMode
                        ? `0 40px 100px rgba(2, 6, 14, 0.9), inset 0 0 35px rgba(147, 3, 197, 0.15)`
                        : `0 40px 100px rgba(147, 3, 197, 0.25), inset 0 0 35px rgba(147, 3, 197, 0.06)`,
                    position: 'relative',
                    zIndex: 1,
                    opacity: hasMounted ? 1 : 0,
                    transform: hasMounted ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.97)',
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                }}
            >
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '26px',
                    borderBottom: `1px solid ${isDarkMode ? 'rgba(147, 3, 197, 0.25)' : '#e2e8f0'}`,
                    paddingBottom: '12px',
                    flexWrap: 'wrap',
                    gap: '8px'
                }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                        <span style={{ color: isDarkMode ? '#94a3b8' : '#64748b', fontSize: '11px', marginLeft: '6px', fontFamily: 'monospace' }}>bash</span>
                    </div>

                    <div style={{
                        color: mainPurple,
                        fontSize: '11px',
                        fontWeight: '700',
                        fontFamily: 'monospace',
                        background: `${mainPurple}15`,
                        padding: '3px 10px',
                        borderRadius: '6px',
                        border: `1px solid ${mainPurple}30`
                    }}>
                        ~/rahaf/portfolio-v2
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginBottom: '24px' }}>
                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                        style={{
                            width: '46px', height: '46px', borderRadius: '12px',
                            background: `${mainPurple}22`, border: `1.5px solid ${mainPurple}60`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: mainPurple, fontSize: '20px', boxShadow: `0 0 18px ${mainPurple}40`
                        }}
                    >
                        <CodeOutlined />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -10, 0], scale: [1, 1.18, 1] }}
                        transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                        style={{
                            width: '46px', height: '46px', borderRadius: '12px',
                            background: `${mainPurple}25`, border: `1.5px solid ${mainPurple}60`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: mainPurple, fontSize: '20px', boxShadow: `0 0 22px ${mainPurple}50`
                        }}
                    >
                        <RocketOutlined />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [0, -10, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 3.1, ease: 'easeInOut' }}
                        style={{
                            width: '46px', height: '46px', borderRadius: '12px',
                            background: `${mainPurple}22`, border: `1.5px solid ${mainPurple}60`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: mainPurple, fontSize: '20px', boxShadow: `0 0 18px ${mainPurple}40`
                        }}
                    >
                        <TrophyOutlined />
                    </motion.div>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <div style={{ color: mainPurple, fontSize: '12px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px', fontFamily: 'monospace' }}>
                        Rahaf Fallatah
                    </div>
                    <h2 style={{ color: isDarkMode ? '#ffffff' : '#0f172a', fontSize: '24px', fontWeight: '900', margin: 0, letterSpacing: '-0.5px' }}>
                        Compiling Workspace...
                    </h2>
                </div>

                <div
                    style={{
                        width: '100%',
                        height: '10px',
                        background: isDarkMode ? 'rgba(147, 3, 197, 0.15)' : '#e2e8f0',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        position: 'relative',
                        marginBottom: '20px',
                    }}
                >
                    <div
                        style={{
                            width: `${progress}%`,
                            height: '100%',
                            background: `linear-gradient(90deg, #d8b4fe, ${mainPurple})`,
                            borderRadius: '8px',
                            boxShadow: `0 0 16px ${mainPurple}`,
                            transition: 'width 0.1s linear',
                        }}
                    />
                </div>

                <div
                    style={{
                        background: isDarkMode ? 'rgba(2, 6, 14, 0.85)' : 'rgba(240, 230, 255, 0.6)',
                        border: `1px solid ${isComplete ? '#10b981' : `${mainPurple}35`}`,
                        borderRadius: '14px',
                        padding: '14px 18px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontFamily: 'monospace',
                        transition: 'border-color 0.3s ease',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', overflow: 'hidden' }}>
                        <span style={{ color: isComplete ? '#10b981' : mainPurple, fontSize: '15px', display: 'flex', alignItems: 'center' }}>
                            {currentLog.icon}
                        </span>
                        <span style={{ color: isDarkMode ? '#d8b4fe' : '#6b21a8', fontSize: '12px', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            &gt; {currentLog.text}
                        </span>
                    </div>

                    <div style={{
                        color: isComplete ? '#10b981' : mainPurple,
                        fontSize: '15px',
                        fontWeight: '950',
                        fontVariantNumeric: 'tabular-nums',
                        background: isComplete ? 'rgba(16, 185, 129, 0.2)' : `${mainPurple}20`,
                        padding: '4px 12px',
                        borderRadius: '8px',
                        border: `1px solid ${isComplete ? '#10b981' : mainPurple}50`,
                        boxShadow: `0 0 15px ${isComplete ? '#10b981' : mainPurple}30`,
                        flexShrink: 0,
                        marginLeft: '10px'
                    }}>
                        {progress}%
                    </div>
                </div>

            </div>
        </div>
    );
}