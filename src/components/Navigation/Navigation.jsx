import React from 'react'
import {Link} from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <div className="navigation">
      <Link className="navigation__link" to="/">All beer availbale</Link>
      <Link className="navigation__link" to="/favorites">Favorites</Link>
    </div>
  )
}

export default Navigation;