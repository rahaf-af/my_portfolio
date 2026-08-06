import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from 'antd';
import arEG from 'antd/locale/ar_EG';
import enUS from 'antd/locale/en_US';
import SideBar from './features/portfolio/layout/SideBar';
import Main from './features/portfolio/pages/Main';
import Loader from './features/portfolio/pages/Loader';
import { getThemeConfig } from './features/portfolio/layout/themeConfig'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'dark'
  });

  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'en'
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <ConfigProvider
      theme={getThemeConfig(isDarkMode)}
      direction={lang === 'ar' ? 'rtl' : 'ltr'}
      locale={lang === 'ar' ? arEG : enUS}
    >
      <>
        {isLoading && <Loader onFinished={() => setIsLoading(false)} lang={lang}/> }
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <SideBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} lang={lang} setLang={setLang}/>}>
              <Route index element={<Main lang={lang} key={`${lang}-${isDarkMode}`} />} />
              <Route path="portfolio" element={<Main lang={lang} key={`${lang}-${isDarkMode}`} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </ConfigProvider>
  );
}

export default App;
