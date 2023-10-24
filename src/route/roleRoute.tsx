import * as React from 'react';
import { Fragment } from "react";
import {BrowserRouter, Routes, Route, Navigate, useLocation, Outlet} from 'react-router-dom';
import { isSelfieRecord } from '../components/bmiCalculate';
import { useSelector } from 'react-redux';
import { getNftContractStorage } from '../redux/account';

interface IRoleRouteProps {
  role: string;
}

// use redux to store a variable call isRegister
// if isRegister is true, then redirect to home page
// use NftContractStorage to check if the user has registered
const RoleRoute: React.FunctionComponent<IRoleRouteProps> = (props) => {
  const nftContractStorage = useSelector(getNftContractStorage)
  const { role } = props;

  // for the user who has not registered, and 
  if (!nftContractStorage && role === "registeredUser" || nftContractStorage && role === "unregisteredUser") {
    return <Navigate to="/" />;
  }

  // also check the name of the user, if have name
  return <Outlet />;
};

export default RoleRoute;
