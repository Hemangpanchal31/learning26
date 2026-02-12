import React from 'react'
import { useForm } from 'react-hook-form'

export const FormValidation3 = () => {

    const {register,handleSubmit,formState:{errors}} = useForm()
    console.log("Errors...",errors);
    const SubmitHandler = (data) =>{
        alert("Appoinment Booked Successfully");
        console.log("Appoinment Data",data);
    }
    const validationSchema ={
        patientName:{
            required:{
                value:true,
                message:"Petient Name Required*"
            },
            minLength:{
                value:3,
                message:"Minimum 3 Char required*"
            }
        },
        Email:{
            required:{
                value:true,
                message:"Email is Required*"
            },
            pattern:{
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email format*"
            }
        },
        Department:{
            required:{
                value:true,
                message:"Please select Department*"
            }
        },
        Date:{
            required:{
                value:true,
                message:"Date is Required*"
            },
            validate: (value) =>
            value >= new Date().toISOString().split("T")[0] ||
            "Date cannot be in the past"
        },
        Time:{
            required:{
                value:true,
                message:"select Time Slot"
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Form Validation 3</h1>
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <h2> Hospital Appointment Form</h2>
            {/* patient name */}
            <div>
                <label>Patient Name :</label>
                <input type='text' placeholder='Enter Patient name' {...register("name",validationSchema.patientName)}></input>
                {errors.name?.message}
            </div><br/>
            {/* Email */}
            <div>
                <label>Email :</label>
                <input type='email' placeholder='Enter email' {...register("email",validationSchema.Email)}></input>
                {errors.email?.message}
            </div><br/>
            {/* Department */}
            <div>
                <label>Department :</label>
                <select {...register("department",validationSchema.Department)}>
                    <option value={""}>Select Department</option>
                    <option value={"cardiology"}>Cardiology</option>
                    <option value={"orthopedic"}>Orthopedic</option>
                    <option value={"dental"}>Dental</option>
                    <option value={"general"}>General</option>
                </select>
                {errors.department?.message}
            </div>
            {/* Appointment Date */}
            <div>
                <label>
                    Appointment Date :
                </label>
                <input type='date' {...register("date",validationSchema.Date)}></input>
                {errors.date?.message}
            </div>
             {/* Time Slot */}
             <div>
                <lebel>
                    Time Slot :
                </lebel>
                <select {...register("time",validationSchema.Time)}>
                    <option value="">select time slot</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                </select>
                {errors.time?.message}
             </div>
            <input type='submit'></input>
        </form>
    </div>
  )
}
