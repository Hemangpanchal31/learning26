import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo1 = () => {

    const [message , setmessage] = useState("");
    const[data , setdata] = useState([]);
    const getData = async() => {
         
        const response = await axios.get("https://node5.onrender.com/user/user/");
        console.log(response);
        console.log(response.data);
        console.log(response.data.data);
        setmessage(response.data.message);
        setdata(response.data.data);
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1> Api Demo 1</h1>
        <button onClick={() =>{getData()}}>GET</button>
        <h3>Message : {message}</h3>
        {
            data.map((d) => {
                return (
                    <li>{d.name}</li>
                )  
            })
        }
    </div>
  )
}
