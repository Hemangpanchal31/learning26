import React from 'react'

export default function ContentComponent() {

  var year = 2026;
  var title = "React js";
  var isAvailabale = true;

  var Student ={
    name : "Hemang",
    age : 20,
    city :"Ahmedabad"
  };
  return (

    <div style={{backgroundColor :"#ffebc6" , border :"2px solid black " , borderRadius :"5px" , margin:0 , padding : 5}}>
        <h1>Hello</h1>
         <h1>YEAR : {year}</h1>
         <h2>Title :{title}</h2>
         <h1> All tag Must have closing tag </h1><br></br>
         <h3>Available ?? {isAvailabale == true? "True" : "False"}</h3>
         <h4> At a time we can Return only one Tag....</h4>
        <br></br>
        <h2>Name : {Student.name}<br></br>AGE :{Student.age} <br></br>city:{Student.city}</h2>
    </div>
  )
}
