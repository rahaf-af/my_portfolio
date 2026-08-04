import React, { useState, useEffect } from 'react';
import { FolderFilled, AppstoreOutlined, UnorderedListOutlined, LeftOutlined, RightOutlined, PlayCircleOutlined, PauseCircleOutlined, CloseOutlined, CodeOutlined, RocketOutlined, ReadOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';

export default function SkillsDesktop({
    skillCategories,
    activeTab,
    setActiveTab,
    currentCategory,
    mainPurple,
    token,
    isDarkMode
}) {
    const [isAutoPlay, setIsAutoPlay] = useState(false);

    // إدارة الألسنة المفتوحة (Tabs)
    const [openTabs, setOpenTabs] = useState([skillCategories[0].id]);
    const MAX_VISIBLE_TABS = 3;

    const handleSelectCategory = (catId) => {
        setActiveTab(catId);
        if (openTabs.includes(catId)) return;

        if (openTabs.length < MAX_VISIBLE_TABS) {
            setOpenTabs([...openTabs, catId]);
        } else {
            const newTabs = [...openTabs];
            newTabs.shift();
            newTabs.push(catId);
            setOpenTabs(newTabs);
        }
    };

    const handleCloseTab = (e, catId) => {
        e.stopPropagation();
        if (openTabs.length === 1) return;

        const newTabs = openTabs.filter(id => id !== catId);
        setOpenTabs(newTabs);

        if (activeTab === catId) {
            setActiveTab(newTabs[newTabs.length - 1]);
        }
    };

    useEffect(() => {
        if (!isAutoPlay) return;
        const interval = setInterval(() => {
            const currentIndex = skillCategories.findIndex(c => c.id === activeTab);
            const nextIndex = (currentIndex + 1) % skillCategories.length;
            const nextId = skillCategories[nextIndex].id;
            setActiveTab(nextId);
            if (!openTabs.includes(nextId)) {
                if (openTabs.length < MAX_VISIBLE_TABS) {
                    setOpenTabs(prev => [...prev, nextId]);
                } else {
                    setOpenTabs(prev => [...prev.slice(1), nextId]);
                }
            }
        }, 4500);
        return () => clearInterval(interval);
    }, [activeTab, isAutoPlay, skillCategories, openTabs]);

    const handleNext = () => {
        const currentIndex = skillCategories.findIndex(c => c.id === activeTab);
        const nextIndex = (currentIndex + 1) % skillCategories.length;
        handleSelectCategory(skillCategories[nextIndex].id);
    };

    const handlePrev = () => {
        const currentIndex = skillCategories.findIndex(c => c.id === activeTab);
        const prevIndex = (currentIndex - 1 + skillCategories.length) % skillCategories.length;
        handleSelectCategory(skillCategories[prevIndex].id);
    };

    const windowBgColor = token.colorBgContainer;
    const borderColor = token.colorBorder;
    const textColor = token.colorText;
    const textSecondary = token.colorTextSecondary;
    const primaryColor = mainPurple || token.colorPrimary;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            style={{ display: 'flex', gap: '32px', width: '100%', maxWidth: '1400px', margin: '0 auto', alignItems: 'stretch' }}
        >

            {/* 1. Sidebar Categories List */}
            <div style={{
                width: '345px',
                background: windowBgColor,
                backdropFilter: 'blur(30px)',
                borderTop: `1px solid ${borderColor}`,
                borderRight: `1px solid ${borderColor}`,
                borderBottom: `1px solid ${borderColor}`,
                borderLeft: `1px solid ${borderColor}`,
                borderRadius: '26px',
                padding: '24px',
                boxShadow: isDarkMode ? `0 20px 40px rgba(0, 0, 0, 0.5)` : `0 15px 30px ${primaryColor}10`,
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                flexShrink: 0
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <FolderFilled style={{ color: primaryColor, fontSize: '20px' }} />
                            <h2 style={{ color: textColor, fontSize: '16px', fontWeight: '800', margin: 0, letterSpacing: '0.5px' }}>
                                SKILLS <span style={{ color: primaryColor }}>EXPLORER</span>
                            </h2>
                        </div>
                        <p style={{ color: textSecondary, fontSize: '11px', margin: 0 }}>
                            Select a directory to inspect
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                        <div
                            onClick={() => setIsAutoPlay(!isAutoPlay)}
                            title={isAutoPlay ? "Pause AutoPlay" : "Play AutoPlay"}
                            style={{ width: '26px', height: '26px', borderRadius: '50%', background: isAutoPlay ? `${primaryColor}30` : token.colorFillSecondary, borderTop: `1px solid ${borderColor}`, borderRight: `1px solid ${borderColor}`, borderBottom: `1px solid ${borderColor}`, borderLeft: `1px solid ${borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: primaryColor, cursor: 'pointer', transition: 'all 0.2s' }}
                        >
                            {isAutoPlay ? <PauseCircleOutlined style={{ fontSize: '12px' }} /> : <PlayCircleOutlined style={{ fontSize: '12px' }} />}
                        </div>
                        <div
                            onClick={handlePrev}
                            style={{ width: '26px', height: '26px', borderRadius: '50%', background: token.colorFillSecondary, borderTop: `1px solid ${borderColor}`, borderRight: `1px solid ${borderColor}`, borderBottom: `1px solid ${borderColor}`, borderLeft: `1px solid ${borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: primaryColor, cursor: 'pointer', transition: 'all 0.2s' }}
                        >
                            <LeftOutlined style={{ fontSize: '10px' }} />
                        </div>
                        <div
                            onClick={handleNext}
                            style={{ width: '26px', height: '26px', borderRadius: '50%', background: token.colorFillSecondary, borderTop: `1px solid ${borderColor}`, borderRight: `1px solid ${borderColor}`, borderBottom: `1px solid ${borderColor}`, borderLeft: `1px solid ${borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: primaryColor, cursor: 'pointer', transition: 'all 0.2s' }}
                        >
                            <RightOutlined style={{ fontSize: '10px' }} />
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, justifyContent: 'space-between' }}>
                    {skillCategories.map((cat) => {
                        const isActive = activeTab === cat.id;
                        const isOpen = openTabs.includes(cat.id);
                        const previewSkills = cat.skills.length > 0 ? `${cat.skills[0].name} and more` : '';

                        return (
                            <motion.div
                                key={cat.id}
                                onClick={() => handleSelectCategory(cat.id)}
                                whileHover={{ scale: 1.015, x: 2 }}
                                whileTap={{ scale: 0.985 }}
                                style={{
                                    height: '64px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '0 16px',
                                    borderRadius: '14px',
                                    background: isActive
                                        ? `linear-gradient(135deg, ${primaryColor}, ${primaryColor}CC)`
                                        : isOpen
                                            ? token.colorFillSecondary
                                            : 'transparent',
                                    borderTop: `1px solid ${isActive ? primaryColor : isOpen ? borderColor : borderColor}`,
                                    borderRight: `1px solid ${isActive ? primaryColor : isOpen ? borderColor : borderColor}`,
                                    borderBottom: `1px solid ${isActive ? primaryColor : isOpen ? borderColor : borderColor}`,
                                    borderLeft: `1px solid ${isActive ? primaryColor : isOpen ? borderColor : borderColor}`,
                                    color: isActive ? '#ffffff' : textColor,
                                    cursor: 'pointer',
                                    boxShadow: isActive ? `0 6px 20px ${primaryColor}40` : 'none',
                                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                                    overflow: 'hidden'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden', flex: 1 }}>
                                    <span style={{ color: isActive ? '#ffffff' : primaryColor, fontSize: '18px', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                                        {cat.categoryIcon}
                                    </span>
                                    <div style={{ overflow: 'hidden', width: 'calc(100% - 30px)' }}>
                                        <div style={{ fontWeight: '700', fontSize: '13px', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                            {cat.name}
                                        </div>
                                        <div style={{
                                            fontSize: '9.5px', color: isActive ? 'rgba(255,255,255,0.85)' : textSecondary,
                                            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                                            width: '100%'
                                        }}>
                                            {previewSkills}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '8px' }}>
                                    <div style={{ fontSize: '12px', fontWeight: '800', color: isActive ? '#ffffff' : textColor }}>
                                        {String(cat.skills.length).padStart(2, '0')}
                                    </div>
                                    <div style={{ fontSize: '8.5px', color: isActive ? 'rgba(255,255,255,0.75)' : textSecondary }}>
                                        items
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* 2. Main Window Panel */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', marginTop: '36px' }}>
                
                {/* Tabs Bar Container */}
                <div style={{
                    position: 'absolute',
                    top: '-36px',
                    left: '0px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '4px',
                    zIndex: 5,
                }}>
                    {openTabs.map((tabId) => {
                        const catData = skillCategories.find(c => c.id === tabId);
                        if (!catData) return null;
                        const isTabActive = activeTab === tabId;
                        const canClose = openTabs.length > 1;

                        return (
                            <div
                                key={tabId}
                                onClick={() => setActiveTab(tabId)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '10px',
                                    background: isTabActive ? windowBgColor : token.colorFillSecondary,
                                    padding: '9px 16px',
                                    borderRadius: '14px 14px 0 0',
                                    borderTop: `1px solid ${borderColor}`,
                                    borderRight: `1px solid ${borderColor}`,
                                    borderBottom: isTabActive ? `1px solid ${windowBgColor}` : 'none',
                                    borderLeft: `1px solid ${borderColor}`,
                                    color: isTabActive ? textColor : textSecondary,
                                    fontWeight: isTabActive ? '700' : '500',
                                    fontSize: '13px',
                                    cursor: 'pointer',
                                    width: '210px',
                                    marginBottom: isTabActive ? '-1px' : '0px',
                                    opacity: isTabActive ? 1 : 0.75,
                                    boxShadow: isTabActive ? `0 -4px 12px ${primaryColor}10` : 'none',
                                    transition: 'all 0.2s ease',
                                    zIndex: isTabActive ? 10 : 1
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden', flex: 1 }}>
                                    <span style={{ fontSize: '15px', display: 'flex', alignItems: 'center', color: isTabActive ? primaryColor : textSecondary, flexShrink: 0 }}>
                                        {catData.categoryIcon}
                                    </span>
                                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{catData.name}</span>
                                </div>
                                
                                {canClose && (
                                    <CloseOutlined 
                                        onClick={(e) => handleCloseTab(e, tabId)}
                                        style={{ 
                                            fontSize: '10px', 
                                            cursor: 'pointer', 
                                            opacity: isTabActive ? 0.8 : 0.4, 
                                            color: textSecondary, 
                                            flexShrink: 0 
                                        }} 
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Main Content Box */}
                <div
                    style={{
                        background: windowBgColor,
                        backdropFilter: 'blur(30px)',
                        borderTop: `1px solid ${borderColor}`,
                        borderRight: `1px solid ${borderColor}`,
                        borderBottom: `1px solid ${borderColor}`,
                        borderLeft: `1px solid ${borderColor}`,
                        borderRadius: '26px',
                        borderTopLeftRadius: '4px',
                        padding: '28px',
                        boxShadow: isDarkMode ? `0 25px 50px rgba(0, 0, 0, 0.5)` : `0 20px 35px ${primaryColor}10`,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '480px',
                        boxSizing: 'border-box',
                        position: 'relative',
                        zIndex: 2,
                        overflow: 'hidden'
                    }}
                >
                    {/* Centered Tech/Space Watermark Graphic */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItem: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                        zIndex: 0,
                        opacity: isDarkMode ? 0.05 : 0.06,
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '140px', lineHeight: 1, color: primaryColor, marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
                            {currentCategory.categoryIcon}
                        </div>
                        <div style={{ fontSize: '16px', fontWeight: '800', letterSpacing: '2px', color: textColor, textTransform: 'uppercase' }}>
                            {currentCategory.name}
                        </div>
                    </div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        {/* Top Control Bar inside window */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${borderColor}`, paddingBottom: '14px', marginBottom: '22px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: textSecondary, fontSize: '12.5px', fontWeight: '600' }}>
                                <span style={{ color: primaryColor, fontWeight: '700' }}>Directory:</span>
                                <span style={{ color: textColor, fontWeight: '700' }}>/skills/{currentCategory.id}</span>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: primaryColor }}>
                                    <AppstoreOutlined style={{ fontSize: '15px', cursor: 'pointer' }} />
                                    <UnorderedListOutlined style={{ fontSize: '15px', cursor: 'pointer', opacity: '0.4' }} />
                                </div>
                                <div style={{ color: textSecondary, fontSize: '12.5px', fontWeight: '600' }}>
                                    {currentCategory.skills.length} files
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.6, marginLeft: '6px' }}>
                                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#27c93f' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Skills Grid Cards with Folded Corner (الطية) & Balanced Semi-Opaque MainPurple Tint */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.2 }}
                                style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}
                            >
                                {currentCategory.skills.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        style={{
                                            background: `linear-gradient(145deg, ${windowBgColor}, ${primaryColor}${isDarkMode ? '30' : '1F'})`,
                                            borderTop: `1px solid ${borderColor}`,
                                            borderRight: `1px solid ${borderColor}`,
                                            borderBottom: `1px solid ${borderColor}`,
                                            borderLeft: `1px solid ${borderColor}`,
                                            borderRadius: '18px',
                                            padding: '18px 16px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            minHeight: '145px',
                                            boxShadow: isDarkMode ? '0 10px 25px rgba(0,0,0,0.3)' : `0 8px 20px ${primaryColor}08`,
                                            position: 'relative',
                                            overflow: 'hidden',
                                            clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)',
                                            transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                                        }}
                                    >
                                        {/* Folded Corner (طية الزاوية) */}
                                        <div style={{
                                            position: 'absolute', top: 0, right: 0, width: '16px', height: '16px',
                                            background: `${primaryColor}${isDarkMode ? '40' : '2E'}`, borderBottomLeftRadius: '5px',
                                            borderLeft: `1px solid ${borderColor}`, borderBottom: `1px solid ${borderColor}`
                                        }} />

                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <div style={{ 
                                                fontSize: '28px', 
                                                padding: '8px', 
                                                borderRadius: '12px', 
                                                background: `${primaryColor}${isDarkMode ? '35' : '26'}`,
                                                borderTop: `1px solid ${borderColor}`,
                                                borderRight: `1px solid ${borderColor}`,
                                                borderBottom: `1px solid ${borderColor}`,
                                                borderLeft: `1px solid ${borderColor}`,
                                                display: 'flex', 
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                {skill.icon}
                                            </div>
                                            <div style={{ color: textSecondary, fontSize: '11px', letterSpacing: '1px', opacity: 0.5, marginRight: '4px' }}>•••</div>
                                        </div>

                                        <div>
                                            <div style={{ color: textColor, fontSize: '14px', fontWeight: '700', marginBottom: '8px' }}>{skill.name}</div>
                                            <span style={{ 
                                                fontSize: '10px', 
                                                fontWeight: '700', 
                                                color: primaryColor, 
                                                background: `${primaryColor}${isDarkMode ? '40' : '2E'}`, 
                                                borderTop: `1px solid ${borderColor}`,
                                                borderRight: `1px solid ${borderColor}`,
                                                borderBottom: `1px solid ${borderColor}`,
                                                borderLeft: `1px solid ${borderColor}`,
                                                padding: '3px 10px', 
                                                borderRadius: '6px', 
                                                display: 'inline-block' 
                                            }}>
                                                {skill.level}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Footer Stats Bar */}
                    <div style={{
                        marginTop: '24px',
                        paddingTop: '18px',
                        borderTop: `1px solid ${borderColor}`,
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '16px',
                        position: 'relative',
                        zIndex: 1
                    }}>
                        {/* Stat Card 1 */}
                        <div style={{ 
                            background: token.colorFillSecondary, 
                            padding: '14px 18px', 
                            borderRadius: '16px', 
                            borderTop: `1px solid ${borderColor}`,
                            borderRight: `1px solid ${borderColor}`,
                            borderBottom: `1px solid ${borderColor}`,
                            borderLeft: `1px solid ${borderColor}`,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px',
                            boxShadow: `0 4px 15px ${primaryColor}06`,
                        }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}AA)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '18px', flexShrink: 0, boxShadow: `0 4px 12px ${primaryColor}40` }}>
                                <RocketOutlined />
                            </div>
                            <div>
                                <div style={{ color: textColor, fontSize: '15px', fontWeight: '800', letterSpacing: '0.3px' }}>1.5 Years</div>
                                <div style={{ color: primaryColor, fontSize: '10.5px', fontWeight: '700' }}>Dev Experience</div>
                            </div>
                        </div>

                        {/* Stat Card 2 */}
                        <div style={{ 
                            background: token.colorFillSecondary, 
                            padding: '14px 18px', 
                            borderRadius: '16px', 
                            borderTop: `1px solid ${borderColor}`,
                            borderRight: `1px solid ${borderColor}`,
                            borderBottom: `1px solid ${borderColor}`,
                            borderLeft: `1px solid ${borderColor}`,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px',
                            boxShadow: `0 4px 15px ${primaryColor}06`,
                        }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}AA)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '18px', flexShrink: 0, boxShadow: `0 4px 12px ${primaryColor}40` }}>
                                <CodeOutlined />
                            </div>
                            <div>
                                <div style={{ color: textColor, fontSize: '15px', fontWeight: '800', letterSpacing: '0.3px' }}>Clean Arch</div>
                                <div style={{ color: primaryColor, fontSize: '10.5px', fontWeight: '700' }}>Best Practices</div>
                            </div>
                        </div>

                        {/* Stat Card 3 */}
                        <div style={{ 
                            background: token.colorFillSecondary, 
                            padding: '14px 18px', 
                            borderRadius: '16px', 
                            borderTop: `1px solid ${borderColor}`,
                            borderRight: `1px solid ${borderColor}`,
                            borderBottom: `1px solid ${borderColor}`,
                            borderLeft: `1px solid ${borderColor}`,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px',
                            boxShadow: `0 4px 15px ${primaryColor}06`,
                        }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}AA)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '18px', flexShrink: 0, boxShadow: `0 4px 12px ${primaryColor}40` }}>
                                <ReadOutlined />
                            </div>
                            <div>
                                <div style={{ color: textColor, fontSize: '15px', fontWeight: '800', letterSpacing: '0.3px' }}>Continuous</div>
                                <div style={{ color: primaryColor, fontSize: '10.5px', fontWeight: '700' }}>Learning & Growth</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}
