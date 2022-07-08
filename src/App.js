
import React from 'react';

import DrawGrid from './components/DrawGrid';
import './App.css'


class App extends React.Component {
  
  constructor() {
    super();
      this.state = {
      seat: [
        'Solt 1','Solt 2','Solt 3','Solt 4','Solt 5','Solt 6','Solt 7','Solt 8','Solt 9','Solt 10',
        'Solt 11','Solt 12','Solt 13','Solt 14','Solt 15','Solt 16','Solt 17','Solt 18','Solt 19','Solt 20',
        'Solt 21','Solt 22','Solt 23','Solt 24','Solt 25','Solt 26','Solt 27','Solt 28','Solt 29','Solt 30',
        'Solt 31','Solt 32','Solt 33','Solt 34','Solt 35','Solt 36','Solt 37','Solt 38','Solt 39','Solt 40',
        'Solt 41','Solt 42','Solt 43','Solt 44','Solt 45','Solt 46','Solt 47','Solt 48','Solt 49','Solt 50'
      ],
      seatAvailable: [
        'Solt 1','Solt 2','Solt 3','Solt 4','Solt 5','Solt 6','Solt 7','Solt 8','Solt 9','Solt 10',
        'Solt 11','Solt 12','Solt 13','Solt 14','Solt 15','Solt 16','Solt 17','Solt 18','Solt 19','Solt 20',
        'Solt 21','Solt 22','Solt 23','Solt 24','Solt 25','Solt 26','Solt 27','Solt 28','Solt 29','Solt 30',
        'Solt 31','Solt 32','Solt 33','Solt 34','Solt 35','Solt 36','Solt 37','Solt 38','Solt 39','Solt 40',
        'Solt 41','Solt 42','Solt 43','Solt 44','Solt 45','Solt 46','Solt 47','Solt 48','Solt 49','Solt 50' 
        
      ],
      seatReserved: []
    }
  }
  
  onClickData(seat) {
    if(this.state.seatReserved.indexOf(seat) > -1 ) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res !== seat)
      })
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter(res => res !== seat)
      })
    }
  }
  
  render() {
    return (
      <div className='App'>
        <h1>Vechile Parking System</h1>
        
        <DrawGrid 
          seat = { this.state.seat }
          available = { this.state.seatAvailable }
          reserved = { this.state.seatReserved }
          onClickData = { this.onClickData.bind(this) }
          />
      </div>
    )
  }
}


export default App

