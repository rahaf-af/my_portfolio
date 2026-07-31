import React from 'react';
import { Tag, theme } from 'antd';
import { motion } from 'framer-motion';
import { GithubOutlined, GlobalOutlined, ArrowRightOutlined } from '@ant-design/icons';

export default function DesktopProjects({ projects, mainPurple }) {
    const { token } = theme.useToken();

    return (
        <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', padding: '30px 0', display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {projects.map((project, index) => {
                const isEven = index % 2 === 0;

                return (
                    <motion.div
                        key={`cinematic-project-${project.id}-${index}`}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1.3fr 1fr',
                            alignItems: 'center',
                            gap: '50px',
                            direction: isEven ? 'ltr' : 'rtl',
                            position: 'relative'
                        }}
                    >
                        {/* إطار الصورة */}
                        <div style={{ position: 'relative' }}>
                            <div 
                                style={{
                                    position: 'absolute',
                                    inset: '-15px',
                                    background: `linear-gradient(135deg, ${mainPurple}50, transparent)`,
                                    borderRadius: '32px',
                                    filter: 'blur(25px)',
                                    opacity: 0.3,
                                    zIndex: 0
                                }}
                            />
                            <motion.div
                                whileHover={{ scale: 1.02, y: -4 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                style={{
                                    height: '360px',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    zIndex: 1,
                                    boxShadow: `0 20px 40px -12px rgba(0,0,0,0.22)`,
                                    border: `1.5px solid ${mainPurple}35`
                                }}
                            >
                                <img
                                    alt={project.title}
                                    src={project.image}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: '20px',
                                        left: '20px',
                                        background: `${token.colorBgContainer}E6`,
                                        backdropFilter: 'blur(8px)',
                                        color: mainPurple,
                                        fontWeight: '900',
                                        fontSize: '12px',
                                        padding: '5px 14px',
                                        borderRadius: '20px',
                                        border: `1px solid ${mainPurple}30`
                                    }}
                                >
                                    PROJECT 0{index + 1}
                                </div>
                            </motion.div>
                        </div>

                        {/* قسم التفاصيل */}
                        <div 
                            style={{ 
                                display: 'flex', 
                                flexDirection: 'column', 
                                gap: '18px',
                                direction: 'ltr',
                                textAlign: 'left',
                                padding: '10px 0'
                            }}
                        >
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                {project.tags.map((tag, tagIdx) => (
                                    <Tag
                                        key={`tag-${index}-${tagIdx}`}
                                        style={{
                                            background: `${mainPurple}15`,
                                            color: mainPurple,
                                            border: `1px solid ${mainPurple}40`,
                                            borderRadius: '6px',
                                            fontSize: '11px',
                                            padding: '3px 9px',
                                            fontWeight: '600'
                                        }}
                                    >
                                        {tag}
                                    </Tag>
                                ))}
                            </div>

                            <h3 style={{ color: token.colorText, fontSize: '26px', fontWeight: '800', margin: 0, letterSpacing: '-0.5px', lineHeight: '1.2' }}>
                                {project.title}
                            </h3>

                            <p style={{ color: token.colorTextSecondary, fontSize: '15px', lineHeight: '1.6', margin: 0 }}>
                                {project.description}
                            </p>
                            {/* <div style={{ display: 'flex', gap: '14px', marginTop: '14px' }}>
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
                    </motion.div>
                );
            })}
        </div>
    );
}
