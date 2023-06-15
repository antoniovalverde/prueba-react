import React from 'react';

const Peli = ({ titulo, descripcion, year }) => {
  return (
    <div className='cartelito'>
      <div>
        <h2>{titulo}</h2>
        <p>{descripcion}</p>
        <h3>{year}</h3>
      </div>
    </div>
  );
}

export default Peli;