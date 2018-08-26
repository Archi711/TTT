///libs
import React from 'react';

/// custom imports
import Field from './field';
import css from '../styles/board'

/**
 * Board Component/Container
 * - Structure & Data container of gameboard
 * `fieldStatus` = 
 * [
 *  0 3 6
 *  1 4 7
 *  2 5 8
 * ]
 */
class Board extends React.Component{

  constructor(props){
    super(props);

    this.state = { // helper state -> redux in future
      PLAYER_FIG : 1, // from server
      fieldStatus : [0,0,0,0,0,0,0,0,0], // from server 
    };
  }

  /**
   * Function which manages click from 'dataside'
   * checks status of field
   * if field is free function should 
   * @param {Number} position of field
   * @returns {Number} `0,1,2` player figure
   */
  fieldClicked(position){
    return () => {
      if(!this.state.fieldStatus[position]){
        let newState = this.state.fieldStatus;
        newState[position] = this.state.PLAYER_FIG;
        this.setState(newState);
        return this.state.PLAYER_FIG;
      }
      else {
        // warning about impossible move
        return 0;
      }
    }
  }

  render(){
    return(
      <div className={css.container}>
        <div className={css.table}>
          <div className={css.tbody}>
            <div className={css.rw}>
              <Field clicked={this.fieldClicked(0)} content={this.state.fieldStatus[0]}/>
              <Field clicked={this.fieldClicked(1)} content={this.state.fieldStatus[1]}/>
              <Field clicked={this.fieldClicked(2)} content={this.state.fieldStatus[2]}/>
            </div>
            <div className={css.rw}>
              <Field clicked={this.fieldClicked(3)} content={this.state.fieldStatus[3]}/>
              <Field clicked={this.fieldClicked(4)} content={this.state.fieldStatus[4]}/>
              <Field clicked={this.fieldClicked(5)} content={this.state.fieldStatus[5]}/>
            </div>
            <div className={css.rw}>
              <Field clicked={this.fieldClicked(6)} content={this.state.fieldStatus[6]}/>
              <Field clicked={this.fieldClicked(7)} content={this.state.fieldStatus[7]}/>
              <Field clicked={this.fieldClicked(8)} content={this.state.fieldStatus[8]}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Board;