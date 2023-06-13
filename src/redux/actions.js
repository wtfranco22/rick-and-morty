import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_CHARACTER, CLEAN_CHARACTER, ADD_CHARACTER, REMOVE_CHARACTER, CLEAN_CHARACTERS, SET_LOADING, SET_ACCESS } from './types';
import axios from 'axios';

export const addCharacter = (id) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        await new Promise(resolve => setTimeout(resolve, 500));
        await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) =>
                dispatch({
                    type: ADD_CHARACTER,
                    payload: response.data
                })
            )
            .finally(()=>{
                dispatch(setLoading(false))
            })
    }
}

export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

export const removeCharacter= (id) =>{
    return {
        type: REMOVE_CHARACTER,
        payload: id
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
        dispatch(setLoading(true));
        await new Promise(resolve => setTimeout(resolve, 2000));
        await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then((response) =>
                dispatch({
                    type: GET_CHARACTER,
                    payload: response.data
                })
            )
            .finally(()=>{
                dispatch(setLoading(false))
            })
    }
}

export const cleanCharacters = () => {
    return {
        type: CLEAN_CHARACTERS
    }
}

export const cleanCharacter = () => {
    return {
        type: CLEAN_CHARACTER
    }
}

export const setLoading = (bool) =>{
    return {
        type: SET_LOADING,
        payload: bool
    }
}

export const setAccess = (bool) => {
    return {
        type: SET_ACCESS,
        payload: bool
    }
}