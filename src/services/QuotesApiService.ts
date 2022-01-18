import axios from "axios"; //only needed in service file -> npm install axios
import { Quote } from "../models/quote";

export function fetchQuotes() : Promise<Quote[]> {
    return axios.get("https://grandcircusco.github.io/demo-apis/quotes.json")
    .then(res =>res.data); //Once we get the url, using axios, return result of axios.get to res.data to res


}