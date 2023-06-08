import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_CHARACTER, CLEAN_CHARACTER } from './types';
import axios from 'axios';

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}

export const getCharacter = (id) => {
    return async function (dispatch) {
        await new Promise (resolve => setTimeout(resolve,2000));
        await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) =>
                dispatch({
                    type: GET_CHARACTER,
                    payload: response.data
                })
            );
    }
}

export const cleanCharacter = () =>{
    return {
        type: CLEAN_CHARACTER
    }
}