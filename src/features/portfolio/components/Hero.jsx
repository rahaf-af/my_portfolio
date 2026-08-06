import React, { useState } from 'react';
import { Button, Modal, Card, Space, Grid, theme } from 'antd';
import { DownloadOutlined, EyeOutlined, FilePdfOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import hero_photo2 from '../../../assets/hero_photo2.PNG';
import frontendCvPdf from '../../../assets/Rahaf_Fallatah_Frontend_developer.pdf';
import fullstackCvPdf from '../../../assets/Rahaf_Fallatah_Full_Stack_Developer.pdf';
import { heroConfig } from '../../../config/heroConfig';

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

export default function Hero({ lang = 'en' }) {
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
            {/* الشاشات الكبيرة (اللاب توب): تتوزع بشكل متناسق وتعكس مكان الصورة بحسب اتجاه اللغة الإنجليزية أو العربية */}
            {isDesktop && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: lang === 'ar' ? -20 : 20 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                    style={{
                        position: 'absolute',
                        [lang === 'ar' ? 'left' : 'right']: 0,
                        top: 0,
                        width: '40%',
                        height: '100%',
                        backgroundImage: `url(${hero_photo2})`,
                        backgroundSize: 'contain',
                        backgroundPosition: lang === 'ar' ? 'center left' : 'center right',
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

            {/* قسم النصوص والأزرار (تنعكس المحاذاة تلقائياً مع اللغة) */}
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
                    textAlign: isDesktop ? (lang === 'ar' ? 'right' : 'left') : 'center',
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
                    {heroConfig.titles[lang]}
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
                            strings: heroConfig.roles[lang],
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
                    {heroConfig.descriptions[lang]}
                </div>

                {/* الأزرار */}
                <div
                    style={{
                        display: 'flex',
                        gap: '14px',
                        justifyContent: isDesktop ? (lang === 'ar' ? 'flex-end' : 'flex-start') : 'center',
                        flexWrap: 'wrap',
                        width: '100%',
                        flexDirection: lang === 'ar' ? 'row-reverse' : 'row'
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
                                gap: '8px',
                                flexDirection: lang === 'ar' ? 'row-reverse' : 'row'
                            }}
                            onClick={handleScrollToProjects}
                        >
                            <span>{heroConfig.buttons.viewWork[lang]}</span>
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
                                gap: '8px',
                                flexDirection: lang === 'ar' ? 'row-reverse' : 'row'
                            }}
                            onClick={() => setIsModalOpen(true)}
                        >
                            <DownloadOutlined style={{ fontSize: '16px', color: mainPurple }} />
                            <span>{heroConfig.buttons.downloadCv[lang]}</span>
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            {/* نافذة Modal للسي في */}
            <Modal
                title={
                    <div style={{ color: mainPurple, fontSize: '18px', textAlign: 'center', fontWeight: '700' }}>
                        {heroConfig.cvModal.title[lang]}
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
                    {heroConfig.cvModal.subtitle[lang]}
                </p>

                <Space orientation="vertical" style={{ width: '100%' }} size="middle">
                    <Card
                        style={{ background: token.colorBgContainer, borderColor: mainPurple, borderRadius: '12px' }}
                        styles={{ body: { padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: lang === 'ar' ? 'row' : 'row' } }}
                    >
                        <Space align="center" orientation={lang === 'ar' ? 'horizontal' : 'horizontal'}>
                            <FilePdfOutlined style={{ fontSize: '24px', color: mainPurple }} />
                            <div style={{ textAlign: lang === 'ar' ? 'right' : 'left'  , marginRight: lang === 'ar' ? '0' : '10px', marginLeft: lang === 'ar' ? '8px' : '0' }}>
                                <div style={{ color: token.colorText, fontWeight: '600', fontSize: '12px' , whiteSpace:'nowrap' }}>{heroConfig.cvModal.frontendTitle[lang]}</div>
                                <div style={{ color: token.colorTextSecondary, fontSize: '12px' }}>{heroConfig.cvModal.frontendDesc[lang]}</div>
                            </div>
                        </Space>
                        <Space orientation={lang === 'ar' ? 'horizontal-reverse' : 'horizontal'}>
                            <Button
                                type="primary"
                                icon={<DownloadOutlined />}
                                onClick={() => handleDownloadCv(frontendCvPdf, 'Rahaf_Fallatah_Frontend_developer.pdf')}
                                style={{ background: mainPurple, borderColor: mainPurple, borderRadius: '8px' }}
                            >
                                {heroConfig.cvModal.downloadBtn[lang]}
                            </Button>
                            <Button
                                type="text"
                                icon={<EyeOutlined style={{ fontSize: '16px' }} />}
                                onClick={() => handleOpenCv(frontendCvPdf)}
                                style={{ color: mainPurple }}
                            />
                        </Space>
                    </Card>

                    <Card
                        style={{ background: token.colorBgContainer, borderColor: mainPurple, borderRadius: '12px' }}
                        styles={{ body: { padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: lang === 'ar' ? 'row' : 'row' } }}
                    >
                        <Space align="center" orientation={lang === 'ar' ? 'horizontal' : 'horizontal'}>
                            <FilePdfOutlined style={{ fontSize: '24px', color: mainPurple }} />
                            <div style={{ textAlign: lang === 'ar' ? 'right' : 'left' , marginRight: lang === 'ar' ? '0' : '10px', marginLeft: lang === 'ar' ? '8px' : '0' }}>
                                <div style={{ color: token.colorText, fontWeight: '600',  fontSize: '12px' , whiteSpace:'nowrap'  }}>{heroConfig.cvModal.fullstackTitle[lang]}</div>
                                <div style={{ color: token.colorTextSecondary, fontSize: '12px' }}>{heroConfig.cvModal.fullstackDesc[lang]}</div>
                            </div>
                        </Space>
                        <Space orientation={lang === 'ar' ? 'horizontal-reverse' : 'horizontal'}>
                            <Button
                                type="primary"
                                icon={<DownloadOutlined />}
                                onClick={() => handleDownloadCv(fullstackCvPdf, 'Rahaf_Fallatah_Fullstack_developer.pdf')}
                                style={{ background: mainPurple, borderColor: mainPurple, borderRadius: '8px' }}
                            >
                                {heroConfig.cvModal.downloadBtn[lang]}
                            </Button>
                            <Button
                                type="text"
                                icon={<EyeOutlined style={{ fontSize: '16px' }} />}
                                onClick={() => handleOpenCv(fullstackCvPdf)}
                                style={{ color: mainPurple }}
                            />
                        </Space>
                    </Card>
                </Space>
            </Modal>
        </div>
    );
}
