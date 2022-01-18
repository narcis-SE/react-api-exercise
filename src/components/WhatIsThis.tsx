import React, {useEffect, useState} from "react";
import {Child } from "../models/what";
import { fetchData } from "../services/WhatApiService";

function RedditJson(){
    
    const[final, setFinal]= useState<Child[]>([]);

    useEffect(()=>{
        fetchData().then(
            final => setFinal(final)
        );
    }, [])




    return(
        <div>
            <h1>Reddit stufff</h1>
            <ul>
                {
                    final.map((final,i)=>
                    <li key={i}>
                        <h3>{final.data.title}</h3>
                        <img src ={final.data.thumbnail} alt=""/>
                        <a href={"http://www.reddit.com" + final.data.permalink}> A link </a>
                    </li>
                    
                )}
            </ul>
        </div>
    )
}

export default RedditJson