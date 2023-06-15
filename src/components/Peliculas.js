import React from 'react';
import Peli from './Peli';

const Peliculas = ({ peliculas }) => {
  return (
    <div>
      {
        peliculas.map((peli, i) => {
          return (
            <Peli
              key={i}
              titulo={peliculas[i].title}
              descripcion={peliculas[i].description}
              year={peliculas[i].releaseYear}
              />
          );
        })
      }
    </div>
  );
}

export default Peliculas;