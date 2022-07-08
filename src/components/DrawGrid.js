import React from "react";

class DrawGrid extends React.Component {
    render() {
      return (
         <div className="container">
          
          <h2>Parking Slots</h2>
          <table className="grid" >
            <tbody >
                <tr>
                
                  { this.props.seat.map( row =>
                    <td className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                    key={row}>{row} 
                      <button
                        onClick = {e => this.onClickSeat(row)}>
                      Click</button>
                    </td>) 
                  }
                  
                </tr>                
            </tbody>
          </table>
         </div>
      )
    }

    onClickSeat(seat) {
      this.props.onClickData(seat);
    }
}

export default DrawGrid;