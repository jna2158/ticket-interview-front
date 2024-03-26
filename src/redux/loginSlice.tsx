import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: "loginmodal",
    initialState: { isOpen: false},
    reducers: {
        isOpen: (state, action) => {
            state.isOpen = action.payload
        },
    },
});

export default loginSlice.reducer;
export const { isOpen } = loginSlice.actions;