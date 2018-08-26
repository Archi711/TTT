// libs
import React from 'react';
import ReactDOM from 'react-dom';
import reset from 'glamor-reset';

// custom imports
import Board from './components/board';
import Info from './components/info';

ReactDOM.render(
  <main>
    <Info/>
    <Board/>
  </main>
, document.querySelector('.main'));