import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from './features/portfolio/layout/SideBar';
import Main from './features/portfolio/pages/Main';
import Loader from './features/portfolio/pages/Loader';

function App() {
  // المحتوى الحقيقي يترسم فوراً من أول لحظة (تحت الـ Loader).
  // الـ Loader نفسه مسؤول عن اختفائه بأنيميشن CSS، مش JS timer.
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {showLoader && <Loader onFinished={() => setShowLoader(false)} />}
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