import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Campain } from './Pages/Campain/index.tsx';
import { Regionpage } from './Pages/RegionPage/index.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path='Campain' element={<Campain />} />
        <Route path='region' element={<Regionpage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
