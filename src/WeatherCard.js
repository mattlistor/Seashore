import React from 'react';
import './App.css';

class WeatherCard extends React.Component  {
  
  render(){
    return (
      <div className="App">
        <div className='row'>
          <div className="col-6">
          {this.props.city === "" ? 
            // Loading graphic
            <img src="https://i.imgur.com/ptdvwYH.gif" width="100px"></img>
            :
            <>
            <h3>{this.props.city}</h3>
            <div>{this.props.date}</div><br></br>
            <div>Sunrise: <strong>{this.props.sunrise}</strong></div>
            <div>Sunset: <strong>{this.props.sunset}</strong></div><br></br>
            </>
          }
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherCard;
