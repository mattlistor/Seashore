import React from 'react';
import WeatherCard from './WeatherCard.js';
import logo from './logo.svg';
import './App.css';

class App extends React.Component  {
  state = {
    city: "",
    country: "",
    date: new Date().toDateString(),
  }
  
  render(){
    return (
      <>
      {/* <video autoPlay muted loop className="welcomeVideo" src="https://media.istockphoto.com/videos/sunny-sparkles-on-surface-of-water-video-id1132290833" type="video/mp4" /> */}

      <div className='App'>
        <div className="overlay"></div>
        <div className='SeaShore'><span className='sea'>S E A</span> <span className='shore'>S H O R E</span> </div>

        <div className='Main'>
          <div className='Date'>
            {this.state.date}
          </div>

          <div className="WeatherCardContainer flex-container wrap">
            <WeatherCard city={"Sea Bright"}/>
            <WeatherCard city={"Long Branch"}/>
            <WeatherCard city={"Cape May"}/>
            <WeatherCard city={"Tampa"}/>
            <WeatherCard city={"Asbury Park"}/>
          </div>
        </div>

      </div>
      </>
    )
  }
}

export default App;
