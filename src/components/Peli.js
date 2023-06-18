import React from 'react';
import './Peli.css';

const Peli = ({ id, titulo, descripcion, year, poster, onOpenDialog, onCloseDialog }) => {
  return (
    <div className='cartelito'>
      <img src={ poster['Poster Art'].url } alt='cartel'/>
      <div id={id} className='titlePoster' onClick={() => onOpenDialog(id)}>{titulo}</div>
      <dialog id={`modal${id}`}>
        <div className='cerrar'>
          <span onClick={() => onCloseDialog(id)}>X</span>
        </div>
        <div className='titulito'>
          <h3>{titulo}</h3>
        </div>
        <h5>{year}</h5>
        <p>{descripcion}</p>
        <div className='cartelin'>
          <img src={ poster['Poster Art'].url } alt='cartel2'/>
        </div>
      </dialog>
    </div>
  );
}

export default Peli;