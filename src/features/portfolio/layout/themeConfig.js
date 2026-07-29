import { theme } from 'antd';

export const getThemeConfig = (isDarkMode) => ({
    algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
        colorBgLayout: isDarkMode ? '#07040d' : '#f4eefb',      
        colorBgContainer: isDarkMode ? '#110924' : '#ffffff',   
        colorPrimary: '#a855f7',       
        colorText: isDarkMode ? '#ffffff' : '#0f172a',          
        colorTextSecondary: isDarkMode ? '#9ca3af' : '#64748b', 
        // إضافة سرعة عامة للتصميم إذا دعمته بعض العناصر
        motionDurationMid: '0.3s',
        motionDurationSlow: '0.4s',
    },
    components: {
        Layout: {
            headerBg: isDarkMode ? '#07040d' : '#ffffff',
            bodyBg: isDarkMode ? '#07040d' : '#f4eefb',
            footerBg: isDarkMode ? '#07040d' : '#ffffff',
        },
        Menu: {
            darkItemBg: 'transparent',
            darkItemColor: isDarkMode ? '#9ca3af' : '#64748b',
            darkItemSelectedColor: isDarkMode ? '#ffffff' : '#a855f7',             
            darkItemHoverColor: '#a855f7',               
            darkItemSelectedBg: isDarkMode ? 'rgba(168, 85, 247, 0.2)' : 'rgba(168, 85, 247, 0.1)',  
            darkItemHoverBg: 'rgba(168, 85, 247, 0.1)',   
            itemBorderRadius: 20,
        },
    },
});
