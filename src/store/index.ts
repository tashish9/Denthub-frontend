import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { popUpSlice } from './pop-up';
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    popup: popUpSlice.reducer,
  },
});

export { store };
