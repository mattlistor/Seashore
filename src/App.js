import React from 'react';
import logo from './logo.svg';
import './App.css';
const API_KEY = "8e520974bcb3c5c57b2b1233edd5b9db"

class App extends React.Component  {
  state = {
    city: "",
    country: "",
  }

  componentDidMount = () => {
    const city = "sea bright"
    const country = "us"

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`)
    .then(res => res.json())
    .then((myJson) => {
      let sunrise = new Date(myJson.sys.sunrise * 1000)
      let sunset = new Date(myJson.sys.sunset * 1000)
      let date = new Date(myJson.dt * 1000)

      this.setState({ 
        city: myJson.name,
        date: date.toDateString(),
        sunrise: sunrise.toLocaleTimeString().toLowerCase(),
        sunset: sunset.toLocaleTimeString().toLowerCase(),
       })
    })
  }
  
  render(){
    return (
      <div className="App">
        <div className='Weather'>
          <h3>{this.state.city}</h3>
          <div>{this.state.date}</div><br></br>
          <div>Sunrise: <strong>{this.state.sunrise}</strong></div>
          <div>Sunset: <strong>{this.state.sunset}</strong></div><br></br>
        </div>
      </div>
    )
  }
}

export default App;
