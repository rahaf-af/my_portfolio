import React from 'react';
import { Grid, theme } from 'antd';
import { CodeOutlined, CalendarOutlined, EnvironmentOutlined, ReadOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { getTimelineData } from '../../../config/experienceConfig';

const { useBreakpoint } = Grid;

export default function Experience({ lang = 'en' }) {
    const screens = useBreakpoint();
    const isDesktop = screens.lg;
    const isTablet = screens.md && !screens.lg; // شاشة التابلت المتوسطة
    const isDesktopOrTablet = screens.lg || screens.md;

    const { token } = theme.useToken();
    const mainColor = token.colorPrimary;
    const isAr = lang === 'ar';

    // استدعاء البيانات من ملف التكوين المنفصل
    const timelineData = getTimelineData(isAr);

    return (
        <section
            id="experience"
            style={{
                padding: isDesktopOrTablet ? '130px 24px' : '70px 16px',
                position: 'relative',
                maxWidth: '1150px',
                margin: '0 auto',
                overflow: 'hidden'
            }}
        >
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: mainColor, fontSize: '13px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                        <ThunderboltOutlined /> {isAr ? 'الخبرات والمسيرة' : 'Experience'}
                    </div>
                    <h2 style={{ color: token.colorText, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', margin: 0 }}>
                        {isAr ? 'رحلتي المهنية' : 'My Journey'}
                    </h2>
                </motion.div>
            </div>

            {/* الحاوية الرئيسية مع تثبيت الاتجاه ltr لضمان ثبات الكروت وأيقوناتها نهائياً */}
            <div 
                dir="ltr"
                style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isDesktopOrTablet ? '80px' : '50px',
                    marginTop: isDesktopOrTablet ? '80px' : '50px',
                }}
            >
                {/* خط الثعبان المتعرج الخلفي */}
                {isDesktopOrTablet && (
                    <svg
                        style={{
                            position: 'absolute',
                            top: '50px',
                            bottom: '50px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '260px',
                            height: 'calc(100% - 100px)',
                            pointerEvents: 'none',
                            zIndex: 0
                        }}
                        viewBox="0 0 260 1000"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M 190 0 
                               C 190 166, 70 166, 70 333 
                               C 70 500, 190 500, 190 666 
                               C 190 833, 70 833, 70 1000"
                            fill="none"
                            stroke={mainColor}
                            strokeWidth="3.5"
                            strokeDasharray="8 8"
                            opacity="0.75"
                        />
                    </svg>
                )}

                {/* خط الموبايل العمودي */}
                {!isDesktopOrTablet && (
                    <div style={{
                        position: 'absolute',
                        left: '18px',
                        top: '20px',
                        bottom: '20px',
                        width: '3px',
                        background: `linear-gradient(to bottom, ${mainColor}, ${token.colorBorder})`,
                        zIndex: 0
                    }} />
                )}

                {timelineData.map((item, index) => {
                    const isLeftNode = index === 0 || index === 2;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            style={{
                                position: 'relative',
                                display: 'flex',
                                justifyContent: isDesktopOrTablet ? (isLeftNode ? 'flex-start' : 'flex-end') : 'flex-start',
                                width: '100%',
                                paddingLeft: isDesktopOrTablet ? '0' : '45px',
                                minHeight: '190px',
                                alignItems: 'center',
                                zIndex: 1
                            }}
                        >
                            {/* الأيقونة المركزية */}
                            <div style={{
                                position: 'absolute',
                                left: isDesktopOrTablet 
                                    ? (isLeftNode 
                                        ? (isTablet ? 'calc(50% - 35px)' : 'calc(50% - 60px)') 
                                        : (isTablet ? 'calc(50% + 35px)' : 'calc(50% + 60px)')) 
                                    : '18px',
                                top: '50%',
                                width: '44px',
                                height: '44px',
                                borderRadius: '15px',
                                background: token.colorBgContainer,
                                border: `2.5px solid ${mainColor}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: `0 0 20px ${mainColor}50`,
                                color: mainColor,
                                fontSize: '18px',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 3
                            }}>
                                {item.type === 'work' ? <CodeOutlined /> : <ReadOutlined />}
                            </div>

                            {/* كرت المحتوى */}
                            <div
                                dir={isAr ? 'rtl' : 'ltr'}
                                style={{
                                    background: token.colorBgContainer,
                                    border: `1.5px solid ${token.colorBorder}`,
                                    boxShadow: `0 10px 30px ${mainColor}20`,
                                    width: isDesktopOrTablet ? '42%' : '100%',
                                    borderRadius: '26px 8px 26px 26px',
                                    padding: isDesktopOrTablet ? '30px' : '22px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    textAlign: isAr ? 'right' : 'left',
                                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                                }}
                                onMouseEnter={(e) => {
                                    if (isDesktopOrTablet) {
                                        e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)';
                                        e.currentTarget.style.borderColor = mainColor;
                                        e.currentTarget.style.boxShadow = `0 20px 40px ${mainColor}35`;
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (isDesktopOrTablet) {
                                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                        e.currentTarget.style.borderColor = token.colorBorder;
                                        e.currentTarget.style.boxShadow = `0 10px 30px ${mainColor}20`;
                                    }
                                }}
                            >
                                {/* شارة الزاوية المائلة مثبتة دائماً في اليمين */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    background: token.colorFillSecondary,
                                    padding: '6px 14px',
                                    borderBottomLeftRadius: '16px',
                                    borderLeft: `1px solid ${token.colorBorder}`,
                                    borderBottom: `1px solid ${token.colorBorder}`,
                                    fontSize: '10px',
                                    fontWeight: '800',
                                    color: mainColor,
                                    letterSpacing: '0.5px'
                                }}>
                                    {item.tag}
                                </div>

                                {/* تاريخ الفترة مع إضافة مسافة علوية للغة العربية أو لشاشة التابلت باللغة الإنجليزية */}
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    marginTop: isAr 
                                        ? (isDesktopOrTablet ? '14px' : '22px') 
                                        : (isTablet ? '14px' : (isDesktopOrTablet ? '0px' : '14px')),
                                    marginBottom: '14px'
                                }}>
                                    <span style={{
                                        background: token.colorFillTertiary,
                                        color: token.colorTextHeading,
                                        border: `1px solid ${token.colorBorder}`,
                                        padding: '3px 10px',
                                        borderRadius: '16px',
                                        fontSize: '11px',
                                        fontWeight: '700',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px'
                                    }}>
                                        <CalendarOutlined style={{ color: mainColor }} /> {item.period}
                                    </span>
                                </div>

                                {/* تفاصيل المحتوى */}
                                <h3 style={{ color: token.colorTextHeading, fontSize: isDesktopOrTablet ? '1.25rem' : '1.1rem', fontWeight: '900', margin: '0 0 6px 0', letterSpacing: '-0.3px' }}>
                                    {item.role}
                                </h3>

                                <div style={{ color: mainColor, fontSize: '14.5px', fontWeight: '800', marginBottom: '8px' }}>
                                    {item.company}
                                </div>

                                <div style={{ color: token.colorTextSecondary, fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '6px', marginBottom: '14px', fontWeight: '600' }}>
                                    <EnvironmentOutlined style={{ color: mainColor }} /> {item.location}
                                </div>

                                <p style={{ color: token.colorTextSecondary, fontSize: '13px', lineHeight: '1.6', margin: 0, fontWeight: '400' }}>
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
