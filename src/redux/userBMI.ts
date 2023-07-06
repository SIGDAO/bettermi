import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExtensionWalletError } from "@signumjs/wallets";
import { clear } from "console";

export interface UserBMIState {
  userBMI: string
}

const initialState: UserBMIState = {
  userBMI: '25.4',
};

export const userBMISlice = createSlice({
  name: "selfieImage",
  initialState,
  reducers: {
    setBMI: (state, action: PayloadAction<string>) => {
      // state is imagePath
      
      state.userBMI = action.payload;
    },
  },
});

export const { actions } = userBMISlice;

// get selfiePath, state type need change



export const selectCurrentImg = (state: any) => state.selfieImage.selfiePath;
export const selectBMI = (state: any) => state.userBMI.userBMI;
