import React from 'react';
import WeatherCard from './WeatherCard.js';
import logo from './logo.svg';
import styles from './App.css';
import waves from './icons/waves4.svg';
import sun from './icons/sun.svg';




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
    this.setState({cityList: [...this.state.cityList, this.state.city]});
  }
  
  renderWeatherCards = () => {
    return this.state.cityList.map((city, i) => <WeatherCard key={i} city={city}/>)
  }
  
  render(){
    return (
      <div className='App'>
        <div className='SeaShore'>
          <span className='sea'>SEA</span>
          <span className='shore'>SHORE</span> 
        </div>

        <img className="Waves" src={waves}></img>
        {/* <img className="Sun" src={sun}></img> */}

        <div className='Main'>
          {/* <div className='Date'>
            {this.state.date}
          </div> */}

          <form onSubmit={this.handleSubmit}>
            <input type="text" 
            value={this.state.value} 
            onChange={this.handleChange} 
            placeholder="Enter City..." />
            <input type="submit" value="" />
          </form>

          <div className="WeatherCardContainer flex-container wrap">
            {this.renderWeatherCards()}
          </div>
        </div>

      </div>
    )
  }
}

export default App;

