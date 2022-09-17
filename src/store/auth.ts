import { createSlice } from '@reduxjs/toolkit';
import { AuthState, reduxAction } from '../models';

const initialAuthState = {
  isLoggedIn: false,
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    signin(prevState: AuthState, action: reduxAction) {
      prevState.isLoggedIn = action.payload.isLoggedIn || true;
      prevState.role = action.payload?.role;
    },
  },
});

const authActions = authSlice.actions;

export { authSlice, authActions };
