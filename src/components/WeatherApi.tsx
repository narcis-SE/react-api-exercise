import React, {useEffect, useState} from "react";
import { List } from "../models/five-day";
import { fetchData } from "../services/WhatApiService";

function WeatherApi(){


    const[weatherList, setWeatherList] = useState<List[]>([]);


    useEffect(()=>{
        fetchData().then(
            weatherList=> console.log(weatherList)
        );
    }, [])

    return(
        <div></div>
    )

}

export default WeatherApi;