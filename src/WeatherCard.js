import React from 'react';
import './App.css';
import icon1 from './icons/icon-01.png';
import icon2 from './icons/icon-02.png';
import icon3 from './icons/icon-03.png';
import icon4 from './icons/icon-04.png';

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
            weather: myJson.weather[0].description,
            // weather: myJson.coord.lon + ", " + myJson.coord.lat,
            wind: myJson.wind.speed + " mph",
            temp: myJson.main.temp + "° F"
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
                
                <div className="WeatherCardRow">
                    <div className='Sunrise'>
                        <img className="Icon" src={icon1}></img>
                        <div>{this.state.sunrise}</div>
                    </div>

                    <div className='Sunset'>
                        <img className="Icon" src={icon2}></img>
                        <div>{this.state.sunset}</div>
                    </div>
{/* 
                    <div className='Wind'>
                        <img className="Icon" src={icon3}></img>
                        <div>{this.state.wind}</div>
                    </div>

                    <div className='Temp'>
                        <img className="Icon" src={icon4}></img>
                        <div>{this.state.temp}</div>
                    </div> */}
                </div>

                <div className="WeatherCardRow">
                    <div className='Wind'>
                        <img className="Icon" src={icon3}></img>
                        <div>{this.state.wind}</div>
                    </div>

                    <div className='Temp'>
                        <img className="Icon" src={icon4}></img>
                        <div>{this.state.temp}</div>
                    </div>

                    <div className='Temp'>
                        <img className="Icon" src={icon4}></img>
                        <div>{this.state.temp}</div>
                    </div>
                </div>
                
            </>
          }
      </div>
    )
  }
}

export default WeatherCard;
