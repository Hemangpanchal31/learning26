import React, { useState } from 'react'

export const UsestateDemo2 = () => {

    const [loading , setLoading] = useState(true);
    
    const stopLoader = () =>{
        setLoading(false);
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseSteteDemo2</h1> 
        {
            loading == true && <h1>Loading</h1>
        }
        <button onClick={stopLoader} >Stop</button>
    </div>
  )
}
