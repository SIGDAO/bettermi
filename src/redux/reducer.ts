import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { walletSlice } from "./wallet";
import { accountSlice } from "./account";
import { profileSlice } from "./profile";
import { userBMIApi } from "./userBMIApi";
import { userBMISlice } from "./userBMI";

const rootReducer = combineReducers({
  wallet: walletSlice.reducer,
  account: accountSlice.reducer,
  selfieImage: profileSlice.reducer,
  userBMI: userBMISlice.reducer,
  [userBMIApi.reducerPath]: userBMIApi.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userBMIApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;