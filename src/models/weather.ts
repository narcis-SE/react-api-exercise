export interface WeatherResponse{
    properties: Properties;
}
export interface Properties{
    periods: Period[];
}
export interface Period{
    name: string;
    isDayTime: boolean;
    temperature: number;
    temperatureUnit: string;
    icon: string;
    shortForecast: string;
    detailedForecast: string;
}  //How we define api, top to bottom