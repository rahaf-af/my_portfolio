import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from './features/portfolio/layout/SideBar';
import Main from './features/portfolio/pages/Main';
import Loader from './features/portfolio/pages/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  console.log('[APP] render, isLoading =', isLoading, 'time =', performance.now());

  useEffect(() => {
    console.log('[APP] useEffect mounted, readyState =', document.readyState, 'time =', performance.now());

    const handleLoaded = () => {
      console.log('[APP] load event fired, time =', performance.now());
      setTimeout(() => {
        console.log('[APP] 2300ms timeout done -> setIsLoading(false), time =', performance.now());
        setIsLoading(false);
      }, 2300);
    };

    if (document.readyState === 'complete') {
      console.log('[APP] readyState already complete, time =', performance.now());
      handleLoaded();
    } else {
      window.addEventListener('load', handleLoaded);

      const fallbackTimer = setTimeout(() => {
        console.log('[APP] FALLBACK 3500ms timeout fired -> setIsLoading(false), time =', performance.now());
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