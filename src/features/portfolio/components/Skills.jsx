import React from 'react';
import { Grid, theme } from 'antd';
import { CodeOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';

import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiAntdesign,
    SiPython,
    SiDjango,
    SiPostgresql,
    SiPrisma,
    SiGit,
    SiPostman,
    SiHtml5
} from 'react-icons/si';
import { BgColorsOutlined } from '@ant-design/icons';

const { useBreakpoint } = Grid;

export default function Skills() {
    const screens = useBreakpoint();
    const isDesktop = screens.lg;

    const { token } = theme.useToken();
    const mainPurple = token.colorPrimary; // يتم سحبه مباشرة من الثيم الجديد (#9303C5)
    const isDarkMode = token.colorBgLayout === '#02060E' || token.colorBgLayout.startsWith('#0');

    // توزيع المهارات على صفين مع الحفاظ على الحجم الأكبر والأنيق والخلو من النصوص الإضافية
    const row1Skills = [
        { name: 'React.js', icon: <SiReact style={{ color: '#61DAFB' }} />, glow: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs style={{ color: isDarkMode ? '#ffffff' : '#000000' }} />, glow: isDarkMode ? '#ffffff' : '#000000' },
        { name: 'TypeScript', icon: <SiTypescript style={{ color: '#3178C6' }} />, glow: '#3178C6' },
        { name: 'JavaScript', icon: <SiJavascript style={{ color: '#F7DF1E' }} />, glow: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss style={{ color: '#06B6D4' }} />, glow: '#06B6D4' },
        { name: 'Ant Design', icon: <SiAntdesign style={{ color: '#1677FF' }} />, glow: '#1677FF' },
        { name: 'Python', icon: <SiPython style={{ color: '#3776AB' }} />, glow: '#3776AB' },
    ];

    const row2Skills = [
        { name: 'Django', icon: <SiDjango style={{ color: '#092E20' }} />, glow: '#22c55e' },
        { name: 'PostgreSQL', icon: <SiPostgresql style={{ color: '#4169E1' }} />, glow: '#4169E1' },
        { name: 'Prisma ORM', icon: <SiPrisma style={{ color: mainPurple }} />, glow: mainPurple },
        { name: 'Git & GitHub', icon: <SiGit style={{ color: '#F05032' }} />, glow: '#F05032' },
        { name: 'Postman', icon: <SiPostman style={{ color: '#FF6C37' }} />, glow: '#FF6C37' },
        { name: 'HTML5', icon: <SiHtml5 style={{ color: '#E34F26' }} />, glow: '#E34F26' },
        { name: 'CSS3', icon: <BgColorsOutlined style={{ color: '#1572B6' }} />, glow: '#1572B6' },
    ];

    const renderSkillCard = (skill, index) => (
        <div
            key={index}
            style={{
                background: isDarkMode ? 'rgba(20, 10, 40, 0.7)' : token.colorBgContainer,
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: isDarkMode ? `1.5px solid ${skill.glow}88` : `1.5px solid ${mainPurple}59`,
                boxShadow: isDarkMode ? `0 8px 32px ${skill.glow}25, inset 0 0 16px ${skill.glow}15` : `0 10px 30px ${mainPurple}1a`,
                borderRadius: '24px',
                padding: '24px 32px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                minWidth: '240px',
                height: '100px',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)';
                e.currentTarget.style.borderColor = mainPurple;
                e.currentTarget.style.boxShadow = isDarkMode ? `0 12px 40px ${skill.glow}55, inset 0 0 20px ${skill.glow}33` : `0 15px 35px ${mainPurple}40`;
                e.currentTarget.style.background = isDarkMode ? 'rgba(30, 15, 60, 0.9)' : `${mainPurple}0D`;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = isDarkMode ? `${skill.glow}88` : `${mainPurple}59`;
                e.currentTarget.style.boxShadow = isDarkMode ? `0 8px 32px ${skill.glow}25, inset 0 0 16px ${skill.glow}15` : `0 10px 30px ${mainPurple}1a`;
                e.currentTarget.style.background = isDarkMode ? 'rgba(20, 10, 40, 0.7)' : token.colorBgContainer;
            }}
        >
            <div style={{ fontSize: '42px', display: 'flex', alignItems: 'center', flexShrink: 0, filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.35))' }}>
                {skill.icon}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ color: isDarkMode ? '#f3e8ff' : token.colorText, fontSize: '17px', fontWeight: '700', whiteSpace: 'nowrap', letterSpacing: '0.3px' }}>
                    {skill.name}
                </span>
            </div>
        </div>
    );

    return (
        <section
            id="skills"
            style={{
                padding: isDesktop ? '70px 0' : '45px 0',
                position: 'relative'
            }}
        >
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {/* العنوان والـ Icon متصلان الآن باللون الجديد للثيم mainPurple مباشرة */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: mainPurple, fontSize: '13px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                        <CodeOutlined style={{ color: mainPurple }} /> Expertise
                    </div>
                    <h2 style={{ color: token.colorText, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: '800', margin: 0 }}>
                        Skills & Technologies
                    </h2>
                </motion.div>
            </div>

            {/* الصف الأول يتحرك يميناً */}
            <div style={{ marginBottom: '16px' }}>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={24}
                    slidesPerView={'auto'}
                    loop={true}
                    speed={8000}
                    autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: false }}
                    allowTouchMove={false}
                    style={{ padding: '15px 0' }}
                >
                    {row1Skills.map((skill, index) => (
                        <SwiperSlide key={index} style={{ width: 'auto', padding: '0 4px' }}>
                            {renderSkillCard(skill, index)}
                        </SwiperSlide>
                    ))}
                    {row1Skills.map((skill, index) => (
                        <SwiperSlide key={`dup-${index}`} style={{ width: 'auto', padding: '0 4px' }}>
                            {renderSkillCard(skill, `dup-${index}`)}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* الصف الثاني يتحرك بالاتجاه المعاكس (يساراً) */}
            <div>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={24}
                    slidesPerView={'auto'}
                    loop={true}
                    speed={8000}
                    autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }}
                    allowTouchMove={false}
                    style={{ padding: '15px 0' }}
                >
                    {row2Skills.map((skill, index) => (
                        <SwiperSlide key={index} style={{ width: 'auto', padding: '0 4px' }}>
                            {renderSkillCard(skill, index)}
                        </SwiperSlide>
                    ))}
                    {row2Skills.map((skill, index) => (
                        <SwiperSlide key={`dup-${index}`} style={{ width: 'auto', padding: '0 4px' }}>
                            {renderSkillCard(skill, `dup-${index}`)}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
