import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const FormDemo1 = () => {
  const { register, handleSubmit } = useForm();

  const [useData, setuseData] = useState({});
  const [isSubmitted, setisSubmitted] = useState(false);

  const submitHandler = (data) => {
      console.log(data);
      setuseData(data);
      setisSubmitted(true);
  }
 
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Form Demo 1</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME :</label>
          <input
            type="text"
            placeholder="Enter Name"
            {...register("firstName")}
          ></input>
        </div>
        <div>
            <label>AGE :</label>
            <input type="text" {...register("Age")}></input>
        </div>
        <div>
            <label>
               <h6> Gender : </h6>
            </label>
            <label>
                MALE <input type="radio" value={"male"} {...register("Gender")} ></input>
            </label>
            <label>
                FEMALE <input type="radio" value={"female"} {...register("Gender")} ></input>
            </label>
        </div>
        <div>
            <label>
                <h5> Hobbies :</h5>
            </label>
            <label>
                Traveling <input type="checkbox" value="Traveling" {...register("Hobbies")}></input>
                Music <input type="checkbox" value="Music " {...register("Hobbies")}></input>
                movie <input type="checkbox" value="movie" {...register("Hobbies")}></input>
            </label>
        </div>
        <input type="submit"></input>
      </form>
    {
        isSubmitted == true && <div> 
            <h3> OUTPUT</h3>
            <h4>Name : {useData.firstName}</h4>
            <h4>Age : {useData.age}</h4>
            <h4>Gender : {useData.Gender}</h4>
            <h4>Hobbies : {useData.Hobbies.join(",")}</h4>

        </div>
    }
    </div>
  );
};
