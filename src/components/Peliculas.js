import React from 'react';
import Peli from './Peli';
import './Peliculas.css';

const Peliculas = ({ peliculas }) => {
  return (
    <div className='muestra'>
      {
        peliculas.map((peli, i) => {
          return (
            <Peli
              key={i}
              titulo={peliculas[i].title}
              descripcion={peliculas[i].description}
              year={peliculas[i].releaseYear}
              poster={peliculas[i].images}
              />
          );
        })
      }
    </div>
  );
}

export default Peliculas;