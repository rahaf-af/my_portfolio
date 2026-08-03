import { theme } from 'antd';

export const getThemeConfig = (isDarkMode) => ({
    algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,

    token: {
        // Backgrounds
        colorBgLayout: isDarkMode ? '#02060E' : '#FAF7FC',
        colorBgContainer: isDarkMode ? '#130826' : '#FFFFFF',

        // Brand
        colorPrimary: isDarkMode ? '#C75CFF' : '#8006AA',

        // Typography
        colorText: isDarkMode ? '#FFFFFF' : '#111827',
        colorTextSecondary: isDarkMode ? '#D5C4E8' : '#667085',

        // Borders & Fills
        colorBorder: isDarkMode
            ? 'rgba(199,92,255,0.20)'
            : '#E8DDF6',

        colorFillSecondary: isDarkMode
            ? 'rgba(199,92,255,0.08)'
            : '#F7F2FC',

        motionDurationMid: '0.3s',
        motionDurationSlow: '0.4s',
    },

    components: {
        Layout: {
            headerBg: isDarkMode ? '#02060E' : '#FFFFFF',
            bodyBg: isDarkMode ? '#02060E' : '#FAF7FC',
            footerBg: isDarkMode ? '#02060E' : '#FFFFFF',
        },

        Card: {
            colorBgContainer: isDarkMode ? '#130826' : '#FFFFFF',
        },

        Menu: {
            darkItemBg: 'transparent',

            darkItemColor: isDarkMode
                ? '#D5C4E8'
                : '#667085',

            darkItemSelectedColor: isDarkMode
                ? '#FFFFFF'
                : '#9D4EDD',

            darkItemHoverColor: isDarkMode
                ? '#D67DFF'
                : '#AE5EF4',

            darkItemSelectedBg: isDarkMode
                ? 'rgba(199,92,255,0.18)'
                : 'rgba(157,78,221,0.10)',

            darkItemHoverBg: isDarkMode
                ? 'rgba(199,92,255,0.10)'
                : 'rgba(157,78,221,0.06)',

            itemBorderRadius: 20,
        },
    },
});