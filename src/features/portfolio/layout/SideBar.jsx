import React, { useState, useEffect } from 'react';
import { Layout, Menu, Grid, Button, Drawer, Switch, theme as antTheme } from 'antd';
import { MenuOutlined, SunOutlined, GlobalOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import Butterfly from '../components/Butterfly';
import { navbarConfig } from '../../../config/navbarConfig';
import './navbar.css';

const { Header, Content, Footer } = Layout;
const { useBreakpoint } = Grid;

const SECTION_MAP = Object.keys(navbarConfig.sections).reduce((acc, key) => {
    acc[key] = navbarConfig.sections[key].id;
    return acc;
}, {});

export default function SideBar({ isDarkMode, setIsDarkMode, lang, setLang }) {
    const [activeKey, setActiveKey] = useState('1');
    const [openDrawer, setOpenDrawer] = useState(false);

    const screens = useBreakpoint();
    const currentYear = new Date().getFullYear();
    const { token } = antTheme.useToken();
    const mainPurple = token.colorPrimary;
    const isLargeScreen = screens.lg;

    const toggleLanguage = () => {
        setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
    };

    const handleScrollToSection = (sectionId, key) => {
        setActiveKey(key);
        setOpenDrawer(false);

        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = navbarConfig.offsets.headerHeight;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
        setActiveKey('1');
    }, []);

    useEffect(() => {
        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const currentKey = Object.keys(SECTION_MAP).find(
                        (key) => SECTION_MAP[key] === entry.target.id
                    );
                    if (currentKey) {
                        setActiveKey(currentKey);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, {
            rootMargin: '-80px 0px -50% 0px',
            threshold: 0.15
        });

        Object.values(SECTION_MAP).forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [lang, isDarkMode]);

    const items = Object.keys(navbarConfig.sections).map((key) => {
        const section = navbarConfig.sections[key];
        return {
            key: key,
            onClick: () => handleScrollToSection(section.id, key),
            label: (
                <span
                    style={{ display: 'block', width: '100%', color: mainPurple, fontWeight: '600', fontSize: 16 }}
                >
                    {section.labels[lang]}
                </span>
            )
        };
    });

    return (
        <Layout style={{ minHeight: '100vh', background: token.colorBgLayout }}>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: isLargeScreen ? navbarConfig.offsets.desktopPadding : navbarConfig.offsets.mobilePadding,
                    borderBottomWidth: '1px',
                    borderBottomStyle: 'solid',
                    borderBottomColor: isDarkMode ? 'rgba(168, 85, 247, 0.15)' : 'rgba(168, 85, 247, 0.2)',
                    position: 'sticky',
                    top: 0,
                    zIndex: 100,
                    background: token.colorBgContainer,
                    boxShadow: `0 10px 30px ${mainPurple}33`,
                    '--theme-primary': mainPurple,
                }}
            >
                {/* تم عكس اتجاه الـ flex بناءً على اللغة لضمان بقاء الفراشة في نهاية الاسم دائماً */}
                <div style={{ fontSize: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', flexDirection: lang === 'ar' ? 'row-reverse' : 'row' }}>
                    <span style={{ color: mainPurple }}>{navbarConfig.brand.name}</span>
                    <div
                        className="nav-butterfly"
                        style={{
                            width: `${navbarConfig.brand.butterflySize}px`,
                            height: `${navbarConfig.brand.butterflySize}px`,
                            '--butterfly-color': mainPurple,
                            marginInline: isLargeScreen ? 10 : 5
                        }}
                    >
                        <Butterfly />
                    </div>
                </div>
                {isLargeScreen && (
                    <Menu
                        key={`nav-menu-${lang}-${isDarkMode}`}
                        theme={isDarkMode ? 'dark' : 'light'}
                        mode="horizontal"
                        selectedKeys={[activeKey]}
                        items={items}
                        className="custom-nav-menu"
                        style={{
                            flex: 1,
                            minWidth: 0,
                            justifyContent: 'center',
                            background: 'transparent'
                        }}
                    />
                )}

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    
                    {/* زر اللغة بدون استخدام border عام مختلط */}
                    <Button
                        type="dashed"
                        icon={<GlobalOutlined style={{ color: mainPurple, fontSize: '14px' }} />}
                        onClick={toggleLanguage}
                        style={{
                            height: '26px',
                            width: '52px',
                            borderWidth: '1.5px',
                            borderStyle: 'dashed',
                            borderColor: `${mainPurple}80`,
                            boxShadow: '0 2px 6px rgba(168, 85, 247, 0.15)',
                            color: mainPurple,
                            fontWeight: 'bold',
                            fontSize: '11px',
                            borderRadius: '13px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '3px',
                            padding: 0,
                            background: 'transparent'
                        }}
                    >
                        {lang === 'en' ? 'AR' : 'EN'}
                    </Button>

                    <Switch
                        checked={isDarkMode}
                        onChange={(checked) => setIsDarkMode(checked)}
                        checkedChildren={<SunOutlined style={{ fontSize: '16px', color: mainPurple }} />}
                        className="fancy-theme-switch"
                        style={{
                            backgroundColor: isDarkMode ? '#e9d5ff' : '#1e1b4b',
                        }}
                    />
                    {!isLargeScreen && (
                        <Button
                            type="text"
                            icon={<MenuOutlined style={{ color: token.colorText, fontSize: '25px' }} />}
                            onClick={() => setOpenDrawer(true)}
                        />
                    )}
                </div>
            </Header>

            <Drawer
                key={`nav-drawer-${lang}`}
                title={
                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                        <span style={{ color: mainPurple }}>{navbarConfig.brand.name}</span>
                    </div>
                }
                placement={lang === 'ar' ? 'left' : 'right'}
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}
                size={260}
                style={{ '--theme-primary': mainPurple }}
                styles={{
                    body: { background: token.colorBgContainer, padding: '16px 8px' },
                    header: { 
                        background: token.colorBgContainer, 
                        borderBottomWidth: '1px',
                        borderBottomStyle: 'solid',
                        borderBottomColor: isDarkMode ? 'rgba(168, 85, 247, 0.15)' : 'rgba(168, 85, 247, 0.2)' 
                    }
                }}
            >
                <Menu
                    key={`nav-drawer-menu-${lang}-${isDarkMode}`}
                    theme={isDarkMode ? 'dark' : 'light'}
                    mode="inline"
                    selectedKeys={[activeKey]}
                    items={items}
                    className="custom-nav-menu"
                    onClick={() => setOpenDrawer(false)}
                    style={{ background: 'transparent', border: 'none' }}
                />
            </Drawer>

            <Content style={{ padding: isLargeScreen ? '24px 40px' : '16px 16px' }}>
                <div style={{ minHeight: 280, padding: 24, borderRadius: '16px' }}>
                    <Outlet />
                </div>
            </Content>

            <Footer style={{ textAlign: 'center', color: token.colorTextSecondary, background: token.colorBgLayout }}>
                {navbarConfig.footerText[lang](currentYear)}
            </Footer>
        </Layout>
    );
}
