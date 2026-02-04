import React from 'react'
import { Link } from 'react-router-dom'

export const Netflixmovies = () => {

  var movies = [
    {movieId:1 , MovieName:"KGF"},
    {movieId:2 ,  MovieName:"JAWAN"},
    {movieId:3 , MovieName:"shiddat"}
  ]

  return (
    <div style={{textAlign:"center"}}>
        <h1>Netflix movies</h1>
        {
           movies.map((movie) =>{
              return (
                <li>
                  <Link to={`/watch/${movie.MovieName}`}>{movie.MovieName}</Link>
                </li>
              )
           })
        }
    </div>
  )
}
