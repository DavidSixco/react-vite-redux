import { Dispatch } from '@reduxjs/toolkit';
import { urlSingIn } from '@root/configuration/paths';
import { Credentials } from '@root/types/formulary-types';
import axios from 'axios';
import { pokeApiRequest } from '../../../api/Auth/AuthApi';
import { loginStart, loginSuccess, setLogin } from './authSlice';

export const getPoke =
  (page: number = 1) =>
  async (dispatch: Dispatch, getState: any) => {
    dispatch(loginStart());
    const { data } = await pokeApiRequest.get(`pokemon?limit=10&offset=${page * 10}`);
    dispatch(setLogin(data?.results));
  };

export const singIn = (credentials: Credentials) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.post(urlSingIn(), credentials);
    console.log(response, 'response of the credentias;');
    dispatch(loginSuccess());
  } catch (error) {
    console.log('errorerrorerrorerror', error);

    // dispatch()
  }
};
