import React from 'react';
import WeatherCard from './WeatherCard.js';
// import logo from './logo.svg';
// import styles from './App.css';
import waves from './icons/waves5.svg';
// import sun from './icons/sun.svg';

const API_KEY = "a6e9b836325e9e176bab11492e484b9f"

class App extends React.Component  {
  state = {
    city: "",
    date: new Date().toDateString(),
    cityList: ["Sea Bright", "Asbury Park", "Long Branch"]
  }

  handleChange = (event) => {
    this.setState({city: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},us&appid=${API_KEY}&units=imperial`)
    .then((res) => {
      if(res.status === 200) {
        this.setState({cityList: [...this.state.cityList, this.camelCase(this.state.city)]})
      }
    })    
  }
  
  renderWeatherCards = () => {
    return this.state.cityList.map((city, i) => <WeatherCard key={i} city={city}/>)
  }

  camelCase = (str) => { 
    return str.toLowerCase()
  } 
  
  render(){
    return (
      <div className='App'>
        <div className='Main'>
          <div className='FirstColumn'>
            
            <div className='SeaShore'>
              <span className='sea'>SEA</span>
              <span className='shore'>SHORE</span> 
            </div>
          
            <div className='Date'>
              {this.state.date}
            </div>

            <form onSubmit={this.handleSubmit}>
              <input type="text" 
              value={this.state.value} 
              onChange={this.handleChange} 
              placeholder="Enter City..." />
              {/* <input type="submit" value="Submit" /> */}
            </form>
          
          </div>

        {/* <img className="Waves" src={waves} alt={""}></img> */}
        {/* <img className="Sun" src={sun}></img> */}

        {/* <div className='Main'> */}


          <div className="WeatherCardContainer wrap">
            {this.renderWeatherCards()}
          </div>

        </div>
      </div>
    )
  }
}

export default App;

