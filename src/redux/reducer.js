import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_CHARACTER, CLEAN_CHARACTER } from './types';
const initialState = {
    myFavorites: [],
    allCharacters: [],
    characterDetail:{}
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                allCharacters: [...state.allCharacters, payload],
                myFavorites: [...state.myFavorites, payload]
            };
        case REMOVE_FAV:
            return {
                ...state,
                allCharacters: state.allCharacters.filter((character) => character.id !== Number(payload)),
                myFavorites: state.myFavorites.filter((character) => character.id !== Number(payload))
            };
        case FILTER:
            let characters;
            if (payload === 'all') {
                characters = state.allCharacters;
            } else { characters = state.allCharacters.filter((character) => character.gender === payload) }
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
        case CLEAN_CHARACTER:
            return {
                ...state,
                characterDetail: {}
            }
        default:
            return {
                ...state
            };
    }
}

export default rootReducer;