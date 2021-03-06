import axios from "axios";

const _baseUrl = 'https://pokeapi.co/api/v2';
const _list =`${_baseUrl}/pokemon`;

export const getList = async ( param ) => {
    const response = await axios.get(`${_list}/?limit=12&offset=${param}`);
    return response.data;
}

export const getItem = async ( param ) => {
    const response = await axios.get(`${_baseUrl}/${param}`);
    return response.data;
}