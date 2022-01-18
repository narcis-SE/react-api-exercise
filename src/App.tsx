import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from './components/Quotes';
import WeatherForecast from './components/WeatherForecast';
import RedditJson from './components/WhatIsThis';
import WeatherApi from './components/WeatherApi';

function App() {
  return (
    <div className="App">
      <WeatherApi />
      {/* <RedditJson />
      <WeatherForecast />
      <Quotes /> */}


    </div>
  );
}

export default App;
