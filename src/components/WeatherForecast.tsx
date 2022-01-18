import React, {useEffect, useState} from "react";
import { Period } from "../models/weather";
import { fetchWeather } from "../services/WeatherApiService";

function WeatherForecast(){
    const[periods, setPeriods]= useState<Period[]>([]);

    //hook
    useEffect(()=> {
        fetchWeather().then(
            periods => setPeriods(periods)
        );
    }, [])


    //component markup

    return(
        <div>
            <h2>Weather Forecast</h2>
            <ul>
                {
                    periods.map((period,i)=>
                        <li key={i}>
                        <h3>{period.name}</h3>
                        <p>{period.temperature}°F</p>
                        <img src={period.icon} alt="" />
                        <p> {period.detailedForecast}</p>
                        </li>
                )}

            </ul>
        </div>
    )

    
}


export default WeatherForecast;