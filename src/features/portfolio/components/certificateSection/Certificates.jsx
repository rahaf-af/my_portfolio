import React, { useState } from 'react';
import { Grid, theme } from 'antd';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import CertificateDesktop from './CertificateDesktop';
import CertificateMobile from './CertificateMobile';

import Certificate1 from '../../../../assets/Certificate1.png';
import Certificate2 from '../../../../assets/Certificate2.PNG';
import Certificate3 from '../../../../assets/Certificate3.png';
import Certificate4 from '../../../../assets/Certificate4.jpg';

const { useBreakpoint } = Grid;

export default function Certificate() {
    const screens = useBreakpoint();
    // استخدام screens.md ليعمل تصميم الديسكتوب على الآيباد/التابلت والشاشات الكبيرة معاً
    const isDesktopOrTablet = screens.md; 
    
    const { token } = theme.useToken();
    const mainPurple = token.colorPrimary;

    const [selectedId, setSelectedId] = useState(1);

    const credentials = [
        {
            id: 1,
            title: 'Full Stack Developer',
            institution: 'Tuwaiq Academy',
            period: 'Feb 2025 - May 2025',
            image: Certificate1,
            code: '01 // TWQ_FS',
            skills: ['Python', 'HTML', 'CSS', 'Django', 'Moyasar API'],
            desc: 'Intensive bootcamp focused on building full-stack web applications.'
        },
        {
            id: 2,
            title: 'React.js Developer',
            institution: 'Tuwaiq Academy',
            period: 'May 2025',
            image: Certificate3,
            code: '02 // TWQ_R.J',
            skills: ['React.js', 'Dynamic UI'],
            desc: 'Program in building dynamic user interfaces.'
        },
        {
            id: 3,
            title: 'Software Engineering',
            institution: 'SDA & General Assembly',
            period: 'Aug 2025 - Nov 2025',
            image: Certificate2,
            code: '03 // SDA_SE',
            skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL', 'PostgreSQL', 'Postman', 'React'],
            desc: 'Advanced software engineering bootcamp.'
        },
        {
            id: 4,
            title: 'Frontend Developer',
            institution: 'Techwin',
            period: 'Nov 2025 - Jul 2026',
            image: Certificate4,
            code: '04 // TWN_FD',
            skills: ['Tailwind CSS', 'Ant Design', 'React', 'Responsive Design', 'Netlify', 'AWS'],
            desc: 'Professional hands-on experience in frontend development.'
        }
    ];

    const currentCert = credentials.find(c => c.id === selectedId) || credentials[0];

    return (
        <section id="certificates" style={{ padding: isDesktopOrTablet ? '160px 24px' : '90px 16px', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}>
            {/* العنوان الأساسي الثابت */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginBottom: '50px' }}
            >
                <div
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: mainPurple,
                        fontSize: '12px',
                        fontWeight: '600',
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                    }}
                >
                    <Trophy size={16} /> MY ACHIEVEMENTS
                </div>
                <h2
                    style={{
                        color: token.colorText,
                        fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                        fontWeight: '800',
                        margin: 0,
                    }}
                >
                    Certificates
                </h2>
            </motion.div>

            {/* عرض الديسكتوب للشاشات المتوسطة والتابلت والديسكتوب، والجوال للهواتف الصغيرة فقط */}
            {isDesktopOrTablet ? (
                <CertificateDesktop
                    credentials={credentials}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    currentCert={currentCert}
                />
            ) : (
                <CertificateMobile
                    credentials={credentials}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    currentCert={currentCert}
                />
            )}
        </section>
    );
}
