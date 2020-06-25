import React, { Component } from 'react';
import './Buttons.css';



class Rules extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggle: false};
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick(e) {
        this.setState({isToggle: !this.state.isToggle});
      }
  



  
  render() {
    return (
        <div className="rule">
            
    <button onClick={() => this.handleClick()}>Rules</button>
    <div
          style={{display: this.state.isToggle ? 'block': 'none'}}
          className="container"
        >
       <ol>
        <li>Any live cell with fewer than two live neighbors dies, as if by underpopulation.</li>
        <li>Any live cell with two or three live neighbors lives on to the next generation.</li>
        <li>Any live cell with more than three live neighbors dies, as if by overpopulation.</li>
        <li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
        </ol>.

    <h2>About</h2>
    <p>The Game of Life is a cellular automaton designed in 1970 by British mathematician John Horton Conway. It takes zero players because the game runs itself from an intital state set by a user. The game is comprised of a grid of square cells with each cell being alive/on or dead/off. The game follows the rules and affects each cell based on its eight neighbors directly above, below, left, right, and diagonally. In theory, Conway's Game of Life is Turing complete in that anything that can be computed algorithmically can be computed with the game.</p>
 </div>
     </div>


    );
  }
}
export default Rules;