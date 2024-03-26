import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './loginSlice';

export default configureStore({
  reducer: {
    login: loginSlice
  },
})