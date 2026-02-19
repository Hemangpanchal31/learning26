import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export const MovieSearch = () => {
    const {register,handleSubmit ,formState:{errors}} = useForm()
    const [movies,setmovies] = useState([])

    const SubmitHandler = async (data) => {
      console.log("data",data);
      const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=3e0de860&s=${data.moviename}`);
      console.log("Axios Object :",response);
      console.log("Api Data :",response.data);
      console.log("Movie Data :",response.data.Search);
      setmovies(response.data.Search);
    }

    const validationSchema = {
        Name:{
          required:{
            value : true,
            message:"Please Enter Movie Name*"
          }
        }
    }

  return (
    <div style={{textAlign:"center" ,backgroundColor:"#050F13" ,color:"white"}}>
        <h1>Movie Search</h1>
        <form onSubmit={handleSubmit(SubmitHandler)}>
            <label>Search movie :</label>
            <input type='text' placeholder='Enter Movie Name'style={{borderRadius:"8px" , border:"none"}} {...register("moviename",validationSchema.Name)}></input>
            <button type='submit' style={{borderRadius:"8px" ,border:"none" , marginLeft:"5px" , fontWeight:"500"}}>Search</button>
            {errors.moviename?.message}
        </form>
        <table className='table table-dark'>
          <thead className='thead-dark'>
            <tr>
              <th>Title</th>
              <th>ImdbID</th>
              <th>Year</th>
              <th>Poster</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {
              movies.map((movie) => {
                return(
                  <tr>
                    <td><b>{movie.Title}</b></td>
                    <td><b>{movie.imdbID}</b></td>
                    <td><b>{movie.Year}</b></td>
                    <td>
                      <img src={movie.Poster} alt={movie.Title} height="150px" width="150px"></img>
                    </td>
                    <td>
                      <Link to={`/moviedetails/${movie.imdbID}`}>
                      <button  style={{border:"none", borderRadius:"8px",fontWeight:"500"}}>Details</button>
                      </Link>
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
