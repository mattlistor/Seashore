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
    let city = "Sea Bright"
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Freehold,us&appid=8e520974bcb3c5c57b2b1233edd5b9db&units=imperial`)
    .then(res => res.json())
    .then((myJson) => {
      let sunrise = new Date(myJson.sys.sunrise * 1000)
      let sunset = new Date(myJson.sys.sunset * 1000)
      let date = new Date(myJson.dt * 1000)

      this.setState({ 
        city: myJson.name,
        date: date.toDateString(),
        sunrise: sunrise.toLocaleTimeString(),
        sunset: sunset.toLocaleTimeString(),
        weather: myJson.weather[0].main,
       })
    })
  }
  
  render(){
    return (
      <div className="App">
        <h3>{this.state.city}</h3>
        <div>{this.state.date}</div><br></br>
        <div>Sunrise: <strong>{this.state.sunrise}</strong></div>
        <div>Sunset: <strong>{this.state.sunset}</strong></div><br></br>
        <div>Sky: {this.state.weather}</div>
      </div>
    )
  }
}

export default App;
