import React, { useState } from 'react';
import { Grid, theme } from 'antd';
import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import CertificateDesktop from './CertificateDesktop';
import CertificateMobile from './CertificateMobile';
import { getCertificateConfig } from '../../../../config/certificateConfig';

import Certificate1 from '../../../../assets/Certificate1.png';
import Certificate2 from '../../../../assets/Certificate2.PNG';
import Certificate3 from '../../../../assets/Certificate3.png';
import Certificate4 from '../../../../assets/Certificate4.jpg';

const { useBreakpoint } = Grid;

export default function Certificate({ lang = 'en' }) {
    const screens = useBreakpoint();
    const isDesktopOrTablet = screens.md;

    const { token } = theme.useToken();
    const mainPurple = token.colorPrimary;

    const isAr = lang === 'ar';
    const certConfig = getCertificateConfig(isAr);

    const [selectedId, setSelectedId] = useState(1);

    const images = {
        1: Certificate1,
        2: Certificate3,
        3: Certificate2,
        4: Certificate4,
    };

    const credentials = certConfig.credentials.map((item) => ({
        ...item,
        image: images[item.id],
    }));

    const currentCert = credentials.find(c => c.id === selectedId) || credentials[0];

    return (
        <section id="certificates" style={{ padding: isDesktopOrTablet ? '160px 24px' : '90px 16px', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}>
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
                    <Trophy size={16} /> {certConfig.myAchievements}
                </div>
                <h2
                    style={{
                        color: token.colorText,
                        fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                        fontWeight: '800',
                        margin: 0,
                    }}
                >
                    {certConfig.certificatesTitle}
                </h2>
            </motion.div>

            {isDesktopOrTablet ? (
                <CertificateDesktop
                    credentials={credentials}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    currentCert={currentCert}
                    certConfig={certConfig}
                />
            ) : (
                <CertificateMobile
                    credentials={credentials}
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    currentCert={currentCert}
                    certConfig={certConfig}
                />
            )}
        </section>
    );
}
