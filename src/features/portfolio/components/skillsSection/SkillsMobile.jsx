import React, { useState, useEffect } from 'react';
import { FolderFilled, LeftOutlined, RightOutlined, PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';

export default function SkillsMobile({
    skillCategories = [],
    activeTab,
    setActiveTab,
    currentCategory,
    mainPurple,
    token = {},
    isDarkMode = false,
    lang = 'en'
}) {
    const isAr = lang === 'ar';
    const [isAutoPlay, setIsAutoPlay] = useState(false);

    useEffect(() => {
        if (!isAutoPlay || !skillCategories.length) return;
        const interval = setInterval(() => {
            const currentIndex = skillCategories.findIndex(c => c.id === activeTab);
            const nextIndex = (currentIndex + 1) % skillCategories.length;
            setActiveTab(skillCategories[nextIndex].id);
        }, 4500);
        return () => clearInterval(interval);
    }, [isAutoPlay, activeTab, skillCategories, setActiveTab]);

    const handleNext = () => {
        if (!skillCategories.length) return;
        const currentIndex = skillCategories.findIndex(c => c.id === activeTab);
        const nextIndex = (currentIndex + 1) % skillCategories.length;
        setActiveTab(skillCategories[nextIndex].id);
    };

    const handlePrev = () => {
        if (!skillCategories.length) return;
        const currentIndex = skillCategories.findIndex(c => c.id === activeTab);
        const prevIndex = (currentIndex - 1 + skillCategories.length) % skillCategories.length;
        setActiveTab(skillCategories[prevIndex].id);
    };

    // دالة مساعدة لترجمة مستويات المهارات ديناميكياً بناءً على لغة التطبيق
    const getLevelText = (level) => {
        if (!isAr) return level;
        switch (level) {
            case 'Advanced': return 'متقدم';
            case 'Intermediate': return 'متوسط';
            case 'Beginner': return 'مبتدئ';
            default: return level;
        }
    };

    const windowBgColor = token.colorBgContainer || '#ffffff';
    const borderColor = token.colorBorder || '#e8e8e8';
    const textColor = token.colorText || '#000000';
    const textSecondary = token.colorTextSecondary || '#666666';
    const primaryColor = mainPurple || token.colorPrimary || '#722ed1';

    if (!currentCategory) {
        return null;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '100%', boxSizing: 'border-box', direction: isAr ? 'rtl' : 'ltr' }}>

            {/* 1. Mobile Categories Selector Header */}
            <div style={{
                background: windowBgColor,
                backdropFilter: 'blur(30px)',
                border: `1px solid ${borderColor}`,
                borderRadius: '20px',
                padding: '16px',
                boxShadow: isDarkMode ? `0 15px 30px rgba(0, 0, 0, 0.4)` : `0 10px 25px ${primaryColor}10`,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FolderFilled style={{ color: primaryColor, fontSize: '18px' }} />
                        <h2 style={{ color: textColor, fontSize: '14px', fontWeight: '800', margin: 0, letterSpacing: '0.5px' }}>
                            {isAr ? 'مستكشف' : 'SKILLS'} <span style={{ color: primaryColor }}>{isAr ? 'المهارات' : 'EXPLORER'}</span>
                        </h2>
                    </div>

                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                        <div
                            onClick={() => setIsAutoPlay(!isAutoPlay)}
                            style={{ width: '26px', height: '26px', borderRadius: '50%', background: isAutoPlay ? `${primaryColor}30` : (token.colorFillSecondary || '#f5f5f5'), border: `1px solid ${borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: primaryColor, cursor: 'pointer' }}
                        >
                            {isAutoPlay ? <PauseCircleOutlined style={{ fontSize: '12px' }} /> : <PlayCircleOutlined style={{ fontSize: '12px' }} />}
                        </div>
                        <div
                            onClick={isAr ? handleNext : handlePrev}
                            style={{ width: '26px', height: '26px', borderRadius: '50%', background: token.colorFillSecondary || '#f5f5f5', border: `1px solid ${borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: primaryColor, cursor: 'pointer' }}
                        >
                            {isAr ? <RightOutlined style={{ fontSize: '10px' }} /> : <LeftOutlined style={{ fontSize: '10px' }} />}
                        </div>
                        <div
                            onClick={isAr ? handlePrev : handleNext}
                            style={{ width: '26px', height: '26px', borderRadius: '50%', background: token.colorFillSecondary || '#f5f5f5', border: `1px solid ${borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: primaryColor, cursor: 'pointer' }}
                        >
                            {isAr ? <LeftOutlined style={{ fontSize: '10px' }} /> : <RightOutlined style={{ fontSize: '10px' }} />}
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {skillCategories.map((cat) => {
                        const isActive = activeTab === cat.id;

                        return (
                            <motion.div
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '12px 16px',
                                    borderRadius: '14px',
                                    background: isActive
                                        ? `linear-gradient(135deg, ${primaryColor}, ${primaryColor}CC)`
                                        : (token.colorFillSecondary || '#f5f5f5'),
                                    border: `1px solid ${isActive ? primaryColor : borderColor}`,
                                    color: isActive ? '#ffffff' : textColor,
                                    cursor: 'pointer',
                                    boxShadow: isActive ? `0 6px 18px ${primaryColor}40` : 'none',
                                    transition: 'all 0.2s ease',
                                    boxSizing: 'border-box',
                                    width: '100%'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0, flex: 1 }}>
                                    <span style={{ fontSize: '18px', display: 'flex', alignItems: 'center', color: isActive ? '#ffffff' : primaryColor, flexShrink: 0 }}>
                                        {cat.categoryIcon}
                                    </span>
                                    <span style={{ fontWeight: '800', fontSize: '13px', whiteSpace: 'normal', wordBreak: 'break-word', lineHeight: '1.4', flex: 1 }}>
                                        {cat.name}
                                    </span>
                                </div>
                                <span style={{
                                    fontSize: '11px',
                                    fontWeight: '800',
                                    padding: '3px 8px',
                                    borderRadius: '6px',
                                    background: isActive ? 'rgba(255,255,255,0.25)' : (token.colorFillDivider || 'rgba(0,0,0,0.06)'),
                                    color: isActive ? '#ffffff' : textSecondary,
                                    flexShrink: 0,
                                    [isAr ? 'marginRight' : 'marginLeft']: '10px'
                                }}>
                                    {cat.skills?.length || 0}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* 2. Main Window Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: windowBgColor,
                    border: `1px solid ${borderColor}`,
                    borderBottom: 'none',
                    padding: '8px 16px',
                    [isAr ? 'borderTopLeftRadius' : 'borderTopRightRadius']: '16px',
                    [isAr ? 'borderTopRightRadius' : 'borderTopLeftRadius']: '12px',
                    [isAr ? 'marginRight' : 'marginLeft']: '0px',
                    width: 'fit-content',
                    position: 'relative',
                    zIndex: 2
                }}>
                    <span style={{ fontSize: '14px', display: 'flex', alignItems: 'center', color: primaryColor }}>
                        {currentCategory.categoryIcon}
                    </span>
                    <span style={{ color: textColor, fontSize: '12px', fontWeight: '800' }}>
                        {/* لسان البطاقة الكبيرة: اسم الفئة باللغة الحالية وبدون أي امتدادات أو شرطات */}
                        {currentCategory.name}
                    </span>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: primaryColor, [isAr ? 'marginRight' : 'marginLeft']: '4px' }}></div>
                </div>

                <div
                    style={{
                        background: windowBgColor,
                        backdropFilter: 'blur(30px)',
                        border: `1px solid ${borderColor}`,
                        borderRadius: '20px',
                        [isAr ? 'borderTopRightRadius' : 'borderTopLeftRadius']: '4px',
                        padding: '20px',
                        boxShadow: isDarkMode ? `0 20px 40px rgba(0, 0, 0, 0.5)` : `0 15px 30px ${primaryColor}10`,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        boxSizing: 'border-box',
                        position: 'relative',
                        overflow: 'hidden',
                        zIndex: 1,
                        marginTop: '-1px'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                        zIndex: 0,
                        opacity: isDarkMode ? 0.05 : 0.06,
                        textAlign: 'center',
                        width: '100%',
                        padding: '0 16px',
                        boxSizing: 'border-box'
                    }}>
                        <div style={{ fontSize: '90px', lineHeight: 1, color: primaryColor, marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>
                            {currentCategory.categoryIcon}
                        </div>
                        <div style={{ fontSize: '14px', fontWeight: '800', letterSpacing: '1.5px', color: textColor, textTransform: 'uppercase', maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            {currentCategory.name}
                        </div>
                    </div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${borderColor}`, paddingBottom: '12px', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: textSecondary, fontSize: '11px', fontWeight: '600', overflow: 'hidden' }}>
                                <span style={{ color: primaryColor, fontWeight: '700', flexShrink: 0 }}>{isAr ? 'المسار:' : 'Dir:'}</span>
                                {/* مسار الكرت ثابت باللغة الإنجليزية كما طلبت */}
                                <span style={{ color: textColor, fontWeight: '700', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>/skills/{currentCategory.id}</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                                <div style={{ color: textSecondary, fontSize: '11px', fontWeight: '600' }}>
                                    {currentCategory.skills?.length || 0} {isAr ? 'ملفات' : 'files'}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', opacity: 0.6 }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#27c93f' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Skills Grid Cards - ممركزة تماماً */}
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    transition={{ duration: 0.2 }}
                                    style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}
                                >
                                    {currentCategory.skills?.map((skill, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileTap={{ scale: 0.97 }}
                                            style={{
                                                background: `linear-gradient(145deg, ${windowBgColor}, ${primaryColor}${isDarkMode ? '30' : '1F'})`,
                                                border: `1px solid ${borderColor}`,
                                                borderRadius: '14px',
                                                padding: '14px 12px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                textAlign: 'center',
                                                minHeight: '135px',
                                                boxShadow: isDarkMode ? '0 8px 20px rgba(0,0,0,0.3)' : `0 6px 15px ${primaryColor}08`,
                                                position: 'relative',
                                                overflow: 'hidden',
                                                clipPath: isAr 
                                                    ? 'polygon(12px 0, 100% 0, 100% 100%, 0 100%, 0 12px)' 
                                                    : 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
                                                transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                                            }}
                                        >
                                            <div style={{
                                                position: 'absolute', top: 0, [isAr ? 'left' : 'right']: 0, width: '12px', height: '12px',
                                                background: `${primaryColor}${isDarkMode ? '40' : '2E'}`, 
                                                [isAr ? 'borderBottomRightRadius' : 'borderBottomLeftRadius']: '4px',
                                                border: `1px solid ${borderColor}`
                                            }} />

                                            <div style={{ 
                                                fontSize: '26px', 
                                                padding: '8px', 
                                                borderRadius: '10px', 
                                                background: `${primaryColor}${isDarkMode ? '35' : '26'}`,
                                                border: `1px solid ${borderColor}`,
                                                display: 'flex', 
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginBottom: '8px'
                                            }}>
                                                {skill.icon}
                                            </div>

                                            <div style={{ width: '100%' }}>
                                                <div style={{ color: textColor, fontSize: '13px', fontWeight: '700', marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                    {skill.name}
                                                </div>
                                                <span style={{ 
                                                    fontSize: '9.5px', 
                                                    fontWeight: '700', 
                                                    color: primaryColor, 
                                                    background: `${primaryColor}${isDarkMode ? '40' : '2E'}`, 
                                                    border: `1px solid ${borderColor}`,
                                                    padding: '2px 8px', 
                                                    borderRadius: '5px', 
                                                    display: 'inline-block' 
                                                }}>
                                                    {getLevelText(skill.level)}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
