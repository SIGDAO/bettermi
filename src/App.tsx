// package
import React from 'react';
import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route, Navigate, useLocation} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Provider as ReduxProvider } from "react-redux";


// setting
import { store } from './redux/reducer';
import { appConfig } from './redux/useContext';
import { AppContext } from './redux/useContext';

// JSX element
import './App.css';
import LogoPage from './pages/logoPage/LogoPage';
import ConnectWallet from './pages/connectWallet/connectWallet';
import GenerateBMI from './pages/generateBMI/GenerateBMI';
import TakeSelfie from './pages/takeSelfie/TakeSelfie';
import ConnectSuccess from './pages/connectSuccess/connectSuccess';
import GenerateFreeNFT from './pages/generateFreeNFT/generateFreeNFT';
import CustomizeYourProfile from './pages/customizeYourProfile/customizeYourProfile';
import Home from './pages/home/home';
import AllMission from './pages/allMission/allMission';
import ChallengeCompleted from './pages/challengeCompleted/challengeCompleted';
import ChallengeCountdown from './pages/challengeCountdown/challengeCountdown';
import MissionChallenge from './pages/missionChallenge/missionChallenge';
import MyNftList from './pages/myNftList/myNftList';
import Reward from './pages/reward/reward';
import RewardDetail from './pages/rewardDetail/rewardDetail';
import SelfieToEarn from './pages/selfieToEarn/selfieToEarn';
import Profile from './pages/profile/profile';
import Marketplace from './pages/marketplace/marketplace';




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
          <Route path="/home" element={<Home/>} />
          <Route path="/allMission" element={<AllMission/>} />
          <Route path="/challengeCompleted" element={<ChallengeCompleted/>} />
          <Route path="/challengeCountdown" element={<ChallengeCountdown/>} />
          <Route path="/missionChallenge" element={<MissionChallenge/>} />
          <Route path="/myNftList" element={<MyNftList/>} />
          <Route path="/reward" element={<Reward/>} />
          <Route path="/rewardDetail">
            <Route path=":id" element={<RewardDetail/>} />
          </Route>
          <Route path="/selfieToEarn" element={<SelfieToEarn/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/marketplace" element={<Marketplace/>} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </ReduxProvider>  
    </AppContext.Provider>
  );
}

export default App;
