import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExtensionWalletError } from "@signumjs/wallets";
import { clear } from "console";
import { useLedger } from './useLedger';
import { accountId } from './account';
import { useSelector } from "react-redux";

export interface BMI_Day {
  timeStamp: number;
  BMI: number;
}


export interface UserBMIState {
  userBMI: string;
}

const initialState: UserBMIState = {
  userBMI: '',
};






export const userBMISlice = createSlice({
  name: "selfieImage",
  initialState,
  reducers: {
    // setBMI: (state, action: PayloadAction<BMI_Day[]>) => {
    setBMI: (state, action: PayloadAction<string>) => {
      // state is imagePath
      state.userBMI = action.payload;
    },
    // getblockchainBMI: async (state, action: PayloadAction<BMI_Day[]>) => {
      
    //   state.userBMI = await FindBMI();
    // }, 
  },
});

export const { actions } = userBMISlice;

// get selfiePath, state type need change



// export const selectCurrentImg = (state: any) => state.selfieImage.selfiePath;
export const selectBMI = (state: any) => state.userBMI.userBMI;
