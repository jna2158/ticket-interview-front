import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './login_slice';
import interviewSlice from './interview_slice';

export default configureStore({
  reducer: {
    login: loginSlice,
    interview: interviewSlice
  },
})