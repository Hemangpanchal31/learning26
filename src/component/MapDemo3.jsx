import React from 'react'

export const MapDemo3 = () => {

    var Students = [
        {id:1,name:"Amit",age:23,marks:78,city:"Ahmedabad",gender:"Male"},
        {id:2,name:"prathana",age:25,marks:81,city:"Ahmedabad",gender:"Female"},
        {id:3,name:"Rekha",age:22,marks:72,city:"Ahemedabad",gender:"Female"}
    ];

  return (
    <div style={{textAlign:"center"}}>
        <h1>Map Demo 3</h1>
        <table border={2} align='center'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>MARKS</th>
                    <th>CITY</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {
                    Students.map((st) => {
                        return (
                            <tr>
                                <td>{st.id}</td>
                                <td>{st.name}</td>
                                <td>{st.age}</td>
                                <td>{st.marks}</td>
                                <td>{st.city}</td>
                                <td>{st.gender}</td>
                            </tr> 
                        )
                    })
                }
            </tbody>
        </table>

    </div>
  )
}
