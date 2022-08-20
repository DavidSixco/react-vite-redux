import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IReponse {
  isLoading: Boolean;
  isError: Boolean;
  isSuccess: Boolean;
  data: any;
  error: String;
  status: Number;
}

export interface AuthState {
  id: String;
  name: String;
  email: String;
  password?: String;
  response: IReponse;
}

const initialState: AuthState = {
  id: '',
  name: '',
  email: '',
  password: '',
  response: {
    isLoading: false,
    error: '',
    isError: false,
    status: 0,
    data: [],
    isSuccess: false,
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.response.isLoading = true;
    },
    loginSuccess: (state) => {
      state.email = '';
    },
    setLogin: (state, action) => {
      console.log(action);

      state.response.isLoading = false;
      state.response.isSuccess = true;
      // state.response.data = 'jjajajajjajaj'
      state.response.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginStart, setLogin, loginSuccess } = authSlice.actions;

export default authSlice.reducer;
