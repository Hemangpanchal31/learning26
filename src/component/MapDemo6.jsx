import React from 'react'

export const MapDemo6 = () => {

    var cars = [
       {NO:1,name:"Fortuner",color:"Black",model:2025,price:"₹4500000"},
       {NO:2,name:"Thar",color:"Black",model:2024,price:"₹2500000"},
       {NO:3,name:"Creta",color:"white",model:2025,price:"₹2000000"},
       {NO:4,name:"Brezza",color:"White",model:2026,price:"₹1400000"}
    ];

  return (
    <div>
        <h1> Map Demo 6</h1>
        <table className='table table-striped table-dark'>
            <thead>
                <tr>
                    <th>NO</th>
                    <th>NAME</th>
                    <th>COLOR</th>
                    <th>MODEL</th>
                    <th>PRICE</th>
                </tr>
            </thead>
            <tbody>
                {
                    cars.map((car) => {
                        return (
                            <tr style={{backgroundColor : car.color == "Black" && "black"}}>
                                <td>{car.NO}</td>
                                <td>{car.name}</td>
                                <td>{car.color}</td>
                                <td>{car.model}</td>
                                <td>{car.price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
