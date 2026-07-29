import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from './features/portfolio/layout/SideBar';
import Main from './features/portfolio/pages/Main'
import Loader from './features/portfolio/pages/Loader'

function App() {
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    // إغلاق الـ Loader فور وصوله للـ 100% بوقت قصير جداً
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 1900); 

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {isLoading && <Loader />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SideBar />}>
            <Route path="portfolio" element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
