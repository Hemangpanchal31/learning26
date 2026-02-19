import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'

export const ApiDemo2 = () => {

    const {register,handleSubmit,formState:{errors}} = useForm()
    console.log("errors" , errors);
    const SubmitHandler = async(data) => {
        alert("Form Submited!");
        console.log("data" , data);

        try{
            const response = await axios.post("https://node5.onrender.com/user/user/",data);
            console.log("axios object" ,response);
            console.log("Api data",response.data);
        }catch (err) {
            console.log("Api err" , err);
        }
    } 
    const ValidationSchema = {
        Name: {
            required:{
                value:true,
                message:"Name is Required*"
            }            
        },
        Email: {
            required:{
                value:true,
                message:"Please Enter Emial*"
            },
            pattern:{
                value:/^\S+@\S+\.\S+$/,
                message:"Invalid Email"
            }
        },
        Age:{
            required:{
                value:true,
                message:"Plaese Enter Your Age*"
            },
            min:{
                value:18,
                message:"Age should be Above 18"
            }
        },
        isActive:{
            required:{
                value:true,
                message:"Please Select One*"
            }
        },

        Password:{
            required:{
               value:true,
               message:"please Enter Password*"
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Api Demo 2</h1>
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <div>
                <label>Name:</label>
                <input type='text' placeholder='Enter Name' {...register("name",ValidationSchema.Name)}></input>
                {errors.name?.message}
            </div>
            <div>
                <label>Email :</label>
                <input type='email' placeholder='Enter Email' {...register("email" , ValidationSchema.Email)}></input>
                {errors.email?.message}
            </div>
            <div>
                <label>Password :</label>
                <input type='password' placeholder='Enter Password'{...register("password",ValidationSchema.Password)}></input>
                {errors.password?.message}
            </div>
            <div>
                <label>Age :</label>
                <input type='number' placeholder='Enter Your Age' {...register("age" ,ValidationSchema.Age)}></input>
                {errors.age?.message}
            </div>
            <div>
                <label>isActive :</label>
                True :<input type='radio' value={"true"} {...register("isActive",ValidationSchema.isActive)}></input>
                False :<input type='radio' value={"false"} {...register("isActive",ValidationSchema.isActive)}></input>
                {errors.isActive?.message}
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
