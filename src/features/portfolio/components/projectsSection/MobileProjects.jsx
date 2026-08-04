import React from 'react';
import { Card, Tag, theme, Grid } from 'antd';
import { FolderOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { GithubOutlined, GlobalOutlined, ArrowRightOutlined } from '@ant-design/icons';

const { useBreakpoint } = Grid;

export default function MobileProjects({ projects, mainPurple }) {
    const { token } = theme.useToken();
    const screens = useBreakpoint();
    const isTablet = screens.md && !screens.lg;

    // عكس مرتبة البطاقات ليظهر تأثير التراص التصاعدي الصحيح
    const reversedProjects = [...projects].reverse();

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                paddingTop: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                paddingBottom: '40px'
            }}
        >
            {/* 1. العنوان مثبت (Sticky) كأول عنصر في التسلسل تماماً مثل الكروت */}
            <div
                style={{
                    position: 'sticky',
                    top: '70px', // مسافة آمنة تحت الـ Navbar العلوي
                    zIndex: 0, // أقل من الكروت لكي تستقر الكروت تحته ولا تختفي تحته بشكل خاطئ
                    textAlign: 'center',
                    padding: '10px 0',
                    background: 'transparent', // بدون خلفية معزولة، يبدو جزءاً من القسم
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: mainPurple, fontSize: '12px', fontWeight: '600', letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '4px' }}>
                        <FolderOutlined /> My Portfolio
                    </div>
                    <h2 style={{ color: token.colorText, fontSize: '1.6rem', fontWeight: '800', margin: 0 }}>
                        Featured Projects
                    </h2>
                </motion.div>
            </div>

            {/* 2. البطاقات المتراصة تبدأ بالظهور تحت العنوان بمسافة مدروسة */}
            {reversedProjects.map((project, index) => {
                // تم رفع نقطة البداية إلى 160px لضمان بقاء مسافة فاصلة نظيفة وثابتة بين العنوان والبطاقات
                const stickyTop = 160 + (index * 45);

                return (
                    <div
                        key={`${project.id || 'project'}-${index}`}
                        style={{
                            position: 'sticky',
                            top: `${stickyTop}px`,
                            zIndex: index + 1, // كل كارت يعتلي ما قبله
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        <div style={{ width: '100%', maxWidth: isTablet ? '480px' : '340px', display: 'flex' }}>
                            <Card
                                hoverable
                                style={{
                                    background: token.colorBgContainer,
                                    border: `1.5px solid ${mainPurple}60`,
                                    // ظل عميق ومنفصل يمنح مظهر الطبقات المتراكبة فوق بعضها
                                    boxShadow: `0 -10px 25px rgba(0,0,0,0.15), 0 20px 40px -10px ${mainPurple}45`,
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%',
                                    minHeight: '440px',
                                }}
                                styles={{
                                    body: {
                                        padding: '18px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flexGrow: 1,
                                        justifyContent: 'space-between'
                                    }
                                }}
                                cover={
                                    <div style={{ height: isTablet ? '230px' : '160px', overflow: 'hidden', position: 'relative' }}>
                                        <img
                                            alt={project.title}
                                            src={project.image}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                }
                            >
                                <div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '8px' }}>
                                        {project.tags.map((tag, tagIdx) => (
                                            <Tag
                                                key={tagIdx}
                                                style={{
                                                    background: `${mainPurple}1F`,
                                                    color: mainPurple,
                                                    border: `1px solid ${mainPurple}59`,
                                                    borderRadius: '6px',
                                                    fontSize: '10px',
                                                }}
                                            >
                                                {tag}
                                            </Tag>
                                        ))}
                                    </div>
                                    <h3 style={{ color: token.colorText, fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>
                                        {project.title}
                                    </h3>
                                    <p style={{ color: token.colorTextSecondary, fontSize: '12.5px', lineHeight: '1.4', marginBottom: '8px' }}>
                                        {project.description}
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
