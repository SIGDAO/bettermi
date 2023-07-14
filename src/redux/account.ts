
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userAccount 
{accountId: string,
accountRS: string,
publicKey: string,
isWatchOnlyMode: boolean,
token:number,
}

const initialState: userAccount = {
    accountId: "",
    accountRS: "",
    publicKey: "",
    isWatchOnlyMode: false,
    token:0,
};

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setAccount: (state, action: PayloadAction<userAccount>) => {
            state.accountId = action.payload.accountId;
            state.accountRS = action.payload.accountRS;
            state.publicKey = action.payload.publicKey;
            state.isWatchOnlyMode = action.payload.isWatchOnlyMode;
            
        },
        setToken:(state, action: PayloadAction<number>) => {
            state.token = action.payload;
        }
    }   
});
export const { actions } = accountSlice;
export const accountPublicKey = (state: any) => state.account.publicKey;
export const accountId = (state: any) => state.account.accountId;
export const accountToken = (state: any) => {
    return state.account.token?state.account.Token:localStorage.getItem("Token");
};