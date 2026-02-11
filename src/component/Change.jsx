import React, { useState } from 'react'

export const Change = () => {
    
     const [name , setName] = useState("")
     const [age , setAge] = useState("")
     const [email , setEmail] = useState("")
     const [pass , setPass] = useState("")
     const [branch , setBranch] = useState("")
     const [city , setCity] = useState("")
     const [add , setAdd] = useState("")
     const [state, setState] = useState("")
     const [country , setCountry] = useState("")
     const [mno , setMno] = useState("")
     
     const nameHandler = (event) => {
        setName(event.target.value);
     }
     const ageHandler = (event) => {
        setAge(event.target.value);
     }
     const emailHandler = (event) => {
        setEmail(event.target.value);
     }
     const passHandler = (event) => {
        setPass(event.target.value);
     }
     const branchHandler = (event) => {
        setBranch(event.target.value);
     }
     const cityHandler = (event) => {
        setCity(event.target.value);
     }
     const addHandler = (event) => {
        setAdd(event.target.value);
     }
     const stateHandler = (event) => {
        setState(event.target.value);
     }
     const countryHandler = (event) => {
        setCountry(event.target.value);
     }
     const mnoHandler = (event) => {
        setMno(event.target.value);
     }

  return (
    <div style={{textAlign:"center"}}>
        <h1> On Change Event In React</h1>
        <label>Name : <input type='text' onChange={nameHandler}></input>{name}</label> <br/>
        <label>Age : <input type='text' onChange={ageHandler}></input>{age} </label> <br/>
        <label>Email : <input type='text' onChange={emailHandler}></input>{email} </label> <br/>
        <label>Password : <input type='text' onChange={passHandler}></input>{pass} </label> <br/>
        <label>Branch : <input type='text' onChange={branchHandler}></input> {branch}</label> <br/>
        <label>city : <input type='text' onChange={cityHandler}></input>{city} </label> <br/>
        <label>Address : <input type='text' onChange={addHandler}></input>{add} </label> <br/>
        <label>State : <input type='text' onChange={stateHandler}></input>{state} </label> <br/>
        <label>country : <input type='text' onChange={countryHandler}></input>{country} </label> <br/>
        <label>Mobile No : <input type='text' onChange={mnoHandler}></input>{mno} </label> <br/>   
    </div>
  )
}
