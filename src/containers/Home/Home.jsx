import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import './Home.css';
import Star from '../../assets/star.svg';

export class Home extends Component {
    componentDidMount() {
        this.props.onFetchBeers();
    }

    render() {
        const { beers } = this.props;
        let mapBeer = '';
        if (beers) {
            mapBeer = beers.map((beer) => {
                return (
                    <div className="beers__list__beer" key={beer.id}>
                        <div className="beers__list__beer--fav-btn" onClick={() => this.props.onClickFavorite(beer.id)}>
                            <svg>
                                <use className="fav" xlinkHref='../../assets/star.svg'></use>
                            </svg>
                        </div>
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
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        beers: state.beers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchBeers: () => dispatch(actions.fetchAllBeers()),
        onClickFavorite: (id) => dispatch(actions.fetchFavoriteBeer(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);