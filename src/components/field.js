// libs
import React from 'react';
import css from '../styles/field';

// custom imports
import o from '../assets/o.png';
import x from '../assets/x.png';

/** 
 * A single field on gameboard
 * 
 * @prop {0,1,2} content - figure to render inside
 * 
*/
class Field extends React.Component {

  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);

    this.state = {
      value : 0,
    }
  }

  shouldComponentUpdate(p , n) {
    if(p == n) return false;
    return true;
  }



  /**
   * Simple function which returns image source for player figures
  */
  getImg(i){
    switch(i){
      case 0 : return 0;
      case 1 : return x
      case 2 : return o
    }
  }



  /**
   * Listener on click 
   * - Function launches callback on parent element
   * to check if player can make move, if  
   * - fires animation on particular field.
   * @param {*} e ReactEvent
   */
  onClick(e){
    e.persist();
    pop(e);
    let v = this.getImg(this.props.clicked());
    v ? this.setState({value : v}, () => {
          this.renderImg(e);
        }) : ''; 
  }



  /**
   * Simple function to render figure inside field
   * @param {*} ev ReactEvent to work on
   */
  renderImg(ev){
      if(this.state.value && ev){
        ev.target.innerHTML = `<img src=${this.state.value} class='${css.img}'></img>`
      }
  }





  /**
   * Main render method of component
   * @returns generated component
   */
  render(){
    return (
      <div 
        className={css.td}
        onClick={this.onClick}>
        </div>
    )
  }
}





/**
 * Simple click animation of particular field
 * @param {*} e ReactEvent to work with
 */
function pop(e){
  let scale = 1;
  const pyp = (t) => {
    if(scale >= 0.9){
      e.target.style.transform = `scale(${scale})`;
      scale -= 0.05;
      window.requestAnimationFrame(pyp);
    } else window.requestAnimationFrame(pep);
  }
  const pep = () => {
    if(scale <= 1){
      e.target.style.transform = `scale(${scale})`;
      scale += 0.02;
      window.requestAnimationFrame(pep);
    }
  }
  window.requestAnimationFrame(pyp);
}


export default Field;

