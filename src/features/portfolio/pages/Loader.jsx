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
    // بما إن Loader موجود جوا ConfigProvider بملف App.jsx، هذا الـ token يرجع
    // القيم الصحيحة تلقائياً حسب الوضع الحالي - مافيه داعي نخمّن isDarkMode بأنفسنا
    const { token } = theme.useToken();

    const [progress, setProgress] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        const staticLoader = document.getElementById('initial-loader');
        if (staticLoader) {
            staticLoader.style.transition = 'opacity 0.3s ease';
            staticLoader.style.opacity = '0';
            setTimeout(() => staticLoader.remove(), 300);
        }

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
                // نفس خلفية الصفحة الأساسية (bodyBg) بالظبط، من ملف الثيم مباشرة
                background: token.colorBgLayout,
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
                    background: `radial-gradient(circle, ${token.colorPrimary}40 0%, transparent 70%)`,
                    filter: 'blur(55px)',
                    borderRadius: '40%',
                    zIndex: 0,
                }}
            />

            <div
                style={{
                    width: '100%',
                    maxWidth: '540px',
                    // نفس خلفية باقي الكاردات بالموقع بالظبط (colorBgContainer)
                    background: token.colorBgContainer,
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: `1.5px solid ${token.colorPrimary}4D`,
                    borderRadius: '28px',
                    padding: '32px',
                    boxShadow: `0 40px 100px ${token.colorPrimary}40, inset 0 0 35px ${token.colorPrimary}15`,
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
                    borderBottom: `1px solid ${token.colorPrimary}25`,
                    paddingBottom: '12px',
                    flexWrap: 'wrap',
                    gap: '8px'
                }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        {/* ألوان أزرار التيرمينال (أحمر/أصفر/أخضر) ثابتة عمداً، ما تتبع الثيم */}
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                        <span style={{ color: token.colorTextSecondary, fontSize: '11px', marginLeft: '6px', fontFamily: 'monospace' }}>bash</span>
                    </div>

                    <div style={{
                        color: token.colorPrimary,
                        fontSize: '11px',
                        fontWeight: '700',
                        fontFamily: 'monospace',
                        background: `${token.colorPrimary}15`,
                        padding: '3px 10px',
                        borderRadius: '6px',
                        border: `1px solid ${token.colorPrimary}30`
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
                            background: `${token.colorPrimary}22`, border: `1.5px solid ${token.colorPrimary}60`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: token.colorPrimary, fontSize: '20px', boxShadow: `0 0 18px ${token.colorPrimary}40`
                        }}
                    >
                        <CodeOutlined />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -10, 0], scale: [1, 1.18, 1] }}
                        transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                        style={{
                            width: '46px', height: '46px', borderRadius: '12px',
                            background: `${token.colorPrimary}25`, border: `1.5px solid ${token.colorPrimary}60`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: token.colorPrimary, fontSize: '20px', boxShadow: `0 0 22px ${token.colorPrimary}50`
                        }}
                    >
                        <RocketOutlined />
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, -8, 0], rotate: [0, -10, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 3.1, ease: 'easeInOut' }}
                        style={{
                            width: '46px', height: '46px', borderRadius: '12px',
                            background: `${token.colorPrimary}22`, border: `1.5px solid ${token.colorPrimary}60`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: token.colorPrimary, fontSize: '20px', boxShadow: `0 0 18px ${token.colorPrimary}40`
                        }}
                    >
                        <TrophyOutlined />
                    </motion.div>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <div style={{ color: token.colorPrimary, fontSize: '12px', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px', fontFamily: 'monospace' }}>
                        Rahaf Fallatah
                    </div>
                    <h2 style={{ color: token.colorText, fontSize: '24px', fontWeight: '900', margin: 0, letterSpacing: '-0.5px' }}>
                        Compiling Workspace...
                    </h2>
                </div>

                <div
                    style={{
                        width: '100%',
                        height: '10px',
                        background: `${token.colorPrimary}20`,
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
                            background: `linear-gradient(90deg, ${token.colorTextSecondary}, ${token.colorPrimary})`,
                            borderRadius: '8px',
                            boxShadow: `0 0 16px ${token.colorPrimary}`,
                            transition: 'width 0.1s linear',
                        }}
                    />
                </div>

                <div
                    style={{
                        background: token.colorBgLayout,
                        border: `1px solid ${isComplete ? '#10b981' : `${token.colorPrimary}35`}`,
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
                        <span style={{ color: isComplete ? '#10b981' : token.colorPrimary, fontSize: '15px', display: 'flex', alignItems: 'center' }}>
                            {currentLog.icon}
                        </span>
                        <span style={{ color: token.colorTextSecondary, fontSize: '12px', fontWeight: '600', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            &gt; {currentLog.text}
                        </span>
                    </div>

                    <div style={{
                        color: isComplete ? '#10b981' : token.colorPrimary,
                        fontSize: '15px',
                        fontWeight: '950',
                        fontVariantNumeric: 'tabular-nums',
                        background: isComplete ? 'rgba(16, 185, 129, 0.2)' : `${token.colorPrimary}20`,
                        padding: '4px 12px',
                        borderRadius: '8px',
                        border: `1px solid ${isComplete ? '#10b981' : token.colorPrimary}50`,
                        boxShadow: `0 0 15px ${isComplete ? '#10b981' : token.colorPrimary}30`,
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
