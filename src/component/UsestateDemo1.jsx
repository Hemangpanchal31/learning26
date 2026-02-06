import React, { useState } from 'react'

export const UsestateDemo1 = () => {

    const[count , setcount] = useState(0);
    
    const increseCount = () => {
        setcount(count + 1);
        console.log("Count After Increse" , count);
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseState Demo 1</h1>
        <h1>Count = {count}</h1>
        <button onClick={increseCount}>+</button>
    </div>
  )
}
