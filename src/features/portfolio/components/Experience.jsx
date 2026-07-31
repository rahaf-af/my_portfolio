import React from 'react';
import { Grid, theme } from 'antd';
import { CodeOutlined, CalendarOutlined, EnvironmentOutlined, ReadOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { useBreakpoint } = Grid;

export default function Experience() {
    const screens = useBreakpoint();
    const isDesktop = screens.lg;

    // جلب الثيم المركزي وتحديد الألوان بناءً عليه
    const { token } = theme.useToken();
    const mainPurple = token.colorPrimary;

    const timelineData = [
        {
            type: 'work',
            role: 'Front-End Developer',
            company: 'TechWin',
            period: 'Nov 2025 - Jul 2026',
            location: 'Makkah, Saudi Arabia • Hybrid',
            description: 'Developed responsive production-level user interfaces by translating UI designs into React.js components.'
        },
        {
            type: 'work',
            role: 'Software Engineer',
            company: 'Saudi Digital Academy',
            period: 'Aug 2025 - Nov 2025',
            location: 'Riyadh, Saudi Arabia • Remote',
            description: 'Built and styled multiple responsive web projects using HTML, CSS, and JavaScript.'
        },
        {
            type: 'work',
            role: 'Full-stack Developer',
            company: 'Tuwaiq Academy',
            period: 'Feb 2025 - May 2025',
            location: 'Riyadh, Saudi Arabia • On-site',
            description: 'Developed multiple web applications using Django, HTML, CSS, and Bootstrap as part of intensive bootcamp.'
        },
        {
            type: 'education',
            role: "Bachelor's degree, Information Systems",
            company: 'Umm Al-Qura University',
            period: 'Sep 2020 - Nov 2024',
            location: 'Makkah, Saudi Arabia',
            description: 'Graduated with a strong foundation in information systems, database management, and software principles.'
        }
    ];

    return (
        <section
            id="experience"
            style={{
                padding: isDesktop ? '80px 24px' : '50px 16px',
                position: 'relative',
                maxWidth: '1050px',
                margin: '0 auto'
            }}
        >
            {/* عنوان السكشن */}
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: mainPurple, fontSize: '13px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                        <CodeOutlined /> Career & Education
                    </div>
                    <h2 style={{ color: token.colorText, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: '800', margin: 0 }}>
                        My Journey
                    </h2>
                </motion.div>
            </div>
            {/* الحاوية للتايم لاين مع العمود الوسطي */}
            <div style={{
                position: 'relative',
                borderLeft: isDesktop ? 'none' : `2px solid ${mainPurple}55`,
                marginLeft: isDesktop ? '0' : '15px',
                paddingLeft: isDesktop ? '0' : '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '30px'
            }}>
                {/* خط المنتصف للشاشات الكبيرة */}
                {isDesktop && (
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: '0',
                        bottom: '0',
                        width: '2px',
                        background: `${mainPurple}55`,
                        transform: 'translateX(-50%)'
                    }} />
                )}

                {timelineData.map((item, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            // تم إزالة viewport={{ once: true }} لجعل الحركة تتكرر عند التمرير
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                position: 'relative',
                                display: 'flex',
                                justifyContent: isDesktop ? (isEven ? 'flex-end' : 'flex-start') : 'flex-start',
                                width: '100%'
                            }}
                        >
                            {/* نقطة التايم لاين المركزية */}
                            <div style={{
                                position: 'absolute',
                                left: isDesktop ? '50%' : '-31px',
                                top: '16px',
                                width: '22px',
                                height: '22px',
                                borderRadius: '50%',
                                background: token.colorBgElevated,
                                border: `2px solid ${mainPurple}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: `0 0 10px ${mainPurple}aa`,
                                color: mainPurple,
                                fontSize: '10px',
                                transform: isDesktop ? 'translateX(-50%)' : 'none',
                                zIndex: 2
                            }}>
                                {item.type === 'work' ? <CodeOutlined /> : <ReadOutlined />}
                            </div>

                            {/* كرت التفاصيل */}
                            <div
                                style={{
                                    background: token.colorBgContainer,
                                    border: `1.5px solid ${mainPurple}80`,
                                    boxShadow: `0 10px 30px ${mainPurple}40`,
                                    width: isDesktop ? '47%' : '100%',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    borderRadius: '16px',
                                    padding: '20px 24px',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.borderColor = mainPurple;
                                    e.currentTarget.style.boxShadow = `0 12px 35px ${mainPurple}44`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = `${mainPurple}80`;
                                    e.currentTarget.style.boxShadow = `0 10px 30px ${mainPurple}40`;
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
                                    <h3 style={{ color: token.colorText, fontSize: '1.15rem', fontWeight: '700', margin: 0 }}>
                                        {item.role}
                                    </h3>
                                    <span style={{
                                        background: `${mainPurple}22`,
                                        color: mainPurple,
                                        border: `1px solid ${mainPurple}55`,
                                        padding: '3px 12px',
                                        borderRadius: '20px',
                                        fontSize: '11.5px',
                                        fontWeight: '600',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '5px'
                                    }}>
                                        <CalendarOutlined /> {item.period}
                                    </span>
                                </div>

                                <div style={{ color: mainPurple, fontSize: '14.5px', fontWeight: '600', marginBottom: '6px' }}>
                                    {item.company}
                                </div>

                                <div style={{ color: token.colorTextSecondary, fontSize: '13px', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '12px' }}>
                                    <EnvironmentOutlined /> {item.location}
                                </div>

                                <p style={{ color: token.colorTextSecondary, fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
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
