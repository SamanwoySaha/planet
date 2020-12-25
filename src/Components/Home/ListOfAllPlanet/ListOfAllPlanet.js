import React, { useContext, useEffect, useState } from 'react';
import './ListOfAllPlanet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';


const ListOfAllPlanet = () => {
    const [planet, setPlanet] = useContext(UserContext);

    const addToFavoritesList = (list) => {
        list.isFavourite = !(list.isFavourite);
        setPlanet([...planet]);
    }
    
    return (
        <div className="container">
            <div className="row d-flex">
                {
                    planet.map(list => (
                        <div className="card mt-4" style={{ width: '18rem', marginLeft: '70px', boxShadow: '8px 8px 8px 8px gray' }}>
                            <FontAwesomeIcon className='icon fa-4x mt-2' icon={faGlobe} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{list.name}</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, accusamus?</p>
                                <button onClick={() => addToFavoritesList(list)} href="#" className={`${list.isFavourite ? "btn-secondary"  : "btn-outline-danger" } btn `}>Mark As Favorite</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default ListOfAllPlanet;