import React from 'react';
import { Tag, theme } from 'antd';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from "react-icons/fi";

// ── ثوابت التصميم (بدل الأرقام السايبة جوه الـ styles) ──
const CARD_RADIUS = 32;
const IMAGE_RADIUS = 24;
const IMAGE_HEIGHT = 350;
const FLOATING_ICON_SIZE = 60;
const FLOATING_ICON_OFFSET = -22;
const CARD_ANIMATION = {
    initial: { opacity: 0, y: 60, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

const styles = {
    container: {
        width: '100%',
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '40px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
    },
    card: (purple) => ({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: '40px',
        background: 'transparent',
        borderRadius: `${CARD_RADIUS}px`,
        padding: '40px',
        position: 'relative',
        boxShadow: 'none',
    }),
    imageWrapper: (purple) => ({
        borderRadius: `${IMAGE_RADIUS}px`,
        overflow: 'hidden',
        border: `1px solid ${purple}40`,
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        width: '100%',
        height: `${IMAGE_HEIGHT}px`,
        position: 'relative',
    }),
    floatingIcon: (bg, purple, isLeft) => ({
        position: 'absolute',
        top: `${FLOATING_ICON_OFFSET}px`,
        [isLeft ? 'left' : 'right']: `${FLOATING_ICON_OFFSET}px`,
        width: `${FLOATING_ICON_SIZE}px`,
        height: `${FLOATING_ICON_SIZE}px`,
        borderRadius: '20px',
        background: bg,
        border: `1.5px solid ${purple}60`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: purple,
        fontSize: '24px',
        boxShadow: `0 10px 25px ${purple}30`,
        zIndex: 3,
    }),
    contentBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        textAlign: 'left',
        direction: 'ltr',
    },
    number: (purple) => ({
        fontSize: '48px',
        fontWeight: '800',
        color: purple,
        lineHeight: 1,
        letterSpacing: '-1px',
    }),
    divider: (purple) => ({
        width: '1px',
        height: '24px',
        background: `${purple}40`,
    }),
    tag: (purple) => ({
        background: `${purple}15`,
        color: purple,
        border: `1px solid ${purple}45`,
        borderRadius: '6px',
        fontSize: '11.5px',
        padding: '3px 10px',
        fontWeight: '600',
        margin: 0,
    }),
    description: (textColor) => ({
        color: textColor,
        fontSize: '14.5px',
        lineHeight: '1.6',
        margin: 0,
        opacity: 0.85,
    }),
    link: (purple) => ({
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        color: purple,
        fontWeight: '700',
        fontSize: '14.5px',
        textDecoration: 'none',
    }),
    linkIconWrapper: (purple) => ({
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        border: `1px solid ${purple}50`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `${purple}15`,
    }),
    title: {
        fontSize: '26px',
        fontWeight: '800',
        margin: 0,
        letterSpacing: '-0.5px',
        lineHeight: '1.2',
    },
};

function renderFormattedTitle(title, mainPurple, themeTextColor) {
    if (!title) return null;

    const separatorRegex = /\s*[-–]\s*/;
    const parts = title.split(separatorRegex);

    if (parts.length > 1) {
        const firstPart = parts[0];
        const restOfTitle = title.replace(firstPart, '');

        return (
            <h3 style={styles.title}>
                <span style={{ color: mainPurple }}>{firstPart}</span>
                <span style={{ color: themeTextColor }}>{restOfTitle}</span>
            </h3>
        );
    }

    return (
        <h3 style={{ ...styles.title, color: mainPurple }}>
            {title}
        </h3>
    );
}

function ProjectDetails({ project, index, mainPurple, themeTextColor }) {
    return (
        <motion.div 
            initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            style={styles.contentBox}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={styles.number(mainPurple)}>0{index + 1}</span>
                <div style={styles.divider(mainPurple)} />
                {renderFormattedTitle(project.title, mainPurple, themeTextColor)}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tags?.map((tag, tagIdx) => (
                    <Tag key={`tag-${index}-${tagIdx}`} style={styles.tag(mainPurple)}>
                        {tag}
                    </Tag>
                ))}
            </div>

            <p style={styles.description(themeTextColor)}>{project.description}</p>
            {/* أزارير عرض المشروع لما اجهز الريبو افتحها  */}
            {/* <div style={{ marginTop: '8px' }}>
                <a
                    href={project.liveLink || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link(mainPurple)}
                >
                    <span>View Project</span>
                    <span style={styles.linkIconWrapper(mainPurple)}>
                        <FiArrowUpRight style={{ fontSize: '20px' }} />
                    </span>
                </a>
            </div> */}
        </motion.div>
    );
}

function ProjectMedia({ project, isLeftIcon, mainPurple, containerBg }) {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            style={{ position: 'relative' }}
        >
            <div style={styles.imageWrapper(mainPurple)}>
                <img
                    alt={project.title}
                    src={project.image}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                    }}
                />
            </div>
            <div style={styles.floatingIcon(containerBg, mainPurple, isLeftIcon)}>
                {project.icon}
            </div>
        </motion.div>
    );
}

export default function DesktopProjects({ projects = [], mainPurple = '#7c3aed' }) {
    const { token } = theme.useToken();

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={styles.container}
        >
            {projects.map((project, index) => {
                const isEven = index % 2 === 0;

                return (
                    <motion.div
                        key={`project-card-${project.id || index}`}
                        {...CARD_ANIMATION}
                        style={styles.card(mainPurple)}
                    >
                        {isEven ? (
                            <>
                                <ProjectMedia
                                    project={project}
                                    isLeftIcon={true}
                                    mainPurple={mainPurple}
                                    containerBg={token.colorBgContainer}
                                />
                                <ProjectDetails
                                    project={project}
                                    index={index}
                                    mainPurple={mainPurple}
                                    themeTextColor={token.colorText}
                                />
                            </>
                        ) : (
                            <>
                                <ProjectDetails
                                    project={project}
                                    index={index}
                                    mainPurple={mainPurple}
                                    themeTextColor={token.colorText}
                                />
                                <ProjectMedia
                                    project={project}
                                    isLeftIcon={false}
                                    mainPurple={mainPurple}
                                    containerBg={token.colorBgContainer}
                                />
                            </>
                        )}
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
