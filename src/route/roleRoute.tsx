import * as React from 'react';
import { Fragment } from "react";
import {BrowserRouter, Routes, Route, Navigate, useLocation, Outlet} from 'react-router-dom';
import { isSelfieRecord } from '../components/bmiCalculate';
import { useSelector } from 'react-redux';
import { getNftContractStorage } from '../redux/account';
import { selectCurrentUsername } from '../redux/profile';

interface IRoleRouteProps {
  role: string;
}

// use redux to store a variable call isRegister
// if isRegister is true, then redirect to home page
// use NftContractStorage to check if the user has registered
const RoleRoute: React.FunctionComponent<IRoleRouteProps> = (props) => {
  const nftContractStorage = useSelector(getNftContractStorage)
  const username = useSelector(selectCurrentUsername)
  const { role } = props;
  const location = useLocation();

  console.log("fdiousofdii")
  console.log(nftContractStorage)
  console.log(username)

  if (!username && role === "registeredUser") {
    console.log('confirm 1')
    return <Navigate to="/connectWallet" />;
  }

  if (nftContractStorage && role === "unregisteredUser") {
    console.log('confirm 2')

    if (!username) return <Navigate to="/customizeYourProfile" />

    return <Navigate to="/home" />;
  }

  // for the user who has not registered, and 
  if (username && role === "unregisteredUser") {
    console.log('confirm 3')
    if (location.pathname === "/customizeYourProfile") return <Outlet />

    return <Navigate to="/home" />;
  }

  // also check the name of the user, if have name
  return <Outlet />;
};

export default RoleRoute;
