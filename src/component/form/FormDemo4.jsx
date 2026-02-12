import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {

    const {register,handleSubmit} = useForm()

    const Country = {
        India : ["Gujarat","Maharastra","Rajasthan","uttar pradesh","tamil Nadu"],
        Usa : ["California","Texas","Florida","New York","illinois"],
        Australia : ["New south wales","Victoria","Queensland","Western Australia","South Australia"],
        canada : ["Ontario","Quebec","British Columbia","Alberta","Manitoba"],
        Germany : ["Bavaria","Berlin","Hesse","Saxony","North Rhine-Westphalia"],
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1> Form Demo 4</h1>
        <form onSubmit={handleSubmit}>
          <h1> Profile Details</h1>
          <div>
            <label>Name :</label> <input type='text' {...register("name")}></input>
          </div>
          <div>
            <label>Age :</label> <input type='number' {...register("age")}></input>
          </div>
          <div>
            <label>Email :</label> <input type='text' {...register("email")}></input>
          </div>
          <div>
            <label>Country :</label> <select  {...register("select")}>
                  <option >Select Country</option>
                  <option value={"India"}>India</option>
                  <option value={"Usa"}>Usa</option>
                  <option value={"Australia"}>Australia</option>
                  <option value={"canada"}>canada</option>
                  <option value={"Germany"}>Germany</option>
                </select> 
          </div>
        </form>
    </div>
  )
}
