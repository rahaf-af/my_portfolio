import React from 'react';
import { Grid, theme } from 'antd';
import { FolderOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

import DesktopProjects from './DesktopProjects';
import MobileProjects from './MobileProjects';

import Maqas from '../../../../assets/Maqas.PNG';
import Aniverse from '../../../../assets/Aniverse.PNG';
import Lafesta from '../../../../assets/Lafesta.PNG';
import Lavendra from '../../../../assets/Lavendra.PNG';
import { GrGroup } from "react-icons/gr";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoSparklesOutline } from "react-icons/io5";
import { GiSewingMachine } from "react-icons/gi";
const { useBreakpoint } = Grid;


export default function Projects() {
    const screens = useBreakpoint();
    const isDesktop = screens.lg;

    const { token } = theme.useToken();
    const mainPurple = token.colorPrimary;

    const baseProjects = [
        {
            id: 1,
            title: 'Lafesta - Dress Rental Platform',
            description: 'A full-stack dress rental web application integrated with secure checkout workflows and payment gateway redirection handling.',
            image: Lafesta,
            tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Django', 'Moyasar API'],
            icon: <RiShoppingBag3Line />,
        },
        {
            id: 2,
            title: 'Aniverse - Anime Community Platform',
            description: 'A full-stack anime community platform featuring dynamic user posts, interactive discussions, and full CRUD functionality for community engagement.',
            image: Aniverse,
            tags: ['React.js', 'Django', 'PostgreSQL', 'Postman'],
            icon: <GrGroup />,
        },
        {
            id: 3,
            title: 'Maqas - Tailoring Management Platform',
            description: 'A responsive web application engineered with multiple operational screens, custom form validations, and a clean user interface tailored for management.',
            image: Maqas,
            tags: ['React.js', 'Ant Design', 'Tailwind CSS'],
            icon: <GiSewingMachine />,
        },
        {
            id: 4,
            title: 'Lavendra - Salon Management System',
            description: 'A comprehensive production-level salon management system designed to streamline business operations, service tracking, and appointments.',
            image: Lavendra,
            tags: ['Next.js', 'TypeScript', 'Ant Design', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Neon'],
            icon: <IoSparklesOutline />,
        },
    ];

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
            {/* يظهر العنوان فقط في الشاشات الكبيرة لمنع التكرار على الموبايل */}
            {isDesktop && (
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: mainPurple, fontSize: '13px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                            <FolderOutlined /> My Portfolio
                        </div>
                        <h2 style={{ color: token.colorText, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: '800', margin: 0 }}>
                            Featured Projects
                        </h2>
                    </motion.div>
                </div>
            )}

            {/* تم إزالة desktopProjectsData المكررة واستخدام baseProjects الأصلية للجميع بأمان تام */}
            {isDesktop ? (
                <DesktopProjects projects={baseProjects} mainPurple={mainPurple} />
            ) : (
                <MobileProjects projects={baseProjects} mainPurple={mainPurple} />
            )}
        </section>
    );
}
