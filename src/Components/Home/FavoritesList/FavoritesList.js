import React, { useContext } from 'react';
import { UserContext } from '../../../App';

const FavoritesList = () => {
    const [planet, setPlanet] = useContext(UserContext);

    const favoritePlanets = planet.filter(item => item.isFavourite === true);

    return (
        <div>
            {
                favoritePlanets !== [] && favoritePlanets.map(item => (
                    <li>
                        {item.name}
                    </li>
                ))
            }
        </div>
    );
};

export default FavoritesList;