import React, { useState } from 'react';
import { Grid, theme } from 'antd';
import { 
    CodeOutlined, 
    BgColorsOutlined, 
    LaptopOutlined, 
    AppstoreOutlined, 
    DatabaseOutlined, 
    ToolOutlined 
} from '@ant-design/icons';
import { motion } from 'framer-motion';

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
    SiGithub,
    SiPostman,
    SiHtml5,
    SiBootstrap,
    SiNetlify
} from 'react-icons/si';

import SkillsDesktop from './SkillsDesktop';
import SkillsMobile from './SkillsMobile';

const { useBreakpoint } = Grid;

export default function Skills() {
    const screens = useBreakpoint();
    const isDesktop = screens.lg;

    const { token } = theme.useToken();
    const mainPurple = token.colorPrimary;
    const isDarkMode = token.colorBgLayout === '#02060E' || token.colorBgLayout.startsWith('#0');

    // تصنيفات المهارات المستخرجة بدقة من سيرتك الذاتية مع أيقونة مختلفة لكل قسم
    const skillCategories = [
        {
            id: 'frontend-core',
            name: 'Frontend Core',
            categoryIcon: <CodeOutlined />,
            skills: [
                { name: 'JavaScript', level: 'Advanced', icon: <SiJavascript style={{ color: '#F7DF1E' }} /> },
                { name: 'TypeScript', level: 'beginner', icon: <SiTypescript style={{ color: '#3178C6' }} /> },
                { name: 'HTML5', level: 'Advanced', icon: <SiHtml5 style={{ color: '#E34F26' }} /> },
                { name: 'CSS3', level: 'Advanced', icon: <BgColorsOutlined style={{ color: '#1572B6' }} /> },
            ]
        },
        {
            id: 'frontend-frameworks',
            name: 'Frontend Frameworks',
            categoryIcon: <LaptopOutlined />,
            skills: [
                { name: 'React.js', level: 'Advanced', icon: <SiReact style={{ color: '#61DAFB' }} /> },
                { name: 'Next.js', level: 'beginner', icon: <SiNextdotjs style={{ color: isDarkMode ? '#ffffff' : '#000000' }} /> },
                { name: 'Tailwind CSS', level: 'Advanced', icon: <SiTailwindcss style={{ color: '#06B6D4' }} /> },
                { name: 'Ant Design', level: 'Advanced', icon: <SiAntdesign style={{ color: '#1677FF' }} /> },
                { name: 'Bootstrap', level: 'Intermediate', icon: <SiBootstrap style={{ color: '#7952B3' }} /> },
            ]
        },
        {
            id: 'backend',
            name: 'Backend & APIs',
            categoryIcon: <AppstoreOutlined />,
            skills: [
                { name: 'Python', level: 'Advanced', icon: <SiPython style={{ color: '#3776AB' }} /> },
                { name: 'Django', level: 'Advanced', icon: <SiDjango style={{ color: '#092E20' }} /> },
                { name: 'REST APIs', level: 'Intermediate', icon: <CodeOutlined style={{ color: mainPurple }} /> },
            ]
        },
        {
            id: 'database',
            name: 'Databases',
            categoryIcon: <DatabaseOutlined />,
            skills: [
                { name: 'PostgreSQL', level: 'Intermediate', icon: <SiPostgresql style={{ color: '#4169E1' }} /> },
                { name: 'Prisma ORM', level: 'beginner', icon: <SiPrisma style={{ color: mainPurple }} /> },
            ]
        },
        {
            id: 'tools',
            name: 'Tools & DevOps',
            categoryIcon: <ToolOutlined />,
            skills: [
                { name: 'Git', level: 'Advanced', icon: <SiGit style={{ color: '#F05032' }} /> },
                { name: 'GitHub', level: 'Advanced', icon: <SiGithub style={{ color: isDarkMode ? '#ffffff' : '#000000' }} /> },
                { name: 'Postman', level: 'Intermediate', icon: <SiPostman style={{ color: '#FF6C37' }} /> },
                { name: 'Netlify', level: 'Intermediate', icon: <SiNetlify style={{ color: '#00C7B7' }} /> },
            ]
        }
    ];

    const [activeTab, setActiveTab] = useState(skillCategories[0].id);
    const currentCategory = skillCategories.find(cat => cat.id === activeTab) || skillCategories[0];

    return (
        <section
            id="skills"
            style={{
                padding: isDesktop ? '70px 20px' : '45px 15px',
                position: 'relative',
                maxWidth: '1280px',
                margin: '0 auto',
            }}
        >
            {/* رأس القسم */}
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: mainPurple, fontSize: '13px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                        <CodeOutlined style={{ color: mainPurple }} /> SKILLS
                    </div>
                    <h2 style={{ color: token.colorText, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: '800', margin: '0 0 10px 0' }}>
                        Skills & Tools
                    </h2>
                </motion.div>
            </div>

            {/* التبديل التلقائي بين مكون الشاشات الكبيرة والصغيرة */}
            {isDesktop ? (
                <SkillsDesktop 
                    skillCategories={skillCategories}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    currentCategory={currentCategory}
                    mainPurple={mainPurple}
                    token={token}
                    isDarkMode={isDarkMode}
                />
            ) : (
                <SkillsMobile 
                    skillCategories={skillCategories}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    currentCategory={currentCategory}
                    mainPurple={mainPurple}
                    token={token}
                    isDarkMode={isDarkMode}
                />
            )}
        </section>
    );
}