import axios from 'axios'
import React, { useState } from 'react'

export const Apitask2 = () => {

    const [data, setdata] = useState([]);

    const Comments = async() => {
        const response = await axios.get("https://dummyjson.com/comments");
        console.log(response);
        setdata(response.data.comments);
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1> Api task 2</h1>
        <button onClick={()=> {Comments()}}>Get Comments</button>
        <table className='table'>
            <thead className='thead-light'>
                <tr>
                    <th>Id</th>
                    <th>Body</th>
                    <th>PostId</th>
                    <th>Likes</th>
                    <th>UserName</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((d) =>{
                        return(
                            <tr>
                                <td>{d.id}</td>
                                <td>{d.body}</td>
                                <td>{d.postId}</td>
                                <td>{d.likes}</td>
                                <td>{d.user.username}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
