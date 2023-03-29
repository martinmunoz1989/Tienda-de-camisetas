import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo={'Bienvenido a la tienda de Camisetas Argentinas'} subtitulo="Todo del futbol argentino"/>
    </div>
  );
}

export default App;
