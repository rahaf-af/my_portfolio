import React from 'react';
import { Grid, theme } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { getAboutConfig } from '../../../config/aboutConfig.jsx';

const { useBreakpoint } = Grid;

export default function About({ lang = 'en' }) {
    const screens = useBreakpoint();
    const { token } = theme.useToken();

    const isDesktop = screens.lg;
    const mainPurple = token.colorPrimary;
    
    // جلب النصوص الخاصة باللغة الحالية (إنجليزي أو عربي)
    const aboutData = getAboutConfig(mainPurple)[lang] || getAboutConfig(mainPurple)['en'];

    return (
        <section
            id="about"
            style={{
                padding: isDesktop ? '110px 32px' : '50px 20px',
                position: 'relative',
                maxWidth: '1300px',
                margin: '0 auto',
            }}
        >
            {/* العنوان العلوي */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '50px' }}
            >
                <div
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: mainPurple,
                        fontSize: '12px',
                        fontWeight: '600',
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                    }}
                >
                    <UserOutlined /> {aboutData.whoAmI}
                </div>
                <h2
                    style={{
                        color: token.colorText,
                        fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                        fontWeight: '800',
                        margin: 0,
                    }}
                >
                    {aboutData.sectionTitle}
                </h2>
            </motion.div>

            {/* التخطيط العام */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: isDesktop ? '1.15fr 0.05fr 1fr' : '1fr',
                    gap: isDesktop ? '40px' : '60px',
                    alignItems: isDesktop ? 'center' : 'start',
                    position: 'relative',
                }}
            >
                {/* الجانب الأيسر: النبذة التعريفية والـ Tags */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3
                        style={{
                            color: token.colorText,
                            fontSize: 'clamp(1.4rem, 2.3vw, 1.9rem)',
                            fontWeight: '800',
                            lineHeight: '1.35',
                            marginBottom: '20px',
                        }}
                    >
                        {aboutData.mainTitle}
                    </h3>

                    {isDesktop ? (
                        <>
                            <p
                                style={{
                                    color: token.colorTextSecondary,
                                    fontSize: '15px',
                                    lineHeight: '1.75',
                                    marginBottom: '14px',
                                }}
                            >
                                {aboutData.descDesktop1}
                            </p>
                            <p
                                style={{
                                    color: token.colorTextSecondary,
                                    fontSize: '15px',
                                    lineHeight: '1.75',
                                    marginBottom: '28px',
                                }}
                            >
                                {aboutData.descDesktop2}
                            </p>
                        </>
                    ) : (
                        <p
                            style={{
                                color: token.colorTextSecondary,
                                fontSize: '14px',
                                lineHeight: '1.7',
                                marginBottom: '24px',
                            }}
                        >
                            {aboutData.descMobile}
                        </p>
                    )}

                    <div
                        style={{
                            width: '100%',
                            height: '1px',
                            background: `${mainPurple}33`,
                            marginBottom: '22px',
                        }}
                    />

                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '16px',
                        }}
                    >
                        {aboutData.tags.map((tag, i) => (
                            <div
                                key={i}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: token.colorText,
                                    fontSize: '13.5px',
                                    fontWeight: '500',
                                }}
                            >
                                <div
                                    style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        background: `${mainPurple}15`,
                                        border: `1px solid ${mainPurple}40`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {tag.icon}
                                </div>
                                <span>{tag.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* الخط الفاصل الرأسي */}
                {isDesktop && (
                    <div
                        style={{
                            width: '1px',
                            height: '100%',
                            minHeight: '350px',
                            background: `linear-gradient(to bottom, transparent, ${mainPurple}66, transparent)`,
                            margin: '0 auto',
                        }}
                    />
                )}

                {/* الجانب الأيمن / أو الأسفل في الشاشات الصغيرة */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '28px',
                    }}
                >
                    {aboutData.features.map((feat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            style={{
                                display: 'flex',
                                gap: '18px',
                                alignItems: 'flex-start',
                            }}
                        >
                            <div
                                style={{
                                    width: '46px',
                                    height: '46px',
                                    borderRadius: '50%',
                                    background: `${mainPurple}15`,
                                    border: `1px solid ${mainPurple}40`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: mainPurple,
                                    flexShrink: 0,
                                }}
                            >
                                {feat.icon}
                            </div>
                            <div>
                                <h4
                                    style={{
                                        color: token.colorText,
                                        fontSize: '17px',
                                        fontWeight: '700',
                                        marginBottom: '4px',
                                    }}
                                >
                                    {feat.title}
                                </h4>
                                <p
                                    style={{
                                        color: token.colorTextSecondary,
                                        fontSize: '14px',
                                        lineHeight: '1.6',
                                        margin: 0,
                                    }}
                                >
                                    {feat.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
