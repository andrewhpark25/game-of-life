import React, {Component} from 'react';
import './App.css';
import Grid from '../src/components/Grid'
import Buttons from '../src/components/Buttons'

function clonedArray(arr) {
  return JSON.parse(JSON.stringify(arr));
}

class App extends Component {


  
  constructor() {
    super();
    this.rows = 40;
    this.cols = 60;
    this.speed = 50;

    this.state = {
      generation: 0,
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }
  }

  selectBox = (row, col) => {
    let gridCopy = clonedArray(this.state.gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      gridFull: gridCopy
    });
  }

  random = () => {
    let gridCopy = clonedArray(this.state.gridFull);
    for (let x = 0; x < this.rows; x++) {
      for (let y = 0; y < this.cols; y++) {
        if (Math.floor(Math.random() * 6) === 1) {
          gridCopy[x][y] = true;
  }
}
    }
    this.setState({
      gridFull: gridCopy
    });
  }

  startGame = () => {
   this.random();
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.start, this.speed);
  }
  
  stopGame = () => {
    clearInterval(this.intervalId)
  }

  clearGame = () => {
    var grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    this.setState({
      gridFull: grid,
      generation: 0
    });
  }
  start = () => {
    
    let g = this.state.gridFull;
    let g2 = clonedArray(this.state.gridFull);
    let countGeneration = this.state.generation;


    for (let x = 0; x < this.rows; x++) {
      for (let y = 0; y < this.cols; y++) {
        let count = 0;

   
        if(x>0) if(g[x-1][y]) count++;
        if(x>0 && y>0) if(g[x-1][y-1]) count++;
        if(x>0 && y<this.cols-1) if(g[x-1][y+1]) count++;
        if(x<this.cols - 1) if(g[x][y+1]) count++;
        if(y>0) if(g[x][y-1]) count++;
        if(x<this.rows-1) if(g[x+1][y]) count++;
        if(x<this.rows-1 && y>0) if(g[x+1][y-1]) count++;
        if(x<this.rows-1 && this.cols-1) if(g[x+1][y+1]) count++;

      
        if(g[x][y] && (count<2 || count>3)) g2[x][y]=false;
        if(!g[x][y] && count===3) g2[x][y]=true;
      }

  }
  countGeneration++

  this.setState({
    gridFull: g2,
    generation: countGeneration
  })
  }

 
  render() {
    return (
      <div className="App">
        <h1>Game of Life</h1>
      <Grid 
          rows={this.rows} 
          cols={this.cols} 
          gridFull={this.state.gridFull} 
          selectBox={this.selectBox}
        />
        <h3>Generation: {this.state.generation} </h3>

        <Buttons 
           startGame={this.startGame}
           stopGame={this.stopGame}
           random={this.random}
           clearGame={this.clearGame}
           />
      </div>
      
    );
  }


}

export default App;
