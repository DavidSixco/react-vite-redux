import { Dispatch } from "@reduxjs/toolkit";
import { pokeApiRequest } from "../../../api/Auth/AuthApi";
import { loginStart, setLogin } from "./authSlice";

export const getPoke = (page: number = 1) => async (dispatch, getState) => {
    dispatch(loginStart());
    const { data } = await pokeApiRequest.get(`pokemon?limit=10&offset=${page * 10}`);
    dispatch(setLogin(data?.results));

}