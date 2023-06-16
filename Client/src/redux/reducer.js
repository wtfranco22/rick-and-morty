import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_CHARACTER, CLEAN_CHARACTER, ADD_CHARACTER, REMOVE_CHARACTER, CLEAN_CHARACTERS, SET_LOADING, SHOW_ERROR, SET_ERROR, LOGIN_SUCCESS, LOGOUT } from './types';
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
    switch (type) {
        case ADD_CHARACTER:
            return {
                ...state,
                allCharacters: [...state.allCharacters, payload]
            }
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
                allFavs: [...state.allFavs, payload]
            };
        case REMOVE_CHARACTER:
            let favs = state.myFavorites.filter((character) => character.id !== Number(payload));
            return {
                ...state,
                allCharacters: state.allCharacters.filter((character) => character.id !== Number(payload)),
                myFavorites: favs,
                allFavs: favs
            }
        case REMOVE_FAV:
            let newFavs = state.myFavorites.filter((character) => character.id !== Number(payload));
            return {
                ...state,
                myFavorites: newFavs,
                allFavs: newFavs
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
            }
        case GET_CHARACTER:
            return {
                ...state,
                characterDetail: payload
            }
        case CLEAN_CHARACTERS:
            return {
                allCharacters: [],
                myFavorites: [],
                characterDetail: {}
            }
        case CLEAN_CHARACTER:
            return {
                ...state,
                characterDetail: {}
            }
        case SET_LOADING:
            return {
                ...state,
                loading: payload
            }
        case SHOW_ERROR:
            return {
                ...state,
                error: payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: null
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                access: true
            }
        case LOGOUT: {
            return {
                ...state,
                allCharacters: [],
                allFavs: [],
                myFavorites: [],
                characterDetail: {},
                access: false
            }
        }
        default:
            return {
                ...state
            };
    }
}

export default rootReducer;