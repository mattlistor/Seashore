import React from 'react';
import WeatherCard from './WeatherCard.js';
import logo from './logo.svg';
import styles from './App.css';

class App extends React.Component  {
  state = {
    city: "",
    country: "",
    date: new Date().toDateString(),
  }
  
  render(){
    return (

      <div className='App'>
        {/* <div className="overlay"></div> */}
        <div className='SeaShore'><span className='sea'>S E A</span> <span className='shore'>S H O R E</span> </div>
        {/* <br></br><br></br><br></br><br></br><br></br><br></br> */}
        <div className='Main'>
          {/* <div className='Date'>
            {this.state.date}
          </div> */}

          <div className="WeatherCardContainer flex-container wrap">
            <WeatherCard city={"Sea Bright"}/>
            {/* <WeatherCard city={"Long Branch"}/>
            <WeatherCard city={"Cape May"}/>
            <WeatherCard city={"Tampa"}/>
            <WeatherCard city={"Asbury Park"}/> */}
          </div>
        </div>

      </div>

    )
  }
}

export default App;

