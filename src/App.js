import React, { Component } from 'react';
import firebase from 'firebase';
import Coins from './Components/Coins';
import Titles from './Components/Titles';
import Header from './Components/Header';
import Register from './Components/Register'
import Logo from './logo-blanco.png'
import Phone from './phone.png'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Titles />
        <Register />
        <Coins />
      </div>
    );
  }
}

export default App;



