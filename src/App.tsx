// package
import React from 'react';
import { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route, Navigate, useLocation, Outlet} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Provider as ReduxProvider } from "react-redux";
import  { Fragment } from 'react';


// setting
import { store } from './redux/reducer';
import { appConfig } from './redux/useContext';
import { AppContext } from './redux/useContext';

// JSX element
import './App.css';
import 'react-calendar/dist/Calendar.css';
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
import { loadState, saveState } from './redux/sessionStorage';
import Testing from './pages/testing/testing';
import { createTheme , ThemeProvider } from "@mui/material"
// import { ThemeProvider , createTheme } from '@mui/material/styles';
import { Analytics } from '@vercel/analytics/react';
import GenerateBMIDaily from './pages/generateBMIDaily/generateBMIDaily';
import GenerateBMINFTImport from './pages/generateBMINFTImport/generateBMINFTImport';
import AiCoachSelect from './pages/aiCoachSelect/aiCoachSelect';
import AiCoachDetail from './pages/aiCoachDetail/aiCoachDetail';
import ErrorGenerateNFT from './pages/errorGenerateNFT/errorGenerateNFT';
import LoadingMinting from './pages/loadingMinting/loadingMinting';
import Setting from './pages/setting/setting';

store.subscribe(() => {
  saveState(store.getState());
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#4136F1',
    },
  }
})

const CheckStore: React.FC = () => {
  const location = useLocation();
  const currentPath: string = location.pathname;
  console.log('Current URL:', currentPath);

  if (currentPath === '/' || currentPath === '/connectWallet' ){
    return <Outlet/>
  }

  return sessionStorage.getItem('state') === null ? <Navigate to="/" /> : <Outlet/>;
}




function App() {
  return (
    // path
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={appConfig}>
        <ReduxProvider store={store}>
          <Routes>
            <Route element = {
              <Fragment>
                <CheckStore/>
                <Analytics/>
              </Fragment>
            }>
              <Route path="/" element={<LogoPage/>} />
              <Route path="/connectWallet" element={<ConnectWallet/>} />
              <Route path="/generateBMI" element={<GenerateBMI/>} />
              <Route path="/takeSelfie" element={<TakeSelfie/>} />
              <Route path="/connectSuccess" element={<ConnectSuccess/>} />
              <Route path="/generateFreeNFT" element={<GenerateFreeNFT/>} />
              <Route path="/customizeYourProfile" element={<CustomizeYourProfile/>} />
              {/* flow 2 */}
              <Route path="/home" element={<Home/>} />
              <Route path="/allMission" element={<AllMission/>} />
              <Route path="/challengeCompleted" element={<ChallengeCompleted/>} />
              <Route path="/challengeCountdown">
                <Route path=":id" element={<ChallengeCountdown/>} />
              </Route>
              <Route path="/missionChallenge" element={<MissionChallenge/>} />
              <Route path="/myNftList" element={<MyNftList/>} />
              <Route path="/reward" element={<Reward/>} />
              <Route path="/rewardDetail">
                <Route path=":id" element={<RewardDetail/>} />
              </Route>
              <Route path="/selfieToEarn" element={<SelfieToEarn/>} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/marketplace" element={<Marketplace/>} />
              <Route path="/testing" element={<Testing/>} />
              {/* flow 3 */}
              <Route path='/generateBMIDaily' element={<GenerateBMIDaily />} />
              <Route path='/generateBMINFTImport' element={<GenerateBMINFTImport />} />
              <Route path='/aiCoachSelect' element={<AiCoachSelect />} />
              <Route path='/aiCoachDetail' >
                <Route path=':id' element={<AiCoachDetail />} />
              </Route>
              <Route path='/errorGenerateNFT' element={<ErrorGenerateNFT />} />
              <Route path='/loadingMinting' element={<LoadingMinting />} />
              <Route path='/setting' element={<Setting />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Route>
          </Routes>
        </ReduxProvider>  
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;