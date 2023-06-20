// package
import React from 'react';
import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route, Navigate, useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Provider as ReduxProvider } from "react-redux";


// components
import LogoPage from './pages/logoPage/LogoPage';
import ConnectWallet from './pages/connectWallet/connectWallet';
import GenerateBMI from './pages/generateBMI/GenerateBMI';
import TakeSelfie from './pages/takeSelfie/TakeSelfie';
import { store } from './redux/reducer';
import { appConfig } from './redux/useContext';
import { AppContext } from './redux/useContext';

function App() {
  return (
    // path
    <AppContext.Provider value={appConfig}>
    <ReduxProvider store={store}>
    <Routes>
      <Route path="/" element={<LogoPage/>} />
      <Route path="/connectWallet" element={<ConnectWallet/>} />
      <Route path="/generateBMI" element={<GenerateBMI/>} />
      <Route path="/takeSelfie" element={<TakeSelfie/>} />
    </Routes>
    </ReduxProvider>  
   </AppContext.Provider>
  );
}

export default App;
