import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {

    const { register,handleSubmit } = useForm();
    const [formData, setformData] = useState({});
    const [isSubmitted, setisSubmitted] = useState(false);

    
    const SubmitHandler = (data) =>{
        console.log(data);
        setformData(data);
        setisSubmitted(true);
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1> Form demo 2</h1>
        <form onSubmit={handleSubmit(SubmitHandler)} >
            <h2>College Student Data</h2>
            <div>
                <lable>FirstName :</lable> <input type="text" {...register("firstname")} ></input>
            </div>  
            <br/>
            <div>
                <lable>middleName :</lable><input type="text" {...register("middlename")} ></input>
            </div>
            <br/>
            <div>
                <lable>lastName :</lable> <input type="text" {...register("lastname")} ></input>
            </div>
            <br/>
            <div>
                <lable>Enrollment No :</lable> <input type="number" {...register("enroll")} ></input>
            </div>
            <br/>
            <div>
                <lable>Branch :</lable> <input type="text" {...register("branch")} ></input>
            </div>
            <br/>
            <input type='submit'></input>
        </form>
        {
            isSubmitted == true && <div>
                <h4>FirstName : {formData.firstname}</h4>
                <h4>MiddleName : {formData.middlename}</h4>
                <h4>LastName : {formData.lastname}</h4>
                <h4>ENROLLMENT No : {formData.enroll}</h4>
                <h4>Branch : {formData.branch}</h4>
                </div>
        }

    </div>
  )
}
