import React from 'react'
import { useForm } from 'react-hook-form'

export const FormValidation = () => {

    const {register , handleSubmit , formState: {errors},watch} =   useForm()

    const password = watch("password" , "")
    console.log("watching...",password);

    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasDigit = /[0-9]/.test(password)
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password)
    const hasMinLength = password.length>=8
    
    const getColor = (condition) => ({
        color: condition ? "green" : "red"
    })

    const validationSchema = {
        passwordHandler : {
            required : {
                value : true,
                message : "password is required*"
            }
        },
        confirmPasswordValidator : {
            required : {
                value : true ,
                message : "Comfirm password is not match*"
            },
            validate : (params)=> {
                return params == password || "password is not matched*"
            }
        }
    }

    const submitHandler = (data) => {
     console.log(data);
    }

  return (
    <div style={{textAlign: 'center'}}>
        <h1>Form Validation </h1>
        
        <form onSubmit={handleSubmit(submitHandler)}>

            <label><b>PassWord : </b></label>
            <input type="password" placeholder='Enter your password' {...register("password",validationSchema.passwordHandler)} />
            {errors.password?.message}

            <br />
            <div>
                <p style={getColor(hasUpperCase)}>1 upperCase Character</p>
                <p style={getColor(hasLowerCase)}>1 LowerCase Character</p>
                <p style={getColor(hasDigit)}>1 Digit</p>
                <p style={getColor(hasSpecialChar)}>1 Special Character</p>
                <p style={getColor(hasMinLength)}>Minimum 8 character</p>
            </div>

            <label><b>Confirm Password : </b></label>
            <input type="password" placeholder='Enter Confirm Password' {...register("confirmPassword",validationSchema.confirmPasswordValidator)} />
            {errors.confirmPassword?.message}
            <br />
            <input type="submit" />
        </form>

    </div>
  )
}
