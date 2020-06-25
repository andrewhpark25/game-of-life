import React, {Component} from 'react';
import './App.css';
import Grid from '../src/components/Grid'
import Buttons from '../src/components/Buttons'
import Rules from '../src/components/Rules'
import { Dropdown, DropdownButton, Button} from 'react-bootstrap';



function clonedArray(arr) {
  return JSON.parse(JSON.stringify(arr));
}

class App extends Component {


  
  constructor() {
    super();
    this.rows = 40;
    this.cols = 60;
    this.speed = 100;
  

    this.state = {
      generation: 0,
      speed: 0,
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }
  }

  


  selectCell = (row, col) => {
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
  
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.start, this.speed);
  }
  
  stopGame = () => {
    clearInterval(this.intervalId)
  }

  slowSpeed = () => {
    this.speed = 2020;
    this.startGame();
  }

  fastSpeed = () => {
    this.speed = 25;
    this.startGame();
  }
  clearGame = () => {
    var grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    this.setState({
      gridFull: grid,
      generation: 0,
      speed: 0
    });
  }

 
  changeGridSize = (size) => {
  switch (size) {
    case "1":
      this.cols = 20;
      this.rows = 10;
    
    break;
    case "2": 
      this.cols = 60;
      this.rows = 40;
    
    break;
    default: 
      this.cols = 80;
      this.rows = 100;
  }
  this.clearGame();
  }

handleSize = (evt )=> {
  this.changeGridSize(evt);
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
    generation: countGeneration,
    speed: this.speed
   
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
          selectCell={this.selectCell}
        />
        <h3>Generation: {this.state.generation} </h3>
        <h3>Speed: {this.state.speed}</h3>

        <Buttons 
           startGame={this.startGame}
           stopGame={this.stopGame}
           random={this.random}
           clearGame={this.clearGame}
           slowSpeed={this.slowSpeed}
           fastSpeed={this.fastSpeed}
         
           />
         
     <DropdownButton title="Grid Size" onSelect={this.handleSize}>
         <Dropdown.Item eventKey="1" className="small"> Small </Dropdown.Item>
         <Dropdown.Item eventKey="2" className="original"> Original </Dropdown.Item>
         <Dropdown.Item eventKey="3" className="big"> Big </Dropdown.Item>
       </DropdownButton>
     
     <Rules/>
    
       </div>
     
      
    );
  }


}

export default App;
