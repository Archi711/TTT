import React from 'react';
import reset from 'glamor-reset';

import css from '../styles/info';

class Info extends React.Component{
  // container with complete information about actual game
  render(){
    return (
      <header className={css.header}>
        <article className={css.mainInfo}> 
          <p className={css.pInfo}>Turn: </p>
          <h3 className={css.pInfo}>TicTacToe!</h3>
          <p className={css.pInfo}>Turn time: </p>
        </article>
      </header>
    )
  }
}




export default Info;