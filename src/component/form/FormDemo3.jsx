import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {

    const {register,handleSubmit} = useForm()
    const [formData, setformData] = useState({})
    const [isSubmitted, setisSubmitted] = useState(false)
    const SubmitHandler = (data) => {
        console.log(data);
        setformData(data);
        setisSubmitted(true);
    } 

  return (
    <div style={{textAlign:"center"}}>
        <h1>Form Demo 3</h1>
        <form onSubmit={handleSubmit(SubmitHandler)} >
            <h1> Login Form </h1>
            <div>
                <lable>UserName :</lable> <input type='text' {...register("username")}></input>
            </div>
            <br/>
            <div>
                <lable>Password :</lable> <input type='password' {...register("password")}></input>
            </div><br/>
            <div>
                <lable>Email :</lable> <input type='text' {...register("email")}></input>
            </div><br/>
            <div>
                <lable>Mobile NO :</lable> <input type='text' {...register("mobileno")}></input>
            </div><br/>
            <input type="submit"></input>
        </form>
        {
            isSubmitted == true && <div>
                <h4>OUTPUT</h4>
                <h5>UserName : {formData.username}</h5>
                <h5>Password : {formData.password}</h5>
                <h5>Email : {formData.email}</h5>
                <h5>Mobile NO: {formData.mobileno}</h5>
                </div>
         }
    </div>
  )
}
