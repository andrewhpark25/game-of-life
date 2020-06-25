import React, {Component} from 'react';
import Cell from './Cell'
import './Grid.css';


class Grid extends Component {
    
    render() {

        const width = (this.props.cols * 21);
        var rowsArr = [];
    
        var cellClass = "";
        
        for (var x = 0; x < this.props.rows; x++) {
          for (var y = 0; y < this.props.cols; y++) {
    
            let cellId = x + "_" + y;
    
            cellClass = this.props.gridFull[x][y] ? "cell alive" : "cell dead";
            rowsArr.push(
              <Cell 
                cellClass={cellClass}
                key={cellId}
                cellId={cellId}
                row={x}
                col={y}
                selectCell={this.props.selectCell}
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
