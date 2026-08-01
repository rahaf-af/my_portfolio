import { theme } from 'antd';

export const getThemeConfig = (isDarkMode) => ({
    algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
        colorBgLayout: isDarkMode ? '#02060E' : '#f4eefb',      
        colorBgContainer: isDarkMode ? '#130826' : '#ffffff',   // درجة بنفسجية داكنة وعميقة ومميزة لخلفية الكاردز في الوضع الداكن
        colorPrimary: '#9303C5',       
        colorText: isDarkMode ? '#ffffff' : '#0f172a',          
        colorTextSecondary: isDarkMode ? '#9ca3af' : '#64748b', 
        motionDurationMid: '0.3s',
        motionDurationSlow: '0.4s',
    },
    components: {
        Layout: {
            headerBg: isDarkMode ? '#02060E' : '#ffffff',
            bodyBg: isDarkMode ? '#02060E' : '#f4eefb',
            footerBg: isDarkMode ? '#02060E' : '#ffffff',
        },
        Card: {
            colorBgContainer: isDarkMode ? '#130826' : '#ffffff',
        },
        Menu: {
            darkItemBg: 'transparent',
            darkItemColor: isDarkMode ? '#9ca3af' : '#64748b',
            darkItemSelectedColor: isDarkMode ? '#ffffff' : '#9303C5',             
            darkItemHoverColor: '#9303C5',               
            darkItemSelectedBg: isDarkMode ? 'rgba(147, 3, 197, 0.25)' : 'rgba(147, 3, 197, 0.1)',  
            darkItemHoverBg: 'rgba(147, 3, 197, 0.15)',   
            itemBorderRadius: 20,
        },
    },
});
