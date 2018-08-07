import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchAllBeersSuccess = data => {
    return {
        type: actionTypes.FETCH_ALL_BEERS_SUCCESS,
        beers: data
    }
}

export const fetchAllBeers = () => {
    return dispatch => {
        axios
            .get('https://api.punkapi.com/v2/beers/')
            .then(res => dispatch(fetchAllBeersSuccess(res.data)))
            .catch(err => console.log(err))
    }
}

export const addFavoriteBeer = beer => {
    return {
        type: actionTypes.ADD_FAVORITE_BEER,
        beer: beer
    }
}

export const fetchFavoriteBeer = (id) => {
    return dispatch => {
        axios
            .get(`https://api.punkapi.com/v2/beers/${id}`)
            .then(res => dispatch(addFavoriteBeer(res.data)))
            .catch(err => console.log(err))
    }
}