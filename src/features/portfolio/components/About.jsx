import React from 'react';
import { Grid, theme } from 'antd';
import { UserOutlined, CodeOutlined, DatabaseOutlined, RocketOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const { useBreakpoint } = Grid;

const getAboutCards = (mainPurple, token) => [
    {
        type: 'main',
        title: (
            <>
                Frontend Developer with a <br />
                Passion for <span style={{ color: mainPurple }}>Full-Stack</span> Growth 🚀
            </>
        ),
        desc1: "Detail-oriented Frontend and Full-Stack Developer with a Bachelor's degree in Information Systems and hands-on experience designing, developing, and deploying web applications using JavaScript, Python, React.js, and Django.",
        desc2: 'Skilled in writing clean, well-structured code, integrating RESTful APIs, and collaborating within cross-functional teams across the full software development lifecycle.',
        tags: ['Problem Solver', 'Clean Code', 'UI/UX Enthusiast'],
    },
    {
        type: 'card',
        icon: <CodeOutlined style={{ fontSize: '22px' }} />,
        title: 'Frontend Expertise',
        desc: 'Specialized in building modern, dynamic user interfaces using React, Next.js, TypeScript, and Ant Design with smooth animations.',
    },
    {
        type: 'card',
        icon: <DatabaseOutlined style={{ fontSize: '22px' }} />,
        title: 'Full-Stack Vision',
        desc: 'Keen understanding of backend logic, handling REST APIs, databases, and creating robust full CRUD application flows.',
    },
    {
        type: 'card',
        icon: <RocketOutlined style={{ fontSize: '24px' }} />,
        title: 'Ready for New Challenges',
        desc: 'Actively seeking professional opportunities as a Frontend / Full-Stack Developer to build impactful digital experiences.',
    },
];

export default function About() {
    const screens = useBreakpoint();
    const { token } = theme.useToken();

    const isMobileOrTablet = !screens.lg;
    const isDesktop = screens.lg;
    const mainPurple = token.colorPrimary;
    const aboutCards = getAboutCards(mainPurple, token);

    return (
        <section
            id="about"
            style={{
                padding: isDesktop ? '100px 32px' : '50px 16px',
                position: 'relative',
                maxWidth: '1300px',
                margin: '0 auto',
            }}
        >
            <style>{`
                .swiper-pagination-bullet {
                    background: ${mainPurple} !important;
                    opacity: 0.3 !important;
                    width: 8px !important;
                    height: 8px !important;
                    transition: all 0.3s ease;
                }
                .swiper-pagination-bullet-active {
                    background: ${mainPurple} !important;
                    opacity: 1 !important;
                    width: 22px !important;
                    border-radius: 4px !important;
                }
                .swiper {
                    transition: height 0.3s ease;
                }
            `}</style>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center', marginBottom: '40px' }}
            >
                <div
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: mainPurple,
                        fontSize: '12px',
                        fontWeight: '600',
                        letterSpacing: '1.2px',
                        textTransform: 'uppercase',
                        marginBottom: '6px',
                    }}
                >
                    <UserOutlined /> Who Am I
                </div>
                <h2
                    style={{
                        color: token.colorText,
                        fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
                        fontWeight: '800',
                        margin: 0,
                    }}
                >
                    About Me
                </h2>
            </motion.div>

            {isMobileOrTablet ? (
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={16}
                    slidesPerView={1}
                    autoHeight={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4500, disableOnInteraction: false }}
                    style={{
                        paddingBottom: '45px',
                        width: '100%',
                    }}
                >
                    {aboutCards.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            style={{ height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}
                        >
                            <div
                                style={{
                                    width: '100%',
                                    maxWidth: screens.md ? '600px' : '100%',
                                    background: token.colorBgContainer,
                                    border: `1.5px solid ${mainPurple}66`,
                                    borderRadius: '20px',
                                    padding: '24px',
                                    boxSizing: 'border-box',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    boxShadow: `0 15px 35px ${mainPurple}26`,
                                }}
                            >
                                {item.type === 'main' ? (
                                    <div>
                                        <h3
                                            style={{
                                                color: token.colorText,
                                                fontSize: '1.3rem',
                                                fontWeight: '700',
                                                lineHeight: '1.3',
                                                marginBottom: '12px',
                                            }}
                                        >
                                            {item.title}
                                        </h3>
                                        <p
                                            style={{
                                                color: token.colorTextSecondary,
                                                fontSize: '14px',
                                                lineHeight: '1.6',
                                                marginBottom: '10px',
                                            }}
                                        >
                                            {item.desc1}
                                        </p>
                                        <p
                                            style={{
                                                color: token.colorTextSecondary,
                                                fontSize: '14px',
                                                lineHeight: '1.6',
                                                margin: 0,
                                            }}
                                        >
                                            {item.desc2}
                                        </p>
                                    </div>
                                ) : (
                                    <div>
                                        <div
                                            style={{
                                                width: '46px',
                                                height: '46px',
                                                borderRadius: '12px',
                                                background: `${mainPurple}22`,
                                                border: `1px solid ${mainPurple}55`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: mainPurple,
                                                marginBottom: '16px',
                                            }}
                                        >
                                            {item.icon}
                                        </div>
                                        <h4
                                            style={{
                                                color: token.colorText,
                                                fontSize: '17px',
                                                fontWeight: '700',
                                                marginBottom: '8px',
                                            }}
                                        >
                                            {item.title}
                                        </h4>
                                        <p
                                            style={{
                                                color: token.colorTextSecondary,
                                                fontSize: '14px',
                                                lineHeight: '1.6',
                                                margin: 0,
                                            }}
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                )}

                                {item.tags && (
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '8px',
                                            marginTop: '18px',
                                            paddingTop: '14px',
                                            borderTop: `1px solid ${mainPurple}33`,
                                        }}
                                    >
                                        {item.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '5px',
                                                    color: token.colorText,
                                                    fontSize: '12.5px',
                                                }}
                                            >
                                                <CheckCircleOutlined style={{ color: mainPurple }} /> {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '24px',
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                            gridColumn: 'span 2',
                            background: token.colorBgContainer,
                            border: `1.5px solid ${mainPurple}66`,
                            borderRadius: '20px',
                            padding: '36px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            boxShadow: `0 15px 35px ${mainPurple}26`,
                        }}
                    >
                        <div>
                            <h3
                                style={{
                                    color: token.colorText,
                                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                                    fontWeight: '700',
                                    lineHeight: '1.3',
                                    marginBottom: '16px',
                                }}
                            >
                                Frontend Developer with a <br />
                                Passion for <span style={{ color: mainPurple }}>Full-Stack</span> Growth 🚀
                            </h3>
                            <p
                                style={{
                                    color: token.colorTextSecondary,
                                    fontSize: '15.5px',
                                    lineHeight: '1.7',
                                    marginBottom: '16px',
                                }}
                            >
                                Detail-oriented Frontend and Full-Stack Developer with a Bachelor's degree in Information Systems and hands-on experience designing, developing, and deploying web applications using JavaScript, Python, React.js, and Django.
                            </p>
                            <p
                                style={{
                                    color: token.colorTextSecondary,
                                    fontSize: '15.5px',
                                    lineHeight: '1.7',
                                    margin: 0,
                                }}
                            >
                                Skilled in writing clean, well-structured code, integrating RESTful APIs, and collaborating within cross-functional teams across the full software development lifecycle.
                            </p>
                        </div>

                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                                gap: '12px',
                                marginTop: '30px',
                                paddingTop: '20px',
                                borderTop: `1px solid ${mainPurple}33`,
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: token.colorText, fontSize: '14px' }}>
                                <CheckCircleOutlined style={{ color: mainPurple }} /> <span>Problem Solver</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: token.colorText, fontSize: '14px' }}>
                                <CheckCircleOutlined style={{ color: mainPurple }} /> <span>Clean Code</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: token.colorText, fontSize: '14px' }}>
                                <CheckCircleOutlined style={{ color: mainPurple }} /> <span>UI/UX Enthusiast</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{
                            background: token.colorBgContainer,
                            border: `1.5px solid ${mainPurple}66`,
                            borderRadius: '20px',
                            padding: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            boxShadow: `0 15px 35px ${mainPurple}26`,
                        }}
                    >
                        <div
                            style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                background: `${mainPurple}22`,
                                border: `1px solid ${mainPurple}55`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: mainPurple,
                                marginBottom: '20px',
                            }}
                        >
                            <CodeOutlined style={{ fontSize: '22px' }} />
                        </div>
                        <h4 style={{ color: token.colorText, fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>
                            Frontend Expertise
                        </h4>
                        <p style={{ color: token.colorTextSecondary, fontSize: '14.5px', lineHeight: '1.6', margin: 0 }}>
                            Specialized in building modern, dynamic user interfaces using React, Next.js, TypeScript, and Ant Design with smooth animations.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            background: token.colorBgContainer,
                            border: `1.5px solid ${mainPurple}66`,
                            borderRadius: '20px',
                            padding: '30px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            boxShadow: `0 15px 35px ${mainPurple}26`,
                        }}
                    >
                        <div
                            style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                background: `${mainPurple}22`,
                                border: `1px solid ${mainPurple}55`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: mainPurple,
                                marginBottom: '20px',
                            }}
                        >
                            <DatabaseOutlined style={{ fontSize: '22px' }} />
                        </div>
                        <h4 style={{ color: token.colorText, fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>
                            Full-Stack Vision
                        </h4>
                        <p style={{ color: token.colorTextSecondary, fontSize: '14.5px', lineHeight: '1.6', margin: 0 }}>
                            Keen understanding of backend logic, handling REST APIs, databases, and creating robust full CRUD application flows.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{
                            gridColumn: 'span 2',
                            background: token.colorBgContainer,
                            border: `1.5px solid ${mainPurple}66`,
                            borderRadius: '20px',
                            padding: '30px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                            boxShadow: `0 15px 35px ${mainPurple}26`,
                        }}
                    >
                        <div
                            style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '12px',
                                background: `${mainPurple}22`,
                                border: `1px solid ${mainPurple}55`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: mainPurple,
                                flexShrink: 0,
                            }}
                        >
                            <RocketOutlined style={{ fontSize: '24px' }} />
                        </div>
                        <div>
                            <h4 style={{ color: token.colorText, fontSize: '17px', fontWeight: '700', marginBottom: '6px' }}>
                                Ready for New Challenges
                            </h4>
                            <p style={{ color: token.colorTextSecondary, fontSize: '14.5px', margin: 0, lineHeight: '1.5' }}>
                                Actively seeking professional opportunities as a Frontend / Full-Stack Developer to build impactful digital experiences.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    );
}
