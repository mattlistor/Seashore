import React from 'react';
import './App.css';
import icon1 from './icons/icon-01.png';
import icon2 from './icons/icon-02.png';
import icon3 from './icons/icon-03.png';
import icon4 from './icons/icon-04.png';
// import icon5 from './icons/icon-05.png';
// import icon6 from './icons/icon-06.png';
// import icon7 from './icons/icon-07.png';
// import icon8 from './icons/icon-08.png';

// const API_KEY = "8e520974bcb3c5c57b2b1233edd5b9db"
const API_KEY = "a6e9b836325e9e176bab11492e484b9f"

class WeatherCard extends React.Component  {

  state = {
    sunrise: "",
    sunset: "",
  }

  componentDidMount = () => {
    const city = this.props.city
    const country = "us"

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`)
    .then(res => res.json())
    .then((myJson) => {
        let sunrise = new Date(myJson.sys.sunrise * 1000)
        let sunset = new Date(myJson.sys.sunset * 1000)

        this.setState({ 
            sunrise: sunrise.toLocaleTimeString().toLowerCase(),
            sunset: sunset.toLocaleTimeString().toLowerCase(),
            weather: myJson.weather[0].main,
            // weather: myJson.coord.lon + ", " + myJson.coord.lat,
            wind: myJson.wind.speed + " mph",
            temp: Math.trunc(myJson.main.temp) + "° F"
        })
    })
    console.log("API call :: fetch")
  }
  
  render(){

    // https://www.engine.xyz/

    return (
      <div className="WeatherCard">
          {this.state.sunrise === "" ? 

            <>
                <h3 className="City">{this.props.city.toString()}</h3>

                {/* <div className="Sky">{this.state.weather}</div> */}

                {/* <div className="WeatherCardRow">
                    <div className='Sunrise Tile'>
                        <img className="Icon" src={"https://i.imgur.com/ptdvwYH.gif"}></img>
                        <div>Loading...</div>
                    </div>

                    <div className='Sunset Tile'>
                        <img className="Icon" src={"https://i.imgur.com/ptdvwYH.gif"}></img>
                        <div>Loading...</div>
                    </div>
                </div>

                <div className="WeatherCardRow">
                    <div className='Wind Tile'>
                        <img className="Icon" src={"https://i.imgur.com/ptdvwYH.gif"}></img>
                        <div>Loading...</div>
                    </div>

                    <div className='Temp Tile'>
                        <img className="Icon" src={"https://i.imgur.com/ptdvwYH.gif"}></img>
                        <div>Loading...</div>
                    </div>
                </div> */}

            </>
            // <>
            //     <h3>{this.props.city}</h3>
            //     {/* Loading graphic */}
            //     <img src="https://i.imgur.com/ptdvwYH.gif" width="100px"></img>
            // </>
            :
            <>
                <h3 className="City">{this.props.city.toString()}</h3>

                {/* <div className="Sky">{this.state.weather}</div> */}
                
                <div className="WeatherCardRow">
                    <div className='Sunrise Tile'>
                        <img className="Icon" src={icon1} alt={""}></img>
                        <div>{this.state.sunrise}</div>
                    </div>

                    <div className='Sunset Tile'>
                        <img className="Icon" src={icon2} alt={""}></img>
                        <div>{this.state.sunset}</div>
                    </div>
                </div>

                <div className="WeatherCardRow">
                    <div className='Wind Tile'>
                        <img className="Icon" src={icon3} alt={""}></img>
                        <div>{this.state.wind}</div>
                    </div>

                    <div className='Temp Tile'>
                        <img className="Icon" src={icon4} alt={""}></img>
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
