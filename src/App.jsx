import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from './features/portfolio/layout/SideBar';
import Main from './features/portfolio/pages/Main';
import Loader from './features/portfolio/pages/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // بدل الاعتماد على setTimeout بمدة ثابتة (اللي ينجمد على iOS Safari
    // لما الصفحة تكون بالخلفية أو غير نشطة)، نراقب حالة الصفحة الفعلية
    // ونستخدم مؤقت قصير جداً كـ "شبكة أمان" فقط، مع مستمع visibilitychange
    // يضمن إننا ما نضل عالقين لو صار تجميد.

    let finished = false;

    const finish = () => {
      if (!finished) {
        finished = true;
        setIsLoading(false);
      }
    };

    const handleLoaded = () => {
      // مهلة قصيرة بس (مو 2300ms) عشان الأنيميشن يوصل لنهايته بشكل مريح
      setTimeout(finish, 900);
    };

    if (document.readyState === 'complete') {
      handleLoaded();
    } else {
      window.addEventListener('load', handleLoaded);
    }

    // شبكة أمان: لو رجعت الصفحة نشطة (visible) وكانت لسا عالقة بالتحميل
    // لأي سبب (تجميد مؤقتات، تبديل تطبيقات، إلخ)، أنهي التحميل فوراً
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        finish();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    // شبكة أمان مطلقة: مهما صار، لا تعلقي أكثر من 4 ثواني
    const hardFallback = setTimeout(finish, 4000);

    return () => {
      window.removeEventListener('load', handleLoaded);
      document.removeEventListener('visibilitychange', handleVisibility);
      clearTimeout(hardFallback);
    };
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
