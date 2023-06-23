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

const initialState = {
    allCharacters: [],
    allFavs: [],
    myFavorites: [],
    characterDetail: {},
    loading: false,
    error: null,
    access: false
};

const rootReducer = (state = initialState, { type, payload }) => {
    // reducer tiene 1 parametro inicial y luego action = {type, payload} para determinar acciones a realizar
    switch (type) {
        /**characters actions*/
        case ADD_CHARACTER:
            return {
                ...state,
                allCharacters: [payload, ...state.allCharacters]
            };

        case REMOVE_CHARACTER:
            const favs = state.myFavorites.filter((character) => Number(character.id) !== Number(payload));
            return {
                ...state,
                allCharacters: state.allCharacters.filter((character) => Number(character.id) !== Number(payload)),
                myFavorites: favs,
                allFavs: favs
            };

        case GET_CHARACTER:
            return {
                ...state,
                characterDetail: state.allCharacters.find((character) => Number(character.id) === Number(payload))
            };

        case CLEAN_CHARACTER:
            return {
                ...state,
                characterDetail: {}
            };

        /**favorites actions */
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                allFavs: payload
            };

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload,
                allFavs: payload
            };

        case FILTER:
            let characters;
            if (payload === 'all') {
                characters = state.allFavs;
            } else {
                characters = state.allFavs.filter((character) => character.gender === payload)
            }
            return {
                ...state,
                myFavorites: characters
            };

        case ORDER:
            let orden = [...state.myFavorites];
            if (payload === 'A') {
                orden.sort((a, b) => a.id - b.id)
            } else {
                orden.sort((a, b) => b.id - a.id)
            }
            return {
                ...state,
                myFavorites: orden
            };

        /**complements */
        case SET_LOADING:
            return {
                ...state,
                loading: payload
            };

        case SET_ERROR:
            return {
                ...state,
                error: payload
            };

        /**session */
        case LOGIN_SUCCESS:
            return {
                ...state,
                access: true,
                allCharacters: payload.favs,
                allFavs: payload.favs,
                myFavorites: payload.favs,
            };

        case LOGOUT:
            localStorage.removeItem('token');
            return {
                allCharacters: [],
                allFavs: [],
                myFavorites: [],
                access: false
            };

        default:
            return {
                ...state
            };
    }
}
export default rootReducer;