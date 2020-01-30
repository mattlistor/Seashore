import React from 'react';
import './App.css';

const API_KEY = "8e520974bcb3c5c57b2b1233edd5b9db"

class WeatherCard extends React.Component  {

  state = {
    sunrise: "",
    sunset: "",
  }

  componentDidMount = () => {
    const city = this.props.city
    const country = "us"

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`)
    .then(res => res.json())
    .then((myJson) => {
        let sunrise = new Date(myJson.sys.sunrise * 1000)
        let sunset = new Date(myJson.sys.sunset * 1000)

        this.setState({ 
            sunrise: sunrise.toLocaleTimeString().toLowerCase(),
            sunset: sunset.toLocaleTimeString().toLowerCase(),
            weather: myJson.weather[0].main
        })
    })
  }
  
  render(){
    return (
      <div className="WeatherCard">
          {this.state.sunrise === "" ? 
            <>
                <h3>{this.props.city}</h3>
                {/* Loading graphic */}
                <img src="https://i.imgur.com/ptdvwYH.gif" width="100px"></img>
            </>
            :
            <>
                <h3 className="City">{this.props.city}</h3>

                <div className="Sky">{this.state.weather}</div>

                <div className='Sunrise'>
                    <img className="Sun" src="https://i.imgur.com/lKsvVdJ.png"></img>
                    <div>{this.state.sunrise}</div>
                </div>

                <div className='Sunrise'>
                    <img className="Sun" src="https://i.imgur.com/lKsvVdJ.png"></img>
                    <div>{this.state.sunset}</div>
                </div>
            </>
          }
      </div>
    )
  }
}

export default WeatherCard;
