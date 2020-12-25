import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../../images/earth.jpg';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <a className="navbar-brand" href="#">
                    <img style={{width:'40px'}} src={images} alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <Link to='/listOfAllPlanet'>
                            <li className="nav-item active">
                                <a className="nav-link" style={{color:'white',fontFamily:'sans-serif'}} href="#">ListOfPlanet</a>
                            </li>
                        </Link>
                        <Link to='/favoritesList'>
                            <li className="nav-item">
                                <a className="nav-link"  style={{color:'white', fontFamily:'sans-serif'}} href="#">FavoriteList</a>
                            </li>
                        </Link>


                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;