import axios from 'axios'
import React, { useState } from 'react'

export const Apitask1 = () => {
     
    const [data,setdata] = useState([]);
    const GetProducts = async() =>{
        const response = await axios.get("https://dummyjson.com/products");
        console.log(response);
        setdata(response.data.products);
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1> Api Task 1 </h1>
        <button onClick={()=>{GetProducts()}}>Get Products</button>
        <table className='table'>
            <thead className='thead-light'>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Brand</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((d) => {
                        return(
                            <tr>
                                <td>{d.id}</td>
                                <td>{d.title}</td>
                                <td>{d.category}</td>
                                <td>{d.price}</td>
                                <td>{d.rating}</td>
                                <td>{d.brand}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
