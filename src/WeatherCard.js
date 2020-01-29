import React from 'react';
import './App.css';

class WeatherCard extends React.Component  {
  
  render(){
    return (
      <div className="WeatherCard">
          {this.props.city === "" ? 
            <>
                <h3>{this.props.city}</h3>
                {/* Loading graphic */}
                <img src="https://i.imgur.com/ptdvwYH.gif" width="100px"></img>
            </>
            :
            <>
                <h3>{this.props.city}</h3>
                <div>Sunrise: <strong>{this.props.sunrise}</strong></div>
                <div>Sunset: <strong>{this.props.sunset}</strong></div>
            </>
          }
      </div>
    )
  }
}

export default WeatherCard;
