import axios from "axios";
import { Child } from "../models/what";

export function fetchData(): Promise<Child[]>{
    return axios.get("https://www.reddit.com/r/whatisthisthing/.json")
    .then(res => res.data.data.children);
} //fetching data from the array