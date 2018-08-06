import * as actionTypes from './actionTypes';
import axios from 'axios';

export default fetchAllBeersSuccess = data => {
    return {
        type: actionTypes.FETCH_ALL_BEERS_SUCCESS,
        beers: data
    }
}


export default fetchAllBeers = () => {
    return dispatch => {
        axios
            .get('https://api.punkapi.com/v2/beers/')
            .then(res => dispatch(fetchAllBeersSuccess(res.data)))
            .catch(err => console.log(err))
    }
}

export default addFavoriteBeer = beer => {
    return {
        type: actionTypes.ADD_FAVORITE_BEER,
        beer: beer
    }
}

export default fetchFavoriteBeer = (id) => {
    return dispatch => {
        axios
            .get(`https://api.punkapi.com/v2/beers/${id}`)
            .then(res => dispatch(addFavoriteBeer(res.data)))
            .catch(err => console.log(err))
    }
}