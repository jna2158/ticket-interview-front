import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: "login",
    initialState: {isLoginModalOpen: false, isLogin: localStorage.getItem("username"), reqDeleteAccount: false},
    reducers: {
        isLoginModalOpen: (state, action) => {
            state.isLoginModalOpen = action.payload
        },
        isLogin: (state, action) => {
            state.isLogin = action.payload
        },
        deleteAccount: (state, action) => {
            state.reqDeleteAccount = action.payload
        }
    },
});

export default loginSlice.reducer;
export const { isLoginModalOpen, isLogin, deleteAccount} = loginSlice.actions;