import React, {Component} from 'react';
import Box from './Box'
import './Grid.css';


class Grid extends Component {
    
    render() {

        const width = this.props.cols * 20;
        var rowsArr = [];
    
        var boxClass = "";
        
        for (var x = 0; x < this.props.rows; x++) {
          for (var y = 0; y < this.props.cols; y++) {
    
            let boxId = x + "_" + y;
    
            boxClass = this.props.gridFull[x][y] ? "box on" : "box off";
            rowsArr.push(
              <Box 
                boxClass={boxClass}
                key={boxId}
                boxId={boxId}
                row={x}
                col={y}
              />
            )
          }
        };
    
        return (
          <div className="grid" style={{width: width}}>
            {rowsArr}
          </div>
        );
      }
}





export default Grid
