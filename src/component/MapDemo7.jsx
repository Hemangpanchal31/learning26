import React from 'react'
import R15 from "../assets/R15.jpg"
import GT from "../assets/GT650.avif"
import hunter from "../assets/hunter.jpg"
import kawasaki from "../assets/kawasaki.jpg"
import apache from "../assets/apache.avif"
import yamaha from "../assets/yamahaMT.jpg"

export const MapDemo7 = () => {

    var bikes = [
       {No:1,img:R15,name:"Yamaha R15",model:2022,price:"₹2Lakh"},
       {No:2,img:GT,name:"GT 650",model:2025,price:"₹3.82Lakh"},
       {No:3,img:hunter,name:"Hunter",model:2026,price:"₹1.60Lakh"},
       {No:4,img:kawasaki,name:"KawaSaki-Ninja-ZX10r",model:2024,price:"₹24Lakh"},
       {No:5,img:apache,name:"TVS Apache RTR 200 4V",model:2025,price:"₹1.50Lakh"},
       {No:6,img:yamaha,name:"YAMAHA-MT15",model:2024,price:"₹2Lakh"}
    ];

  return (
    <div>
        <h1>Map Demo 7</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>NO</th>
                    <th>IMG</th>
                    <th>NAME</th>
                    <th>MODEL</th>
                    <th>PRICE</th>
                </tr>
            </thead>
            <tbody>
                {
                    bikes.map((bike) => {
                        return (
                            <tr>
                                <td>{bike.No}</td>
                                <td>
                                    <img src={bike.img} alt={bike.name} style={{height:"55px",width:"65px",objectFit:"cover" ,borderRadius:"6px"}}/>
                                </td>
                                <td>{bike.name}</td>
                                <td style={{backgroundColor:bike.model==2025 && "green"}}>{bike.model}</td>
                                <td>{bike.price}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
