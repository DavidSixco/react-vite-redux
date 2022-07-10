import axios from "axios";

export const pokeApiRequest = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})