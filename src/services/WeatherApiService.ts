import axios from "axios";
import { Period } from "../models/weather";

export function fetchWeather(): Promise<Period[]>{

    
    return axios.get("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
    .then(res => res.data.properties.periods); //Returns periods specifically
}