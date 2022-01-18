import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from './components/Quotes';
import WeatherForecast from './components/WeatherForecast';
import RedditJson from './components/WhatIsThis';

function App() {
  return (
    <div className="App">
      <RedditJson />
      <WeatherForecast />
      <Quotes />


    </div>
  );
}

export default App;
