import { createSlice } from '@reduxjs/toolkit';

export const interviewSlice = createSlice({
    name: "interview",
    initialState: {interviewType: null},
    reducers: {
        interviewType: (state, action) => {
            state.interviewType = action.payload
        }
    },
});

export default interviewSlice.reducer;
export const {interviewType} = interviewSlice.actions;