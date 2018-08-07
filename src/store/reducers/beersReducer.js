import * as actionTypes from '../actions/actionTypes';

const initialState = {
    beers: null,
    favorites: []
}

const fetchAllBeersSuccess = (state, action) => {
    return { ...state,
        beers: action.beers
    }
}

const addFavoriteBeer = (state, action) => {
    const favorites = state.favorites.concat(action.beer)
    return { ...state,
        favorites: favorites}
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case actionTypes.FETCH_ALL_BEERS_SUCCESS: return fetchAllBeersSuccess(state, action)
        case actionTypes.ADD_FAVORITE_BEER: return addFavoriteBeer(state, action)
        default: return state
    }
}

export default reducer;