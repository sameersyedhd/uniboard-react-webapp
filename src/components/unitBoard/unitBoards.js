import React, { Component } from 'react';
import UnitBoard from './unitBoard'

class UnitBoards extends Component {
    render() { 
        return ( 
            <div className="jumbotron flex overflow-scroll p-2">
            {Array(4).fill(1).map((i,j)=><UnitBoard key={j} />)}
            </div>
         )
    }
}
 
export default UnitBoards;