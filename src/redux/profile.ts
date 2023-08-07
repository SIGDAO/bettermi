import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExtensionWalletError } from "@signumjs/wallets";
import { clear } from "console";

export interface ProfileState {
  selfiePath: string;
  username: string;
  discordUsername: string;
  description: string;
  aboutYourself: string;
  bmi: string;
  gender: string;
  birthday: Date | null;
}

export interface BMIState {
  time: string;
  bmi: string;
}

const initialState: ProfileState = {
  selfiePath: "",
  username: "",
  discordUsername: "",
  description: "I'm a positive person. I love to travel and eat.",
  aboutYourself: "♉️  |  29  |  PERSONAL TRAINER",
  bmi: "",
  gender: "",
  birthday: null,
};


export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setSelfieImage: (state, action: PayloadAction<string>) => {
      state.selfiePath = action.payload;
      // localStorage.setItem("por", action.payload);
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
    setBMI: (state, action: PayloadAction<string>) => {
      state.bmi = action.payload;
    },
    clearBMI: (state) => {
      state.bmi = "";
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    clearGender: (state) => {
      state.gender = "";
    },
    setBirthday: (state, action: PayloadAction<Date>) => {
      state.birthday = action.payload;
    },
    clearBirthday: (state) => {
      state.birthday = null;
    },
    setDiscordUsername: (state, action: PayloadAction<string>) => {
      state.discordUsername = action.payload;
    },
    clearDiscordUsername: (state) => {
      state.discordUsername = "";
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    clearDescription: (state) => {
      state.description = "";
    },
    setAboutYourself: (state, action: PayloadAction<string>) => {
      state.aboutYourself = action.payload;
    },
    clearAboutYourself: (state) => {
      state.aboutYourself = "";
    },
    clearAll: (state) => {
      state.selfiePath = "";
      state.username = "";
      state.bmi = "";
      state.gender = "";
      state.birthday = null;
    }
  },
});

export const { actions } = profileSlice;

// get selfiePath, state type need change


export const selectCurrentImg = (state: any) => state.profile.selfiePath;
export const selectCurrentUsername = (state: any) => {
  if (state.profile.username === "") {
    return localStorage.getItem("name") ? localStorage.getItem("name") : ''
  }
  return state.profile.username;
};
export const selectCurrentBMI = (state: any) => state.profile.bmi;
export const selectCurrentGender = (state: any) => state.profile.gender;
export const selectCurrentBirthday = (state: any) => state.profile.birthday;
export const selectCurrentDiscordUsername = (state: any) => state.profile.discordUsername;
export const selectCurrentDescription = (state: any) => state.profile.description;
export const selectCurrentAboutYourself = (state: any) => state.profile.aboutYourself;