import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExtensionWalletError } from "@signumjs/wallets";
import { clear } from "console";

export interface ProfileState {
  selfiePath: string;
  username: string;
}

const initialState: ProfileState = {
  selfiePath: "",
  username: "",
};

export const profileSlice = createSlice({
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
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    clearUsername: (state) => {
      state.username = "";
    },
    clearAll: (state) => {
      state.selfiePath = "";
      state.username = "";
    }
  },
});

export const { actions } = profileSlice;

// get selfiePath, state type need change


export const selectCurrentImg = (state: any) => state.selfieImage.selfiePath;
