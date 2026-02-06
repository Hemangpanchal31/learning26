import React from 'react'

export const FunctionDemo1 = () => {

   const test = () => {
    alert("Test Function Called.....")
   }

   const test2 = (x) =>{
    alert("Value of x" + x)
   }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Function Demo 1</h1>
        <button onClick={test} >Click</button>
        <button onClick={()=>{test2(100)}}>Click2</button>
    </div>
  )
}
