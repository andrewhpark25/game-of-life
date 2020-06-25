import React, { Component } from 'react';
import './Buttons.css';



class Buttons extends Component {

 

  
  render() {
    return (
        <div className="buttons">
        <button onClick={this.props.startGame}>Start</button>
       <button onClick={this.props.stopGame}>Stop</button>
       <button onClick={this.props.clearGame}>Clear</button>
          <button onClick={this.props.random}>Random</button>
          <button onClick={this.props.slowSpeed}>Slow</button>
          <button onClick={this.props.fastSpeed}>Fast</button>
          

     </div>


    );
  }
}
export default Buttons;