import axios from "axios";
import { List } from "../models/five-day";

export function fetchWeatherMap(): Promise<List[]>{
    const apiKey = process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY; //Secures API key

    return axios.get("https://api.openweathermap.org/data/2.5/forecast", {
        params: {
            q: "detroit",
            appId: apiKey
        }
    })
    .then(res=>res.data.list)

}



    