import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Peliculas from '../components/Peliculas';
import Scroll from '../components/Scroll';
import './App.css';

function App(){

  const [peliculas, setPeliculas] = useState([]);
  const [route, setRoute] = useState('home');
  const [listado, setListado] = useState();



  useEffect(() => {
    cargarDatos();
  });

  const onRouteChange = (ruta) => {
    let filt, filtro;

    if(ruta === 'series'){
      filt = peliculas.filter(peli =>
        peli.releaseYear >= 2010 && peli.programType === 'series'
      ); 
      filt.sort((x, y) => x.title.localeCompare(y.title));
      filtro = filt.slice(0, 20);
    }else if(ruta === 'peliculas'){
      filt = peliculas.filter(peli =>
        peli.releaseYear >= 2010 && peli.programType === 'movie'
      );
      filt.sort((x, y) => x.title.localeCompare(y.title));
      filtro = filt.slice(0, 20);
    }
    setRoute(ruta);
    setListado(filtro);
  }

  const cargarDatos = () => {
    fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
      .then(response=> response.json())
      .then(pelis => {setPeliculas(pelis.entries)});
  }

  return (
    <div>
      <Header />
      <Scroll>
      { route === 'home' ?
        <Menu onRouteChange={onRouteChange} /> 
        : (
            route === 'series'
            ? <Peliculas peliculas={ listado } />
            : <Peliculas peliculas={ listado } />
          )
      }
      </Scroll>
      <Footer />
    </div>
  );
}

export default App;