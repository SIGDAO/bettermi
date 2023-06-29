import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { walletSlice } from "./wallet";
import { accountSlice } from "./account";
import { selfieSlice } from "./profile";

const rootReducer = combineReducers({
  wallet: walletSlice.reducer,
  account: accountSlice.reducer,
  selfieImage: selfieSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;