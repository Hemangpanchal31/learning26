import axios from "axios";
import React, { useState } from "react";
import "../Apis/moviegrid.css";
import { Link } from "react-router-dom";

export const MovieGrid = () => {
  const [movies, setmovies] = useState([]);

  const SearchMovies = async () => {
    const response = await axios.get(
      "https://www.omdbapi.com/?i=tt3896198&apikey=3e0de860&s=iron man",
    );
    console.log(response);
    console.log(response.data);
    setmovies(response.data.Search);
  };
  return (
    <div style={{ textAlign: "center" ,backgroundColor:"#160f0f" ,color:"white" }}>
      <h1> Movies </h1>
      <button className="Search-btn"
        onClick={() => {
          SearchMovies();
        }}
      >
        Search movies
      </button>
      <div className="Container">
        {movies.map((movie, index) => {
          return (
            <div className="Singlegrid">
              <div className="grid-img">
                  <img src={movie.Poster} alt={movie.Title} style={{ objectFit: "cover" }}></img>   
              </div>
              <h4>movie Title:{movie.Title}</h4>
              <div className="button">
                <Link to={`/moviedetails/${movie.imdbID}`} className="no-link">Details</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
