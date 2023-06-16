import React from 'react';
import './Peli.css';

const Peli = ({ titulo, descripcion, year, poster }) => {
  return (
    <div className='cartelito'>
      <img src ={ poster['Poster Art'].url } alt='cartel'/>
      <div className='titlePoster'>{titulo}</div>
    </div>
  );
}

export default Peli;