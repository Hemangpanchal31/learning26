import React from 'react'

export const MapDemo2 = () => {

    var users = [
        {id:1,name:"raj",age:23,gender:"Male"},
        {id:2,name:"Parth",age:24,gender:"Male"},
        {id:3,name:"jaya",age:23,gender:"Female"}
    ];

  return (
    <div>
        <h1> Map Demo 2</h1>
        {
          users.map((user) => {
            return (
                <li>{user.id} - {user.name} - {user.age} - {user.gender}</li>
            )
          })
        }
    </div>
  )
}
