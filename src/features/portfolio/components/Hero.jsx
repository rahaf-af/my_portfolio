import React, { useState } from 'react';
import { Button, Modal, Card, Space, Grid, theme } from 'antd';
import { DownloadOutlined, EyeOutlined, FilePdfOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import hero_photo2 from '../../../assets/hero_photo2.PNG';
import frontendCvPdf from '../../../assets/Rahaf_Fallatah_Frontend_developer.pdf';
import fullstackCvPdf from '../../../assets/Rahaf_Fallatah_Full_Stack_Developer.pdf';

const { useBreakpoint } = Grid;

const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
};

const handleOpenCv = (cvUrl) => {
    window.open(cvUrl, '_blank', 'noopener,noreferrer');
};

const handleDownloadCv = (cvUrl, fileName) => {
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const screens = useBreakpoint();

    const { token } = theme.useToken();
    const mainPurple = token.colorPrimary;
    const isDesktop = screens.lg;
    const isDarkMode = token.colorBgLayout === '#02060E' || token.colorBgLayout.startsWith('#0') || token.colorBgContainer.startsWith('#1');

    return (
        <div
            id="home"
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
                border: `1.5px solid ${mainPurple}`,
                boxShadow: isDarkMode ? `0 8px 32px ${mainPurple}40, inset 0 0 16px ${mainPurple}20` : `0 10px 30px ${mainPurple}26`,
            }}
        >
            {/* الشاشات الكبيرة */}
            {isDesktop && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
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
                        filter: `drop-shadow(0 30px 80px ${mainPurple}66)`,
                    }}
                />
            )}

            {/* الشاشات الصغيرة */}
            {!isDesktop && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
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
                            filter: `drop-shadow(0 20px 50px ${mainPurple}66)`,
                        }}
                    />
                </motion.div>
            )}

            {/* قسم النصوص والأزرار */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
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
                        margin: '0 0 5px 0',
                        color: mainPurple,
                        letterSpacing: '-1px',
                        lineHeight: '1.2',
                    }}
                >
                    Hi, I'm Rahaf
                </h1>

                {/* المسمى الوظيفي المتحرك (Typewriter) */}
                <div
                    style={{
                        fontSize: 'clamp(1rem, 1.8vw, 1.35rem)',
                        fontWeight: '700',
                        color: token.colorText,
                        marginBottom: '10px',
                        letterSpacing: '-0.5px',
                        minHeight: '32px',
                    }}
                >
                    <Typewriter
                        options={{
                            strings: [
                                'Full-Stack Developer',
                                'Frontend Developer',
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 40,
                            delay: 60,
                        }}
                    />
                </div>

                {/* الوصف الثابت */}
                <div
                    style={{
                        fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
                        fontWeight: '500',
                        color: token.colorTextSecondary,
                        marginBottom: '20px',
                        lineHeight: '1.5',
                    }}
                >
                    Building scalable web applications, modern UI/UX components, and responsive, high-performance interfaces.
                </div>

                {/* الأزرار */}
                <div
                    style={{
                        display: 'flex',
                        gap: '14px',
                        justifyContent: isDesktop ? 'flex-start' : 'center',
                        flexWrap: 'wrap',
                        width: '100%',
                    }}
                >
                    <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.94 }}>
                        <Button
                            type="primary"
                            style={{
                                background: `linear-gradient(135deg, ${mainPurple} 0%, ${mainPurple}CC 100%)`,
                                border: `1.5px solid ${mainPurple}`,
                                borderRadius: '15px',
                                height: '48px',
                                padding: '0 28px',
                                color: '#ffffff',
                                fontWeight: '700',
                                fontSize: '13.5px',
                                boxShadow: `0 8px 25px ${mainPurple}50`,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                            onClick={handleScrollToProjects}
                        >
                            <span>View My Work</span>
                            <ArrowRightOutlined style={{ fontSize: '12px' }} />
                        </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.06, y: -3 }} whileTap={{ scale: 0.94 }}>
                        <Button
                            style={{
                                borderRadius: '15px',
                                height: '48px',
                                padding: '0 28px',
                                background: `${mainPurple}15`,
                                border: `1.5px solid ${mainPurple}`,
                                color: mainPurple,
                                fontWeight: '700',
                                fontSize: '13.5px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                            onClick={() => setIsModalOpen(true)}
                        >
                            <DownloadOutlined style={{ fontSize: '16px', color: mainPurple }} />
                            <span>Download CV</span>
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            {/* نافذة Modal للسي في */}
            <Modal
                title={
                    <div style={{ color: mainPurple, fontSize: '18px', textAlign: 'center', fontWeight: '700' }}>
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
                        border: `1.5px solid ${mainPurple}`,
                        borderRadius: '20px',
                        boxShadow: `0 15px 40px ${mainPurple}33`,
                    },
                    header: { background: 'transparent' },
                }}
            >
                <p style={{ color: token.colorTextSecondary, textAlign: 'center', marginBottom: '24px' }}>
                    Choose the CV format that best matches the position:
                </p>

                <Space direction="vertical" style={{ width: '100%' }} size="middle">
                    <Card
                        style={{ background: token.colorBgContainer, borderColor: mainPurple, borderRadius: '12px' }}
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
                                onClick={() => handleDownloadCv(frontendCvPdf, 'Rahaf_Fallatah_Frontend_developer.pdf')}
                                style={{ background: mainPurple, borderColor: mainPurple, borderRadius: '8px' }}
                            >
                                Download
                            </Button>
                        </Space>
                    </Card>

                    <Card
                        style={{ background: token.colorBgContainer, borderColor: mainPurple, borderRadius: '12px' }}
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
                                onClick={() => handleDownloadCv(fullstackCvPdf, 'Rahaf_Fallatah_Fullstack_developer.pdf')}
                                style={{ background: mainPurple, borderColor: mainPurple, borderRadius: '8px' }}
                            >
                                Download
                            </Button>
                        </Space>
                    </Card>
                </Space>
            </Modal>
        </div>
    );
}
