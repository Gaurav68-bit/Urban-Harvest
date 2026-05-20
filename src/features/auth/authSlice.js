import { createSlice } from '@reduxjs/toolkit';
import { mockUser } from '../../data/mockData';

const initialState = {
  user: null,
  isAuthenticated: false,
  rememberMe: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
    },
    setRememberMe: (state, action) => {
      state.rememberMe = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

// Thunk for login with mock validation
export const loginUser = (credentials) => (dispatch) => {
  dispatch(loginStart());

  // Simulate API delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        credentials.email === 'admin@urbanharvest.com' &&
        credentials.password === 'password123'
      ) {
        dispatch(loginSuccess(mockUser));
        resolve(mockUser);
      } else {
        const errorMsg = 'Invalid email or password. Try admin@urbanharvest.com / password123';
        dispatch(loginFailure(errorMsg));
        reject(new Error(errorMsg));
      }
    }, 1200);
  });
};

export const { loginStart, loginSuccess, loginFailure, logout, setRememberMe, clearError } =
  authSlice.actions;
export default authSlice.reducer;
