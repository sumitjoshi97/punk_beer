import React, { Component } from 'react'
import axios from 'axios';
import './Home.css';

export class Home extends Component {
    componentDidMount() {

    }

    handleFavorites = (id) => {
        axios.get('https://api.punkapi.com/v2/beers/' + id)
            .then(res => {
                this.setState((prevState) => ({
                    favorites: prevState.favorites.concat(res.data)
                }))
            })
    }

    render() {
        const { beers } = this.state;
        let mapBeer = '';
        if (beers.length > 0) {
            mapBeer = beers.map((beer) => {
                return (
                    <div className="beers__list__beer" key={beer.id}>
                        <div className="beers__list__beer--fav-btn" onClick={(id) => this.handleFavorites(beer.id)}></div>
                        <div className="beers__list__beer--image">
                            <img src={beer.image_url} alt="" /></div>
                        <div className="beers__list__beer--name">{beer.name}</div>
                    </div>
                )
            })
        }

        return (
            <div className="beers">
                <div className="beers__list">
                    {mapBeer}
                    {console.log(this.state.beers)}
                    {console.log('fav', this.state.favorites)}
                </div>
            </div>

        )
    }
}

export default Home;