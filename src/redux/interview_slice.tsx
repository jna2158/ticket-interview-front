import { createSlice } from '@reduxjs/toolkit';

export const interviewSlice = createSlice({
    name: "interview",
    initialState: {agreementInterview: false, interviewType: "Chatting"},
    reducers: {
        agreementInterview: (state, action) => {
            state.agreementInterview = action.payload;
        },
        interviewType: (state, action) => {
            state.interviewType = action.payload
        }
    },
});

export default interviewSlice.reducer;
export const { agreementInterview, interviewType } = interviewSlice.actions;