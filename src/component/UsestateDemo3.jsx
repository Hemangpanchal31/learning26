import React, { useState } from 'react'

export const UsestateDemo3 = () => {

    const[users,setusers] = useState(["parth","rutik"]);

    const addUser = () => {
        setusers([...users , "abc"]);
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseSteteDemo3</h1>
        {
            users.map((u) => {
                 return <li>{u}</li>
            })
        }
        <button onClick={addUser} >Push</button>
    </div>
  )
}
