// package
import React from 'react';
import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route, Navigate, useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Provider as ReduxProvider } from "react-redux";


// local
import './App.css';
import LogoPage from './pages/logoPage/LogoPage';
import ConnectWallet from './pages/connectWallet/connectWallet';
import GenerateBMI from './pages/generateBMI/generateBMI';
import TakeSelfie from './pages/takeSelfie/TakeSelfie';
import { store } from './redux/reducer';
import { appConfig } from './redux/useContext';
import { AppContext } from './redux/useContext';
import ConnectSuccess from './pages/connectSuccess/connectSuccess';
import GenerateFreeNFT from './pages/generateFreeNFT/generateFreeNFT';
import CustomizeYourProfile from './pages/customizeYourProfile/customizeYourProfile';

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
        <Route path="/connectSuccess" element={<ConnectSuccess/>} />
        <Route path="/generateFreeNFT" element={<GenerateFreeNFT/>} />
        <Route path="/customizeYourProfile" element={<CustomizeYourProfile/>} />
        {/* todo: flow 2 */}
        
      </Routes>
      </ReduxProvider>  
    </AppContext.Provider>
  );
}

export default App;
