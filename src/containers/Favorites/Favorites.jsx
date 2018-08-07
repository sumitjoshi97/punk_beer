import React, { Component } from 'react'
import { connect } from 'react-redux';

export class Favorites extends Component {

    render() {
        const favList = this.props.favorites.map(favorite => {
            return (
                <div className="beers__list__beer" key={favorite.id}>
                    <div className="beers__list__beer--image">
                        <img src={favorite.image_url} alt="" /></div>
                    <div className="beers__list__beer--name">{favorite.name}</div>
                </div>
            )

        })
        return (
            <div className="beers">
                <div className="beers__list">
                    {favList}
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
}
export default connect(mapStateToProps, null)(Favorites);
