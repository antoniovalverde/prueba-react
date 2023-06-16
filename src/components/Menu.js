import React from 'react';
import './Menu.css';

const Menu = ({ onRouteChange }) => {
    return (
        <div className='menu'>
           <div className='seleccion'>
                <div onClick={() => onRouteChange('series')} className='boton'>
                    <h1>SERIES</h1>
                </div>
                <small className='textinfo'>Popular Series</small>
           </div>
           <div className='seleccion'>
                <div onClick={() => onRouteChange('peliculas')} className='boton'>
                    <h1>MOVIES</h1>
                </div>
                <small className='textinfo'>Popular Movies</small>
           </div>             
        </div>
    );
}

export default Menu;