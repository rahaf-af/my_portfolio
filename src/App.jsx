import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from './features/portfolio/layout/SideBar';
import Main from './features/portfolio/pages/Main';
import Loader from './features/portfolio/pages/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoaded = () => {
      // إعطاء مهلة قصيرة لضمان استقرار رسم عناصر الـ DOM بالكامل على كافة المتصفحات ومنها Safari
      setTimeout(() => {
        setIsLoading(false);
      }, 2300);
    };

    if (document.readyState === 'complete') {
      handleLoaded();
    } else {
      window.addEventListener('load', handleLoaded);
      
      // مؤقت احتياطي لضمان عمل الـ Loader وعدم تعليقه في حال تأخر حدث الـ load
      const fallbackTimer = setTimeout(() => {
        setIsLoading(false);
      }, 3500);
      
      return () => {
        window.removeEventListener('load', handleLoaded);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SideBar />}>
            <Route index element={<Main />} />
            <Route path="portfolio" element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;