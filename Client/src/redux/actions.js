import {
    /**characters */
    ADD_CHARACTER, REMOVE_CHARACTER, GET_CHARACTER, CLEAN_CHARACTER,

    /**favorites */
    ADD_FAV, REMOVE_FAV, FILTER, ORDER,

    /**complements */
    SET_LOADING, SET_ERROR,

    /**session */
    LOGIN_SUCCESS, LOGOUT
} from './types';

import axios from 'axios';

/**
 * agrega un character a nuestro estado global solicitando el character a la API
 * @param {number} id - ID del personaje
 * @returns accion de redux para agregar el personaje
 */
export const addCharacter = (id) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
            .then((response) =>
                dispatch({
                    type: ADD_CHARACTER,
                    payload: response.data
                })
            )
            .catch((error) =>
                dispatch(setError(error.message))
            )
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
}

/**
 * elimina el character de nuestro estado global
 * @param {number} id -ID del personaje
 * @returns accion de redux para eliminar el personaje
 */
export const removeCharacter = (id) => {
    return {
        type: REMOVE_CHARACTER,
        payload: id
    }
}

/**
 * obtiene un personaje que se encuentra en nuestro estado global
 * @param {number} id -ID del personaje
 * @returns accion de redux para obtener el personaje
 */
export const getCharacter = (id) => {
    return {
        type: GET_CHARACTER,
        payload: id
    }
}
/**
 * limpia el personaje actual en nuestro estado global
 * @returns accion de redux para limpiar el personaje actual
 */
export const cleanCharacter = () => {
    return {
        type: CLEAN_CHARACTER
    }
}


/**
 * agrega un personaje a la lista de favoritos
 * @param {object} character - Objeto personaje a agregar
 * @returns accion de redux para agregar el personaje a favoritos
 */
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const TOKEN = localStorage.getItem('token');
            let response = await axios.post(endpoint, { character: character }, { headers: { Authorization: `Bearer ${TOKEN}` } });
            return dispatch({ type: ADD_FAV, payload: response.data })
        } catch (error) {
            return dispatch({ type: SET_ERROR, payload: error.message })
        }
    }
}

/**
 * elimina un personaje de la lista de favoritos
 * @param {number} id - ID del personaje
 * @returns accion redux para eliminar el personaje de favoritos
 */
export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) => {
        try {
            const TOKEN = localStorage.getItem('token');
            let response = await axios.delete(endpoint, { headers: { Authorization: `Bearer ${TOKEN}` } })
            return dispatch({ type: REMOVE_FAV, payload: response.data })
        } catch (error) {
            return dispatch({ type: SET_ERROR, payload: error.message })
        }
    }
}

/**
 * filtra a los personajes segun el genero
 * @param {string} gender - genero por el cual filtrar a los personajes favoritos
 * @returns accion de redux para filtrar los personajes
 */
export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

/**
 * ordena a los personajes segun el criterio
 * @param {string} order - Criterio de orden
 * @returns accion de redux para ordenar los personajes
 */
export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}


/**
 * estableve el estado global de la carga
 * @param {boolean} bool - Valor boolean que indica el valor de carga
 * @returns accion de redux para establecer el estado de carga
 */
export const setLoading = (bool) => {
    return {
        type: SET_LOADING,
        payload: bool
    }
}

/**
 * establece el mensaje de error
 * @param {string} message - Mensaje de error
 * @returns accion de redux para establecer el mensaje de error
 */
export const setError = (message) => {
    return {
        type: SET_ERROR,
        payload: message
    }
}


/**
 * Inicio de session del usuario
 * @param {object} user - Usuario con datos de inicio de sesion
 * @returns accion redux para iniciar sesion
 */
export const loginUser = (user) => {
    const { email, password } = user;
    return async (dispatch) => {
        try {
            const URL = `http://localhost:3001/rickandmorty/login?email=${email}&password=${password}`;
            let response = await axios(URL);
            localStorage.setItem('token', response.data.token);
            return dispatch({ type: LOGIN_SUCCESS, payload: response.data })
        } catch {
            return dispatch({ type: SET_ERROR, payload: 'Email or Password incorrect' })
        }
    }
}

/**
 * cierre la sesion del usuario
 * @returns accion de redux para cerrar la sesion del usuario
 */
export const logoutUser = () => {
    return { type: LOGOUT }
}

export const reloadAccess = () => {
    return async (dispatch) => {
        try {
            const TOKEN = localStorage.getItem('token');
            const URL = `http://localhost:3001/rickandmorty/get-favs`;
            let response = await axios.post(URL, null, { headers: { Authorization: `Bearer ${TOKEN}` } });
            return dispatch({ type: LOGIN_SUCCESS, payload: response.data });
        } catch (error) {
            return dispatch({ type: SET_ERROR, payload: error.message })
        }
    }
    // return { type: SET_ACCESS, payload: bool }
}