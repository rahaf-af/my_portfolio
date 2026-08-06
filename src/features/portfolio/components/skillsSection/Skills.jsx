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

export default function Skills({ lang = 'en' }) {
    const screens = useBreakpoint();
    const isDesktop = screens.lg;
    const isAr = lang === 'ar';

    const { token } = theme.useToken();
    const mainPurple = token.colorPrimary;
    const isDarkMode = token.colorBgLayout === '#02060E' || token.colorBgLayout.startsWith('#0');

    // تعريف بيانات المهارات والكونفج مباشرة بداخلها المستويات (عربي / إنجليزي) بشكل منظّم
    const skillCategories = [
        {
            id: 'frontend-core',
            name: isAr ? 'أساسيات الواجهات الأمامية' : 'Frontend Core',
            categoryIcon: <CodeOutlined />,
            skills: [
                { name: 'JavaScript', level: isAr ? 'متقدم' : 'Advanced', icon: <SiJavascript style={{ color: '#F7DF1E' }} /> },
                { name: 'TypeScript', level: isAr ? 'مبتدئ' : 'Beginner', icon: <SiTypescript style={{ color: '#3178C6' }} /> },
                { name: 'HTML5', level: isAr ? 'متقدم' : 'Advanced', icon: <SiHtml5 style={{ color: '#E34F26' }} /> },
                { name: 'CSS3', level: isAr ? 'متقدم' : 'Advanced', icon: <BgColorsOutlined style={{ color: '#1572B6' }} /> },
            ]
        },
        {
            id: 'frontend-frameworks',
            name: isAr ? 'إطارات الواجهات الأمامية' : 'Frontend Frameworks',
            categoryIcon: <LaptopOutlined />,
            skills: [
                { name: 'React.js', level: isAr ? 'متقدم' : 'Advanced', icon: <SiReact style={{ color: '#61DAFB' }} /> },
                { name: 'Next.js', level: isAr ? 'مبتدئ' : 'Beginner', icon: <SiNextdotjs style={{ color: isDarkMode ? '#ffffff' : '#000000' }} /> },
                { name: 'Tailwind CSS', level: isAr ? 'متقدم' : 'Advanced', icon: <SiTailwindcss style={{ color: '#06B6D4' }} /> },
                { name: 'Ant Design', level: isAr ? 'متقدم' : 'Advanced', icon: <SiAntdesign style={{ color: '#1677FF' }} /> },
                { name: 'Bootstrap', level: isAr ? 'متوسط' : 'Intermediate', icon: <SiBootstrap style={{ color: '#7952B3' }} /> },
            ]
        },
        {
            id: 'backend',
            name: isAr ? 'الواجهات الخلفية وبرمجيات APIs' : 'Backend & APIs',
            categoryIcon: <AppstoreOutlined />,
            skills: [
                { name: 'Python', level: isAr ? 'متقدم' : 'Advanced', icon: <SiPython style={{ color: '#3776AB' }} /> },
                { name: 'Django', level: isAr ? 'متقدم' : 'Advanced', icon: <SiDjango style={{ color: '#092E20' }} /> },
                { name: 'REST APIs', level: isAr ? 'متوسط' : 'Intermediate', icon: <CodeOutlined style={{ color: mainPurple }} /> },
            ]
        },
        {
            id: 'database',
            name: isAr ? 'قواعد البيانات' : 'Databases',
            categoryIcon: <DatabaseOutlined />,
            skills: [
                { name: 'PostgreSQL', level: isAr ? 'متوسط' : 'Intermediate', icon: <SiPostgresql style={{ color: '#4169E1' }} /> },
                { name: 'Prisma ORM', level: isAr ? 'مبتدئ' : 'Beginner', icon: <SiPrisma style={{ color: mainPurple }} /> },
            ]
        },
        {
            id: 'tools',
            name: isAr ? 'الأدوات و DevOps' : 'Tools & DevOps',
            categoryIcon: <ToolOutlined />,
            skills: [
                { name: 'Git', level: isAr ? 'متقدم' : 'Advanced', icon: <SiGit style={{ color: '#F05032' }} /> },
                { name: 'GitHub', level: isAr ? 'متقدم' : 'Advanced', icon: <SiGithub style={{ color: isDarkMode ? '#ffffff' : '#000000' }} /> },
                { name: 'Postman', level: isAr ? 'متوسط' : 'Intermediate', icon: <SiPostman style={{ color: '#FF6C37' }} /> },
                { name: 'Netlify', level: isAr ? 'متوسط' : 'Intermediate', icon: <SiNetlify style={{ color: '#00C7B7' }} /> },
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
                        <CodeOutlined style={{ color: mainPurple }} /> {isAr ? 'المهارات' : 'SKILLS'}
                    </div>
                    <h2 style={{ color: token.colorText, fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: '800', margin: '0 0 10px 0' }}>
                        {isAr ? 'المهارات والأدوات' : 'Skills & Tools'}
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
                    lang={lang}
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
                    lang={lang}
                />
            )}
        </section>
    );
}
