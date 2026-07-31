import React from 'react';
import { Card, Tag, theme } from 'antd';
import { FolderOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { GithubOutlined, GlobalOutlined, ArrowRightOutlined } from '@ant-design/icons';

export default function MobileProjects({ projects, mainPurple }) {
    const { token } = theme.useToken();

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
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: mainPurple, fontSize: '12px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
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
                        <div style={{ width: '100%', maxWidth: '340px', display: 'flex' }}>
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
                                    <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
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
{/* 
                                    <div style={{ display: 'flex', gap: '14px', marginTop: '25px' , justifyContent:'center'}}>
                                        <motion.a
                                            href={project.githubLink || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.06, y: -3 }}
                                            whileTap={{ scale: 0.94 }}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '9px',
                                                padding: '12px 12px',
                                                borderRadius: '50px', // شكل كبسولي أنيق جداً يكسر حدة المربعات
                                                background: `${mainPurple}0D`,
                                                border: `1.5px solid ${mainPurple}40`,
                                                color: mainPurple,
                                                fontWeight: '700',
                                                fontSize: '13.5px',
                                                textDecoration: 'none',
                                                boxShadow: `0 4px 15px rgba(0,0,0,0.02)`,
                                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderColor = mainPurple;
                                                e.currentTarget.style.boxShadow = `0 8px 25px ${mainPurple}40`;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = `${mainPurple}0D`;
                                                e.currentTarget.style.color = mainPurple;
                                                e.currentTarget.style.borderColor = `${mainPurple}40`;
                                                e.currentTarget.style.boxShadow = `0 4px 15px rgba(0,0,0,0.02)`;
                                            }}
                                        >
                                            <GithubOutlined style={{ fontSize: '18px' }} />
                                        </motion.a>
                                        <motion.a
                                            href={project.liveLink || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.06, y: -3 }}
                                            whileTap={{ scale: 0.94 }}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                padding: '12px 26px',
                                                borderRadius: '50px', // شكل كبسولي متناسق
                                                background: `linear-gradient(135deg, ${mainPurple} 0%, ${mainPurple}CC 100%)`,
                                                border: '1.5px solid transparent',
                                                color: '#ffffff',
                                                fontWeight: '700',
                                                fontSize: '13.5px',
                                                textDecoration: 'none',
                                                boxShadow: `0 8px 25px ${mainPurple}40`,
                                                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.boxShadow = `0 12px 30px ${mainPurple}60`;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.boxShadow = `0 8px 25px ${mainPurple}40`;
                                            }}
                                        >
                                            <GlobalOutlined style={{ fontSize: '18px' }} />
                                            <span>Live Demo</span>
                                            <motion.span
                                                initial={{ x: 0 }}
                                                whileHover={{ x: 4 }}
                                                transition={{ duration: 0.2 }}
                                                style={{ display: 'inline-flex', alignItems: 'center' }}
                                            >
                                                <ArrowRightOutlined style={{ fontSize: '12px' }} />
                                            </motion.span>
                                        </motion.a>
                                    </div> */}
                                </div>
                            </Card>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
