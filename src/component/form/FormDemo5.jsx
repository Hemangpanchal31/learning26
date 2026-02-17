import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {
    const {register,handleSubmit,formState:{errors}} =useForm()
    console.log("errors...",errors);
    const SubmitHandler = (data) => {
        alert("Form Submitted");
        console.log("formdata..." ,data);
    }

    const validationSchema = {
        Name:{
            required:{
            value:true,
            message:"name is required*"
        }
      },
      Contact:{
        required:{
            value:true,
            message:"Contact is Required*"
        },
        pattern:{
            value:/[6-9]{1}[0-9]{9}$/,
            message:"Inavalid contact*"
        }
      },
      PromoCode:{
        required:{
            value:true,
            message:"Promocode is Required*"
        },
        validate:(params) => {
            return params == "2026" || "Invalid Promocode"
        }
      },
      Hobbies:{
        required:{
            value:true,
            message:"Hobbies is Required*"
        },
        validate: (params) =>{
           return params?.length>=2 || "minimum 2 hobbies are required*"
        }
      }
    }
  return (
    <div style={{textAlign:"center"}}>
    <h1> Form Demo 5</h1>
    <form onSubmit={handleSubmit(SubmitHandler)} >
        <div>
            <label>Name:</label>
            <input type='text' {...register("name",validationSchema.Name)} ></input>
            {errors.name?.message}
        </div>
        <div>
            <label>Contact:</label>
            <input type='text' {...register("contact",validationSchema.Contact)}></input>
            {errors.contact?.message}
        </div>
        <div>
            <label>Promo Code:</label>
            <input type='text' {...register("promocode",validationSchema.PromoCode)}></input>
            {errors.promocode?.message}
        </div>
        <div>
            <label>
                Hobbies :
            </label>
            Cricket :<input type='checkbox' value={"cricket"} {...register("hobbies",validationSchema.Hobbies)}></input>
            Traveling :<input type='checkbox' value={"traveling"} {...register("hobbies",validationSchema.Hobbies)}></input>
            Scrolling :<input type='checkbox' value={"scrolling"} {...register("hobbies",validationSchema.Hobbies)}></input>
            {errors.hobbies?.message}
        </div>
        <div>
            <input type='submit'></input>
        </div>
    </form>
    </div>
  )
}
