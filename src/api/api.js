import axios from "axios";

const _baseUrl = 'https://pokeapi.co/api/v2/pokemon';

export const getList = async ( param ) => {
    const response = await axios.get(`${_baseUrl}/?limit=12&offset=${param}`);
    return response.data;
}

export const getItem = async ( id ) => {
    const response = await axios.get(`${_baseUrl}/${id}`);
    return response.data;
}