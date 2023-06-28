import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExtensionWalletError } from "@signumjs/wallets";
import { clear } from "console";

export interface SelfieState {
  img: string;
}

const initialState: SelfieState = {
  img: "",
};

export const selfieSlice = createSlice({
  name: "selfieImage",
  initialState,
  reducers: {
    setSelfieImage: (state, action: PayloadAction<string>) => {
      console.log("setSelfieImage", action.payload);
      state.img = action.payload;
    },
    clearSelfieImage: (state) => {
      state.img = "";
    },
  },
});

export const { actions } = selfieSlice;

// get img, state type need change


export const selectCurrentImg = (state :any ) => state.selfieImage.img;
