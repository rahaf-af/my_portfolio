import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import { Layout, Menu, ConfigProvider, Grid, Button, Drawer, Switch } from 'antd';
import { MenuOutlined, SunOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
import Butterfly from '../components/Butterfly(1).json'
import './navbar.css';
import { getThemeConfig } from './themeConfig';

const { Header, Content, Footer } = Layout;
const { useBreakpoint } = Grid;

const SECTION_MAP = {
    '1': 'home',
    '2': 'about',
    '3': 'projects',
    '4': 'skills',
    '5': 'experience',
    '6': 'certificates',
    '7': 'contact',
};

export default function SideBar() {
    // نبدأ دائماً من '1' (Home)
    const [activeKey, setActiveKey] = useState('1');
    const [openDrawer, setOpenDrawer] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const screens = useBreakpoint();
    const currentYear = new Date().getFullYear();

    const currentTheme = getThemeConfig(isDarkMode);
    const mainPurple = currentTheme.token.colorPrimary;
    const isLargeScreen = screens.lg;

    const handleScrollToSection = (e, sectionId, key) => {
        e.preventDefault();
        setActiveKey(key);
        setOpenDrawer(false);

        const element = document.getElementById(sectionId);
        if (element) {
            // حساب مكان العنصر بدقة مع مراعاة ارتفاع الهيدر (لتجنب تغطية الجزء العلوي من السكشن)
            const headerOffset = 70;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // عند حدوث Refresh، نقوم بإجبار المتصفح على العودة لأعلى الصفحة (Home) فوراً
    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        window.scrollTo(0, 0);
        setActiveKey('1');

        const homeElement = document.getElementById('home');
        if (homeElement) {
            homeElement.scrollIntoView({ behavior: 'auto', block: 'start' });
        }
    }, []);

    // مراقبة التمرير لتحديث القائمة أثناء تصفح المستخدم العادي
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
    }, []);

    const items = [
        { key: '1', label: <span onClick={(e) => handleScrollToSection(e, 'home', '1')} style={{ display: 'block', width: '100%', color: mainPurple, fontWeight: '600', fontSize: 16 }}>Home</span> },
        { key: '2', label: <span onClick={(e) => handleScrollToSection(e, 'about', '2')} style={{ display: 'block', width: '100%', color: mainPurple, fontWeight: '600', fontSize: 16 }}>About</span> },
        { key: '3', label: <span onClick={(e) => handleScrollToSection(e, 'projects', '3')} style={{ display: 'block', width: '100%', color: mainPurple, fontWeight: '600', fontSize: 16 }}>Projects</span> },
        { key: '4', label: <span onClick={(e) => handleScrollToSection(e, 'skills', '4')} style={{ display: 'block', width: '100%', color: mainPurple, fontWeight: '600', fontSize: 16 }}>Skills</span> },
        { key: '5', label: <span onClick={(e) => handleScrollToSection(e, 'experience', '5')} style={{ display: 'block', width: '100%', color: mainPurple, fontWeight: '600', fontSize: 16 }}>Experience</span> },
        { key: '6', label: <span onClick={(e) => handleScrollToSection(e, 'certificates', '6')} style={{ display: 'block', width: '100%', color: mainPurple, fontWeight: '600', fontSize: 16 }}>Certificates</span> },
        { key: '7', label: <span onClick={(e) => handleScrollToSection(e, 'contact', '7')} style={{ display: 'block', width: '100%', color: mainPurple, fontWeight: '600', fontSize: 16 }}>Contact</span> },
    ];

    return (
        <ConfigProvider theme={currentTheme}>
            <Layout style={{ minHeight: '100vh', background: currentTheme.token.colorBgLayout }}>
                <Header
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: isLargeScreen ? '0 40px' : '0 20px',
                        borderBottom: `1px solid ${isDarkMode ? 'rgba(168, 85, 247, 0.15)' : 'rgba(168, 85, 247, 0.2)'}`,
                        position: 'sticky',
                        top: 0,
                        zIndex: 100,
                        background: currentTheme.token.colorBgContainer,
                        boxShadow: '0 10px 30px rgba(168, 85, 247, 0.2)',
                    }}
                >
                    <div style={{ fontSize: '20px', fontWeight: 'bold' , display:'flex', alignItems:'center' }}>
                        <span style={{ color: mainPurple }}>𝑅𝑎ℎ𝑎𝑓 𝐹𝑎𝑙𝑙𝑎𝑡𝑎ℎ</span>
                        <div
                            className="nav-butterfly"
                            style={{
                                width: '30px',
                                height: '30px',
                                '--butterfly-color': mainPurple, // تمرير لون الثيم الأساسي مباشرة هنا
                                marginInline: isLargeScreen ? 10 : 5

                            }}
                        >
                            <Butterfly />
                        </div>
                    </div>
                    {isLargeScreen && (
                        <Menu
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

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
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
                                icon={<MenuOutlined style={{ color: currentTheme.token.colorText, fontSize: '25px' }} />}
                                onClick={() => setOpenDrawer(true)}
                            />
                        )}
                    </div>
                </Header>

                <Drawer
                    title={
                        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            <span style={{ color: mainPurple }}>𝑅𝑎ℎ𝑎𝑓 𝐹𝑎𝑙𝑙𝑎𝑡𝑎ℎ</span>
                        </div>
                    }
                    placement="right"
                    onClose={() => setOpenDrawer(false)}
                    open={openDrawer}
                    size={230}
                    styles={{
                        body: { background: currentTheme.token.colorBgContainer, padding: '12px 0' },
                        header: { background: currentTheme.token.colorBgContainer, borderBottom: `1px solid ${isDarkMode ? 'rgba(168, 85, 247, 0.2)' : '#e2e8f0'}` }
                    }}
                >
                    <Menu
                        theme={isDarkMode ? 'dark' : 'light'}
                        mode="inline"
                        selectedKeys={[activeKey]}
                        items={items}
                        className="custom-nav-menu"
                        onClick={() => setOpenDrawer(false)}
                        style={{ background: 'transparent' }}
                    />
                </Drawer>

                <Content style={{ padding: isLargeScreen ? '24px 40px' : '16px 16px' }}>
                    <div style={{ minHeight: 280, padding: 24, borderRadius: 16 }}>
                        <Outlet />
                    </div>
                </Content>

                <Footer style={{ textAlign: 'center', color: currentTheme.token.colorTextSecondary, background: currentTheme.token.colorBgLayout }}>
                    ©{currentYear} Rahaf.Fallatah All rights reserved.
                </Footer>
            </Layout>
        </ConfigProvider>
    );
}
