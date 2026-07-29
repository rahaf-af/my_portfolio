import React, { useState } from 'react';
import { Button, Modal, Card, Space, Grid, theme } from 'antd';
import { DownloadOutlined, EyeOutlined, FilePdfOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import hero_photo2 from '../../../assets/hero_photo2.PNG';
import frontendCvPdf from '../../../assets/Rahaf_Fallatah_Frontend_developer.pdf';
import fullstackCvPdf from '../../../assets/Rahaf_Fallatah_Full_Stack_Developer.pdf';

const { useBreakpoint } = Grid;

// دوال مساعدة ثابتة خارج المكون لمنع إعادة إنشائها مع كل Render
const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
};

const handleOpenCv = (cvUrl) => {
    window.open(cvUrl, '_blank', 'noopener,noreferrer');
};

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const screens = useBreakpoint();

    const { token } = theme.useToken();
    const mainPurple = token.colorPrimary;
    const isDesktop = screens.lg;

    return (
        <motion.div
            id="home"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{
                position: 'relative',
                minHeight: isDesktop ? '45vh' : 'auto',
                maxWidth: '1100px',
                width: '100%',
                borderRadius: '24px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: isDesktop ? 'row' : 'column',
                alignItems: 'center',
                justifyContent: isDesktop ? 'space-between' : 'center',
                padding: isDesktop ? '30px 70px' : '32px 24px',
                margin: '15px auto',
                background: token.colorBgContainer,
                border: `1.5px solid ${mainPurple}80`,
                boxShadow: `0 8px 24px ${mainPurple}20`,
            }}
        >
            {/* 1. تصميم الشاشات الكبيرة */}
            {isDesktop && (
                <div
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        width: '40%',
                        height: '100%',
                        backgroundImage: `url(${hero_photo2})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center right',
                        backgroundRepeat: 'no-repeat',
                        zIndex: 1,
                        filter: `drop-shadow(0 30px 80px rgba(168, 85, 247, 0.35))`,
                    }}
                />
            )}

            {/* للشاشات الصغيرة والمتوسطة */}
            {!isDesktop && (
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '420px',
                        aspectRatio: '16 / 9',
                        marginBottom: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1,
                    }}
                >
                    <img
                        src={hero_photo2}
                        alt="Rahaf Fallatah"
                        fetchPriority="high"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            display: 'block',
                            filter: `drop-shadow(0 20px 50px rgba(168, 85, 247, 0.35))`,
                        }}
                    />
                </div>
            )}

            {/* 2. قسم النصوص والأزرار */}
            <div
                style={{
                    maxWidth: isDesktop ? '450px' : '100%',
                    width: '100%',
                    zIndex: 2,
                    position: 'relative',
                    textAlign: isDesktop ? 'left' : 'center',
                }}
            >
                <h1
                    style={{
                        fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)',
                        fontWeight: '800',
                        margin: '0 0 10px 0',
                        color: mainPurple,
                        letterSpacing: '-1px',
                        lineHeight: '1.2',
                    }}
                >
                    Hi, I'm Rahaf
                </h1>

                <div
                    style={{
                        fontSize: 'clamp(0.85rem, 1.5vw, 1.2rem)',
                        fontWeight: '500',
                        color: token.colorText,
                        minHeight: '38px',
                        marginBottom: '20px',
                        lineHeight: '1.5',
                    }}
                >
                    <Typewriter
                        options={{
                            strings: [
                                'Full-Stack Developer building scalable web applications',
                                'Frontend Developer specializing in React.js & Next.js.',
                                'Passionate about crafting responsive interfaces and robust APIs.',
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 40,
                            delay: 60,
                        }}
                    />
                </div>

                <div
                    style={{
                        display: 'flex',
                        gap: '12px',
                        justifyContent: isDesktop ? 'flex-start' : 'center',
                        flexWrap: 'wrap',
                        width: '100%',
                    }}
                >
                    <Button
                        type="primary"
                        size="large"
                        style={{
                            background: mainPurple,
                            borderColor: mainPurple,
                            borderRadius: '12px',
                            height: '55px',
                            padding: '0 40px',
                            fontWeight: '600',
                            fontSize: '14px',
                            boxShadow: `0 0 14px ${mainPurple}44`,
                        }}
                        onClick={handleScrollToProjects}
                    >
                        View My Work →
                    </Button>

                    <Button
                        size="large"
                        icon={<DownloadOutlined style={{ color: mainPurple }} />}
                        style={{
                            borderRadius: '12px',
                            height: '55px',
                            padding: '0 40px',
                            borderColor: mainPurple,
                            color: token.colorText,
                            background: `${token.colorBgLayout}99`,
                            backdropFilter: 'blur(5px)',
                            fontWeight: '600',
                            fontSize: '14px',
                        }}
                        onClick={() => setIsModalOpen(true)}
                    >
                        Download CV
                    </Button>
                </div>
            </div>

            {/* Modal الخاص بالسي في */}
            <Modal
                title={
                    <div style={{ color: token.colorText, fontSize: '18px', textAlign: 'center', fontWeight: '600' }}>
                        Select CV Version
                    </div>
                }
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
                centered
                styles={{
                    content: {
                        background: token.colorBgElevated,
                        border: `1px solid ${mainPurple}66`,
                        borderRadius: '20px',
                    },
                    header: { background: 'transparent' },
                }}
            >
                <p style={{ color: token.colorTextSecondary, textAlign: 'center', marginBottom: '24px' }}>
                    Choose the CV format that best matches the position:
                </p>

                <Space direction="vertical" style={{ width: '100%' }} size="middle">
                    {/* Frontend CV Card */}
                    <Card
                        style={{ background: token.colorBgContainer, borderColor: `${mainPurple}40`, borderRadius: '12px' }}
                        styles={{ body: { padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' } }}
                    >
                        <Space align="center">
                            <FilePdfOutlined style={{ fontSize: '24px', color: mainPurple }} />
                            <div>
                                <div style={{ color: token.colorText, fontWeight: '600' }}>Front-End Developer CV</div>
                                <div style={{ color: token.colorTextSecondary, fontSize: '12px' }}>React, Next.js & UI Components</div>
                            </div>
                        </Space>
                        <Space>
                            <Button
                                type="text"
                                icon={<EyeOutlined style={{ fontSize: '16px' }} />}
                                onClick={() => handleOpenCv(frontendCvPdf)}
                                style={{ color: mainPurple }}
                            />
                            <Button
                                type="primary"
                                icon={<DownloadOutlined />}
                                onClick={() => handleOpenCv(frontendCvPdf)}
                                style={{ background: mainPurple, borderColor: mainPurple, borderRadius: '8px' }}
                            >
                                Download
                            </Button>
                        </Space>
                    </Card>

                    {/* Full Stack CV Card */}
                    <Card
                        style={{ background: token.colorBgContainer, borderColor: `${mainPurple}40`, borderRadius: '12px' }}
                        styles={{ body: { padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' } }}
                    >
                        <Space align="center">
                            <FilePdfOutlined style={{ fontSize: '24px', color: mainPurple }} />
                            <div>
                                <div style={{ color: token.colorText, fontWeight: '600' }}>Full Stack Developer CV</div>
                                <div style={{ color: token.colorTextSecondary, fontSize: '12px' }}>React, Django & REST APIs</div>
                            </div>
                        </Space>
                        <Space>
                            <Button
                                type="text"
                                icon={<EyeOutlined style={{ fontSize: '16px' }} />}
                                onClick={() => handleOpenCv(fullstackCvPdf)}
                                style={{ color: mainPurple }}
                            />
                            <Button
                                type="primary"
                                icon={<DownloadOutlined />}
                                onClick={() => handleOpenCv(fullstackCvPdf)}
                                style={{ background: mainPurple, borderColor: mainPurple, borderRadius: '8px' }}
                            >
                                Download
                            </Button>
                        </Space>
                    </Card>
                </Space>
            </Modal>
        </motion.div>
    );
}
