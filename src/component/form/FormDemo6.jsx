import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo6 = () => {

    const {register,handleSubmit,formState:{errors},watch} = useForm({mode:"onChange"});
    console.log("errors...",errors);

    const Password = watch("password");
    console.log("watching....",Password);

    const SubmitHandler = (data) => {
        alert("Form Submitted");
        console.log(data);
    }
    const validationSchema = {
        Password:{
            required:{
                value:true,
                message:"Password is Required*"
            }
        },
        ConfirmPassword:{
            required:{
                value:true,
                message:"confirmPassword is reuired*"
            },
            validate: (params) => {
                return params == Password || "confirm Password not match*"
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1> Form Demo 6</h1>
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <div>
                <lebel>
                    Password:
                </lebel>
                <input type='password' {...register("password" ,validationSchema.Password)}></input>
                {errors.password?.message}
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type='password' {...register("confirmpassword" ,validationSchema.ConfirmPassword)}></input>
                {errors.confirmpassword?.message}
            </div>
              <br/>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
