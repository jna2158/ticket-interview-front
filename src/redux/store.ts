import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './login_slice';

export default configureStore({
  reducer: {
    login: loginSlice
  },
})