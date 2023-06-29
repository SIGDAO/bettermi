import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExtensionWalletError } from "@signumjs/wallets";
import { clear } from "console";

export interface SelfieState {
  selfiePath: string;
  username: string;
}

const initialState: SelfieState = {
  selfiePath: "",
  username: "",
};

export const selfieSlice = createSlice({
  name: "selfieImage",
  initialState,
  reducers: {
    setSelfieImage: (state, action: PayloadAction<string>) => {
      console.log("setSelfieImage", action.payload);
      state.selfiePath = action.payload;
    },
    clearSelfieImage: (state) => {
      state.selfiePath = "";
    },
  },
});

export const { actions } = selfieSlice;

// get selfiePath, state type need change


export const selectCurrentImg = (state :any ) => state.selfieImage.selfiePath;
