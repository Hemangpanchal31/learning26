import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {

    const imdbId = useParams().id

    const[detail,setdetail] = useState("")
    const[isClicked,setisClicked] = useState(false);

    const movieDetails = async() => {
        const res = await axios.get(`https://www.omdbapi.com/?i=${imdbId}&apikey=3e0de860`);
        console.log(res);
        console.log(res.data);
        setdetail(res.data);
        setisClicked(true);
    }
  return (
    <div style={{textAlign:"center", backgroundColor:"#110F0D" , color:"white"}}>
        <h1>Movie Details</h1>
        <button onClick={() =>{movieDetails()}} style={{borderRadius:"8px" , fontWeight:500 ,backgroundColor:"#e1c6c6" , color:"black"}}>GetDetails</button>
        {
            isClicked == true && <div>

              <h2>Title :-  {detail.Title}</h2>
              <h6>Year : {detail.Year}</h6>
              <h6>Rated : {detail.Rated}</h6>
              <h6>Raleased : {detail.Raleased}</h6>
              <h6>Runtime : {detail.Runtime}</h6>
              <h6>Genre : {detail.Genre}</h6>
              <h6>Director : {detail.Director}</h6>
              <h6>Writer : {detail.Writer}</h6>
              <h6>Actors : {detail.Actors}</h6>
              <h6>Plot : {detail.Plot}</h6>
              <h6>Language : {detail.Language}</h6>
              <h6>Country : {detail.Country}</h6>
              <h6>Awards : {detail.Awards}</h6>
              <img src={detail.Poster} alt={detail.Title} height="150px" width="150px"></img>
            </div>
        }
    </div>
  )
}
