import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/board';
import Info from './components/info';

ReactDOM.render(
  <main>
    <Info/>
    <Board/>
  </main>
, document.querySelector('.fluid-container'));