import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExtensionWalletError } from "@signumjs/wallets";
import { clear } from "console";
import { useLedger } from './useLedger';
import { accountId } from './account';
import { useSelector } from "react-redux";
import { UTCTimestamp } from "lightweight-charts";
import { findBMI } from "../components/findBMI";

export interface BMI_Day {
  time: string | UTCTimestamp | number;
  value: number;
}


export interface UserBMIState {
  userBMI: BMI_Day[];
}

const initialState: UserBMIState = {
  userBMI:[],
};


export interface GetblockchainBMIProps {
  tempAccountId: string,
  Ledger2: any,
}





export const userBMISlice = createSlice({
  name: "selfieImage",
  initialState,
  reducers: {
    setBMI: (state, action: PayloadAction<BMI_Day[]>) => {
    // setBMI: (state, action: PayloadAction<string>) => {
      // state is imagePath
      state.userBMI = action.payload;
    },
    getblockchainBMI: (state, action: PayloadAction<GetblockchainBMIProps>) => {
      findBMI(action.payload.tempAccountId, action.payload.Ledger2)
        .then((res) => {
          console.log("res", res);
          state.userBMI = res;
        })
      // state.userBMI = 
    }, 
  },
});

export const { actions } = userBMISlice;

// get selfiePath, state type need change



// export const selectCurrentImg = (state: any) => state.selfieImage.selfiePath;
export const selectBMI = (state: any) => state.userBMI.userBMI;
