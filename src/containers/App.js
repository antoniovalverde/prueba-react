import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Peliculas from '../components/Peliculas';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      peliculas: []
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json')
      .then(response=> response.json())
      .then(pelis => {this.setState({ peliculas: pelis.entries})});
  }

  render() {
    const { peliculas } = this.state;

    return !peliculas.length ?
      <h1>Loading</h1> :
      (
        <div>
          <Header />
          <Peliculas peliculas={ peliculas }/>
          <Footer />
        </div>
      );
  }
}

export default App;