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
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    cargarDatos();
    let filt, filtro;
    filt = peliculas.filter(peli =>
      peli.releaseYear >= 2010 && peli.programType === route
    );
    filt.sort((x, y) => x.title.localeCompare(y.title));
    filtro = filt.slice(0, 20);

    setListado(filtro); 
    setCargando(false); 
  }, [route]);

  const onRouteChange = (ruta) => {
    setError(null);
    setRoute(ruta);
    setCargando(true);
  }

  const cargarDatos = () => {
    fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
      .then((response) => {
        if(response.ok){
          response.json()
          .then(pelis => {setPeliculas(pelis.entries)})
        }else{
          setError(true);
        }
      })
  }

  const onOpenDialog = (id) => {
    let dialogo = document.getElementById('modal' + id);
    dialogo.show();
  }

  const onCloseDialog = (id) => {
    let dialogo = document.getElementById('modal' + id);
    dialogo.close();
  }

  return (
    <div>
      <Header />
      <Scroll>
      { route === 'home' ?
        <Menu onRouteChange={onRouteChange} /> 
        : (
            cargando === true
            ? <div className='cargando'>
                <span>Loading...</span>
              </div>
            : (
                error === true
                ? <div className='cargando'>
                    <span>Oops, something went wrong...</span>
                  </div>
                : <Peliculas peliculas={ listado } onOpenDialog={onOpenDialog} onCloseDialog={onCloseDialog} />
            )
          )
      }
      </Scroll>
      <Footer />
    </div>
  );
}

export default App;
