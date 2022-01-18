export interface WhatIsThisResponse{
    data: Data;
}
export interface Data{
    children: Child[]; //big take away here
    //check to see if stored in array
}
export interface Child{
    data: {
        title: string;
        thumbnail: string;
        permalink: string;
    }

    //accesses the data of array and 
    //then access the objects in the data
}

