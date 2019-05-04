import React from 'react';
import './App.css';
import Menu from './containers/Menu';
import Article from './containers/Article'

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Menu />
        <Article />
      </div>
    </div>
  );
}

export default App;
