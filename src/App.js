import React, { Component } from 'react';
import Header from './components/commons/header';
import Footer from './components/commons/footer';
import LocalizadorTiempo from './components/localizadorTiempo/localizadorTiempo';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
      <LocalizadorTiempo/>
        <Footer/>

      </div>
    );
  }
}

export default App;
