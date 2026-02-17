import React from 'react'
import { useForm } from 'react-hook-form';

export const FormValidation4 = () => {

    const {register,handleSubmit,formState:{errors}} = useForm({mode:"onChange"});
    console.log("errors...",errors);

    const SubmitHandler =(data) =>{
        alert("Form Submitted!");
        console.log(data);
    }

    const validationSchema = {
       Name:{
        required:{
            value:true,
            message:"Student name is required*"
        },
        minLength:{
            value:5,
            message:"Minimum 5 char is Required*"
        },
        maxLength:{
            value:20,
            message:"miximum char Should be 20"
        }
      },
      Age:{
        required:{
            value:true,
            message:"Age is Required*"
        },
        min:{
            value:18,
            message:"Minimum age Should be 18*"
        },
        max:{
            value:30,
            message:"maximum age shuold be 30*"
        }
      },
      Email:{
        required:{
            value:true,
            message:"Email is required*"
        },
        pattern:{
            value:/^\S+@\S+\.\S+$/,
            message:"Invalid Email!"
        }
      },
      
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1> Form Validation task </h1>
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <h2> Student Registration Form</h2>
            <div>
                <label>
                    Student Name:
                </label>
                <input type="text" placeholder='Enter Student Name' {...register("name",validationSchema.Name)}></input>
                {errors.name?.message}
            </div>
            <div>
              <label>
                Age:
              </label>
              <input type='number' placeholder='Enter Age' {...register("age",validationSchema.Age)}></input>
              {errors.age?.message}
            </div>
            <div>
                <label>Email:</label>
                <input type='email' placeholder='Enter email' {...register("email",validationSchema.Email)}></input>
                {errors.email?.message}
            </div>
            <div>
                
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
