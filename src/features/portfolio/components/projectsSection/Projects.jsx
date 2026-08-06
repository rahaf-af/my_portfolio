import React from 'react';
import { Grid, theme } from 'antd';
import { FolderOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

import DesktopProjects from './DesktopProjects';
import MobileProjects from './MobileProjects';
import { getProjectsConfig } from '../../../../config/projectsConfig ';

const { useBreakpoint } = Grid;

export default function Projects({ lang = 'en' }) {
    const screens = useBreakpoint();
    const isDesktop = screens.lg;
    const isAr = lang === 'ar';

    const { token } = theme.useToken();
    const mainPurple = token.colorPrimary;

    // جلب النصوص بناءً على اللغة الممررة بدقة
    const projectsConfig = getProjectsConfig(lang);

    return (
        <section
            id="projects"
            style={{
                padding: isDesktop ? '80px 20px' : '40px 12px 80px 12px',
                position: 'relative',
                maxWidth: '1400px',
                margin: '0 auto',
            }}
        >
            {isDesktop && (
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: mainPurple, fontSize: '13px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px', flexDirection: isAr ? 'row-reverse' : 'row' }}>
                            <FolderOutlined /> {projectsConfig.sectionHeader.badge}
                        </div>
                        <h2 style={{ color: token.colorText, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', margin: 0 }}>
                            {projectsConfig.sectionHeader.title}
                        </h2>
                    </motion.div>
                </div>
            )}

            {isDesktop ? (
                <DesktopProjects projects={projectsConfig.projects} mainPurple={mainPurple} lang={lang} />
            ) : (
                <MobileProjects projects={projectsConfig.projects} mainPurple={mainPurple} lang={lang} />
            )}
        </section>
    );
}
