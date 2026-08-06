import React from 'react';
import { Card, Tag, theme, Grid } from 'antd';
import { FolderOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { useBreakpoint } = Grid;

export default function MobileProjects({ projects, mainPurple, lang = 'en' }) {
    const { token } = theme.useToken();
    const screens = useBreakpoint();
    const isTablet = screens.md && !screens.lg;
    const isAr = lang === 'ar';

    // دالة تنسيق العنوان مع جعل الأيقونة يمين الاسم في العربي ويساره في الإنجليزي
    const renderFormattedTitleWithIconOnly = (title, icon) => {
        if (!title) return null;

        const separatorRegex = /\s*[-–]\s*/;
        const parts = title.split(separatorRegex);

        let titleContent;
        if (parts.length > 1) {
            const firstPart = parts[0];
            const restOfTitle = title.replace(firstPart, '');

            titleContent = (
                <span style={{ color: token.colorText, fontSize: isTablet ? '16px' : '12px', fontWeight: '700' }}>
                    <span style={{ color: mainPurple }}>{firstPart}</span>
                    <span style={{ color: token.colorText }}>{restOfTitle}</span>
                </span>
            );
        } else {
            titleContent = (
                <span style={{ color: mainPurple, fontSize: isTablet ? '16px' : '12px', fontWeight: '700' }}>
                    {title}
                </span>
            );
        }

        return (
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '14px', 
                gap: '8px', 
                overflow: 'hidden', 
                // في العربي: الأيقونة يمين الاسم (row-reverse)، في الإنجليزي: الأيقونة يسار الاسم (row)
                flexDirection: isAr ? 'row-reverse' : 'row',
                justifyContent: isAr ? 'flex-end' : 'flex-start',
                width: '100%'
            }}>
                {/* في الإنجليزي نظهر الأيقونة أولاً (على اليسار)، وفي العربي نظهر العنوان أولاً ثم الأيقونة على اليمين */}
                {!isAr && icon && (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: mainPurple,
                        fontSize: isTablet ? '18px' : '16px',
                        flexShrink: 0,
                    }}>
                        {icon}
                    </div>
                )}
                
                <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {titleContent}
                </h3>

                {isAr && icon && (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: mainPurple,
                        fontSize: isTablet ? '18px' : '16px',
                        flexShrink: 0,
                    }}>
                        {icon}
                    </div>
                )}
            </div>
        );
    };

    // عكس مرتبة البطاقات ليظهر تأثير التراص التصاعدي الصحيح
    const reversedProjects = [...projects].reverse();

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                paddingTop: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                paddingBottom: '40px'
            }}
        >
            {/* 1. العنوان مثبت (Sticky) كأول عنصر في التسلسل تماماً مثل الكروت */}
            <div
                style={{
                    position: 'sticky',
                    top: '70px', // مسافة آمنة تحت الـ Navbar العلوي
                    zIndex: 0, // أقل من الكروت لكي تستقر الكروت تحته ولا تختفي تحته بشكل خاطئ
                    textAlign: 'center',
                    padding: '10px 0',
                    background: 'transparent', // بدون خلفية معزولة، يبدو جزءاً من القسم
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: mainPurple, fontSize: '12px', fontWeight: '600', letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: '4px', flexDirection: isAr ? 'row-reverse' : 'row' }}>
                        <FolderOutlined /> {isAr ? "معرض أعمالي" : "My Portfolio"}
                    </div>
                    <h2 style={{ color: token.colorText, fontSize: '1.6rem', fontWeight: '800', margin: 0 }}>
                        {isAr ? "المشاريع المميزة" : "Featured Projects"}
                    </h2>
                </motion.div>
            </div>

            {/* 2. البطاقات المتراصة تبدأ بالظهور تحت العنوان بمسافة مدروسة */}
            {reversedProjects.map((project, index) => {
                // تم رفع نقطة البداية إلى 160px لضمان بقاء مسافة فاصلة نظيفة وثابتة بين العنوان والبطاقات
                const stickyTop = 160 + (index * 45);

                return (
                    <div
                        key={`${project.id || 'project'}-${index}`}
                        style={{
                            position: 'sticky',
                            top: `${stickyTop}px`,
                            zIndex: index + 1, // كل كارت يعتلي ما قبله
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        <div style={{ width: '100%', maxWidth: isTablet ? '480px' : '340px', display: 'flex' }}>
                            <Card
                                hoverable
                                style={{
                                    background: token.colorBgContainer,
                                    border: `1.5px solid ${mainPurple}60`,
                                    // ظل عميق ومنفصل يمنح مظهر الطبقات المتراكبة فوق بعضها
                                    boxShadow: `0 -10px 25px rgba(0,0,0,0.15), 0 20px 40px -10px ${mainPurple}45`,
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%',
                                    minHeight: '440px',
                                }}
                                styles={{
                                    body: {
                                        padding: '18px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        flexGrow: 1,
                                        justifyContent: 'space-between',
                                        textAlign: isAr ? 'right' : 'left',
                                        direction: isAr ? 'rtl' : 'ltr'
                                    }
                                }}
                                cover={
                                    <div style={{ height: isTablet ? '230px' : '160px', overflow: 'hidden', position: 'relative' }}>
                                        <img
                                            alt={project.title}
                                            src={project.image}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                }
                            >
                                <div style={{ textAlign: isAr ? 'right' : 'left' }}>
                                    {renderFormattedTitleWithIconOnly(project.title, project.icon)}
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '14px', flexDirection: isAr ? 'row-reverse' : 'row', justifyContent: isAr ? 'flex-end' : 'flex-start' }}>
                                        {project.tags.map((tag, tagIdx) => (
                                            <Tag
                                                key={tagIdx}
                                                style={{
                                                    background: `${mainPurple}1F`,
                                                    color: mainPurple,
                                                    border: `1.5px solid ${mainPurple}59`,
                                                    borderRadius: '6px',
                                                    fontSize: '10px',
                                                    margin: isAr ? '0 0 4px 4px' : '0 4px 4px 0'
                                                }}
                                            >
                                                {tag}
                                            </Tag>
                                        ))}
                                    </div>
                                    <p style={{ color: token.colorTextSecondary, fontSize: '12.5px', lineHeight: '1.4', marginBottom: '0px', textAlign: isAr ? 'right' : 'left' }}>
                                        {project.description}
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
