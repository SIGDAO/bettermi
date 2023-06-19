
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userAccount 
{accountId: string,
accountRS: string,
publicKey: string,
isWatchOnlyMode: boolean}

const initialState: userAccount = {
    accountId: "",
    accountRS: "",
    publicKey: "",
    isWatchOnlyMode: false};

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setAccount: (state, action: PayloadAction<userAccount>) => {
            state.accountId = action.payload.accountId;
            state.accountRS = action.payload.accountRS;
            state.publicKey = action.payload.publicKey;
            state.isWatchOnlyMode = action.payload.isWatchOnlyMode;
        }   
    }   
});
export const { actions } = accountSlice;