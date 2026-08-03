import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider } from 'antd';
import SideBar from './features/portfolio/layout/SideBar';
import Main from './features/portfolio/pages/Main';
import Loader from './features/portfolio/pages/Loader';
import { getThemeConfig } from './features/portfolio/layout/themeConfig'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // نقرأ القيمة المحفوظة من localStorage عند أول تحميل (lazy initializer)
  // هذا يشتغل مرة وحدة بس، قبل أول رسم للصفحة، فما يصير أي "ومضة" بثيم خاطئ
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // كل مرة يتغير فيها isDarkMode، نحفظ القيمة الجديدة بـ localStorage تلقائياً
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <ConfigProvider theme={getThemeConfig(isDarkMode)}>
      <>
        {isLoading && <Loader onFinished={() => setIsLoading(false)} />}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SideBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}>
              <Route index element={<Main />} />
              <Route path="portfolio" element={<Main />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </ConfigProvider>
  );
}

export default App;
