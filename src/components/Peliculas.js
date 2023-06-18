import React from 'react';
import Peli from './Peli';
import './Peliculas.css';

const Peliculas = ({ peliculas, onOpenDialog, onCloseDialog }) => {
  return (
    <div className='muestra'>
      {
        peliculas.map((peli, i) => {
          return (
            <Peli
              key={i}
              id={i}
              titulo={peliculas[i].title}
              descripcion={peliculas[i].description}
              year={peliculas[i].releaseYear}
              poster={peliculas[i].images}
              onOpenDialog={onOpenDialog}
              onCloseDialog={onCloseDialog}
              />
          );
        })
      }
    </div>
  );
}

export default Peliculas;