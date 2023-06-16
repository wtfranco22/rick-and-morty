import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_CHARACTER, CLEAN_CHARACTER, ADD_CHARACTER, REMOVE_CHARACTER, CLEAN_CHARACTERS, SET_LOADING, SHOW_ERROR, SET_ERROR, LOGIN_SUCCESS, LOGOUT } from './types';
import axios from 'axios';

export const addCharacter = (id) => {
    return (dispatch) => {
        dispatch(setLoading(true));
        new Promise(resolve => setTimeout(resolve, 500));
        // await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
            .then((response) =>
                dispatch({
                    type: ADD_CHARACTER,
                    payload: response.data
                })
            )
            .catch((error) =>
                dispatch({
                    type: SHOW_ERROR,
                    payload: error.message
                })
            )
            .finally(() => {
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

export const removeCharacter = (id) => {
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
        // await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
            .then((response) =>
                dispatch({
                    type: GET_CHARACTER,
                    payload: response.data
                })
            )
            .finally(() => {
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

export const setLoading = (bool) => {
    return {
        type: SET_LOADING,
        payload: bool
    }
}

export const setError = () => {
    return {
        type: SET_ERROR
    }
}

export const loginUser = (user) => {
    return (user.email === 'franco@gmail.com' && user.password === 'franco123') ?
        { type: LOGIN_SUCCESS } : { type: SHOW_ERROR, payload: 'incorrect data' }
}

export const logoutUser = () => {
    return { type: LOGOUT }
}