import axios from 'axios'
import React, { useState } from 'react'

export const OmdbSearch = () => {

    const[movies,setmovies] = useState([]);

    const Getmovies = async() =>{
         const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=3e0de860&s=avatar`);
         console.log(response);
         console.log(response.data);
         setmovies(response.data.Search);
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1> OMDB Search</h1>
        <button onClick={() =>{Getmovies()}}>Search</button>
        <table className='table'>
            <thead className='thead-dark'>
                <tr>
                    <th>ImadbID</th>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Poster</th>
                </tr>
            </thead>
            <tbody>
                {
                    movies.map((movie) =>{
                        return(
                            <tr>
                                <td>{movie.imdbID}</td>
                                <td>{movie.Title}</td>
                                <td>{movie.Year}</td>
                                <td>
                                    <img src={movie.Poster} height="150px" width="150px"></img>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
