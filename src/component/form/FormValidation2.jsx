import React from 'react'
import { useForm } from 'react-hook-form'

export const FormValidation2 = () => {

    const {register,handleSubmit,formState:{errors}} = useForm();

    console.log("Errors....",errors);

    const SubmitHandler  = (data) =>{
        alert("Parking Slot Is Booked");
        console.log("Parking Slot Details",data);
    }

    const ValidationSchema ={
        vehicleNumber :{
            required:{
                value: true,
                message:"Vehicle Number Is Required*"
            },
            pattern:{
                value: /^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/,
                message:"Invalid Vehicle Number Format*"
            }
        },
        vehicleType:{
                required:{
                    value:true,
                    message:"Vehicle Type Is Required*"
                }
            },
        parkingDate:{
            required:{
                value:true,
                message:"Date is Required*"
            },
            validate: (value) =>
            value >= new Date().toISOString().split("T")[0] ||
            "Date cannot be in the past*"
        },
        EntryTime:{
            required:{
                value:true,
                message:"Entry Time Is Required*"
            }
        },
        Duration:{
            required:{
                value:true,
                message:"Duration Required*"
            },
            min:{
                value:1,
                message:"Minimum 1 Hour*"
            },
            max:{
               value:24,
               message:"maximum 24 Hours*"
            }
        }
        
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1> Form Validation 2</h1>
        <form onSubmit={handleSubmit(SubmitHandler)}>
             <h2>Parking Slot Booking</h2>

             {/* vehicle Number */}
             <div>
                <label>
                    <b>Vehicle Number :</b>
                </label>
                <input placeholder='Enter Vehicle Number' {...register("Vnum",ValidationSchema.vehicleNumber)}></input>
                <p>Vehicle Number Format: (GJ01AB1234)</p>
                {errors.Vnum?.message}
             </div><br/>
             {/* Vehicle Type */}
             <div>
               <label>
                <b> Vehicle Type :</b>
               </label>
               <select {...register("type",ValidationSchema.vehicleType)}>
                   <option value={""}>Select Vehicle type</option>
                   <option value={"car"}>Car</option>
                   <option value={"bike"}>Bike</option>
               </select>
               {errors.type?.message}
             </div><br/>

             {/* parking Date */}
             <div>
                <label>
                <b>Date :</b>
                </label>
                 <input type='date' {...register("date" ,ValidationSchema.parkingDate)}></input>
                 {errors.date?.message} 
             </div><br/>

             {/* entry time */}
              <div>
                <label>
                    <b>Entry Time :</b>
                </label>
                <input type='time' {...register("time",ValidationSchema.EntryTime)}></input> 
                {errors.time?.message} 
              </div>
               
               {/* Duration */}
                <div>
                 <label>
                    <b>Duration :</b>
                 </label>
                 <input type='number' placeholder='Enter duration(hours)' {...register("duration",ValidationSchema.Duration)}></input>
                 {errors.duration?.message}
                </div>
             <input type='submit'></input>
        </form>
    </div>
  )
}
