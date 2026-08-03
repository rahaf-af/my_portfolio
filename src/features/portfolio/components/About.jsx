import React from 'react';
import { Grid, theme } from 'antd';
import { UserOutlined, CodeOutlined, DatabaseOutlined, RocketOutlined, BugOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { useBreakpoint } = Grid;

const getAboutData = (mainPurple) => ({
    mainTitle: (
        <>
            Frontend Developer with a <br />
            Passion for <span style={{ color: mainPurple }}>Full-Stack</span> Growth 🚀
        </>
    ),
    descDesktop1: "Detail-oriented Frontend and Full-Stack Developer with a Bachelor's degree in Information Systems and hands-on experience designing, developing, and deploying web applications using JavaScript, Python, React.js, and Django.",
    descDesktop2: 'Skilled in writing clean, well-structured code, integrating RESTful APIs, and collaborating within cross-functional teams across the full software development lifecycle.',
    descMobile: "Detail-oriented Frontend and Full-Stack Developer with a Bachelor's degree in Information Systems and hands-on experience building dynamic web apps using JavaScript, Python, and React.js.",
    tags: [
        { label: 'Problem Solver', icon: <CodeOutlined style={{ color: mainPurple }} /> },
        { label: 'Clean Code', icon: <span style={{ color: mainPurple, fontFamily: 'monospace', fontWeight: 'bold' }}>{`{}`}</span> },
        { label: 'UI/UX Enthusiast', icon: <UserOutlined style={{ color: mainPurple }} /> },
        { label: 'Bug Slayer', icon: <BugOutlined style={{ color: mainPurple }} /> },
    ],
    features: [
        {
            icon: <CodeOutlined style={{ fontSize: '18px' }} />,
            title: 'Frontend Expertise',
            desc: 'Specialized in building modern, dynamic user interfaces using React, Next.js, TypeScript, and Ant Design.',
        },
        {
            icon: <DatabaseOutlined style={{ fontSize: '18px' }} />,
            title: 'Full-Stack Vision',
            desc: 'Keen understanding of backend logic, handling REST APIs, databases, and full CRUD application flows.',
        },
        {
            icon: <RocketOutlined style={{ fontSize: '18px' }} />,
            title: 'Ready for New Challenges',
            desc: 'Actively seeking professional opportunities as a Frontend / Full-Stack Developer to build impactful apps.',
        },
    ],
});

export default function About() {
    const screens = useBreakpoint();
    const { token } = theme.useToken();

    const isDesktop = screens.lg;
    const mainPurple = token.colorPrimary;
    const aboutData = getAboutData(mainPurple);

    return (
        <section
            id="about"
            style={{
                padding: isDesktop ? '110px 32px' : '50px 20px',
                position: 'relative',
                maxWidth: '1300px',
                margin: '0 auto',
            }}
        >
            {/* العنوان العلوي */}
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
                    <UserOutlined /> WHO AM I
                </div>
                <h2
                    style={{
                        color: token.colorText,
                        fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                        fontWeight: '800',
                        margin: 0,
                    }}
                >
                    About Me
                </h2>
            </motion.div>

            {/* التخطيط العام */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: isDesktop ? '1.15fr 0.05fr 1fr' : '1fr',
                    gap: isDesktop ? '40px' : '60px',
                    alignItems: isDesktop ? 'center' : 'start',
                    position: 'relative',
                }}
            >
                {/* الجانب الأيسر: النبذة التعريفية والـ Tags */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3
                        style={{
                            color: token.colorText,
                            // تم تصغير الحد الأدنى للخط هنا (clamp) لكي لا يهرب الصاروخ لسطر جديد في شاشات الجوال
                            fontSize: 'clamp(1.4rem, 2.3vw, 1.9rem)',
                            fontWeight: '800',
                            lineHeight: '1.35',
                            marginBottom: '20px',
                        }}
                    >
                        {aboutData.mainTitle}
                    </h3>

                    {isDesktop ? (
                        <>
                            <p
                                style={{
                                    color: token.colorTextSecondary,
                                    fontSize: '15px',
                                    lineHeight: '1.75',
                                    marginBottom: '14px',
                                }}
                            >
                                {aboutData.descDesktop1}
                            </p>
                            <p
                                style={{
                                    color: token.colorTextSecondary,
                                    fontSize: '15px',
                                    lineHeight: '1.75',
                                    marginBottom: '28px',
                                }}
                            >
                                {aboutData.descDesktop2}
                            </p>
                        </>
                    ) : (
                        <p
                            style={{
                                color: token.colorTextSecondary,
                                fontSize: '14px',
                                lineHeight: '1.7',
                                marginBottom: '24px',
                            }}
                        >
                            {aboutData.descMobile}
                        </p>
                    )}

                    <div
                        style={{
                            width: '100%',
                            height: '1px',
                            background: `${mainPurple}33`,
                            marginBottom: '22px',
                        }}
                    />

                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '16px',
                        }}
                    >
                        {aboutData.tags.map((tag, i) => (
                            <div
                                key={i}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: token.colorText,
                                    fontSize: '13.5px',
                                    fontWeight: '500',
                                }}
                            >
                                <div
                                    style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        background: `${mainPurple}15`,
                                        border: `1px solid ${mainPurple}40`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {tag.icon}
                                </div>
                                <span>{tag.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* الخط الفاصل الرأسي */}
                {isDesktop && (
                    <div
                        style={{
                            width: '1px',
                            height: '100%',
                            minHeight: '350px',
                            background: `linear-gradient(to bottom, transparent, ${mainPurple}66, transparent)`,
                            margin: '0 auto',
                        }}
                    />
                )}

                {/* الجانب الأيمن / أو الأسفل في الشاشات الصغيرة */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '28px',
                    }}
                >
                    {aboutData.features.map((feat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            style={{
                                display: 'flex',
                                gap: '18px',
                                alignItems: 'flex-start',
                            }}
                        >
                            <div
                                style={{
                                    width: '46px',
                                    height: '46px',
                                    borderRadius: '50%',
                                    background: `${mainPurple}15`,
                                    border: `1px solid ${mainPurple}40`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: mainPurple,
                                    flexShrink: 0,
                                }}
                            >
                                {feat.icon}
                            </div>
                            <div>
                                <h4
                                    style={{
                                        color: token.colorText,
                                        fontSize: '17px',
                                        fontWeight: '700',
                                        marginBottom: '4px',
                                    }}
                                >
                                    {feat.title}
                                </h4>
                                <p
                                    style={{
                                        color: token.colorTextSecondary,
                                        fontSize: '14px',
                                        lineHeight: '1.6',
                                        margin: 0,
                                    }}
                                >
                                    {feat.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
