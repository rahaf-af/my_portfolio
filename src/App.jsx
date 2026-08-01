import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from './features/portfolio/layout/SideBar';
import Main from './features/portfolio/pages/Main';
import Loader from './features/portfolio/pages/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
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
