export interface WeatherMapResponse{
    name: string;
    list: List[]
}
export interface List{
    main:{
        temp: number;
        humidity: number;

    }
    weather:[ {
        main: string;
        description: string;
    }
    ]
}