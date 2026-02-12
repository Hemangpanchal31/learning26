import React from 'react'
import { useForm } from 'react-hook-form'

export const FormValidation1 = () => {
    const {register,handleSubmit ,formState:{errors}}= useForm()
       
    console.log("Errors...." ,errors);
    const SubmitHandler = (data) => {
        alert("Form Submited");
        console.log("Form Data",data);
    }

    const ValidationSchema = {
        AgeValidater : {
            required :{
                value : true , 
                message : "Age is required"
            },
            min:{
                value:18 ,
                message :"min age Should be 18*"
            },
            max:{
               value : 60 ,
               message :" Max Age shuold be 60*"
            }
        },
        AddressValidator :{
              required :{
                value : true ,
                message :"Address is Required*"
              },
              minLength:{
                value : 10 ,
                message :"Minimum char shuold be 10*"
              },
              maxLength:{
                value : 30,
                message :"Maximun char should be 30*"
              }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h2> Form Validation 1</h2>
        <form onSubmit={handleSubmit(SubmitHandler)}>
           <div>
            <label>Name :</label> <input type='text' placeholder='Enter Name' {...register("name" ,{required:{value:true , message:"Name is Required*"}})}></input>
           {errors.name && errors.name.message}
           </div>
           <br/>
           <div>
            <label>Age :</label>
            <input type='number' placeholder='Enter Your Age' {...register("age" ,ValidationSchema.AgeValidater)}></input>
            {errors.age?.message}
           </div>
           <br/>
           <div>
            <label>Address : </label>
            <textarea rows={2} cols={20} placeholder='Enter Your Address' {...register("address" ,ValidationSchema.AddressValidator)}></textarea>
            {errors.address?.message}   
           </div>
           <br/>
           <input type='submit'></input>
        </form>
    </div>
    
  )
}
