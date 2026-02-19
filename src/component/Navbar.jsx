import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <Link className="nav-link" to="/netflixhome">
                Netflix Home
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/netflixshows">
                Shows
              </Link>
            </li>
            <li>
                <Link className="nav-link" to="/netflixmovies">
                Movies
                </Link>
            </li>
            <li>
                <Link className="nav-link" to="/netflixlatest">Latest</Link>
            </li>
            <li>
                <Link className="nav-link" to="/netflixmylist">My List</Link>
            </li> */}
            {/* <li>
                <Link className="nav-link" to="/netflixsearch">Search</Link>
            </li>
            <li>
                <Link className="nav-link" to="/teams">IPLTeam</Link>
            </li> */}
            <li>
                <Link className="nav-link" to="/functiondemo1">FuncDemo1</Link>
            </li>
            {/* <li>
                <Link className="nav-link" to="/usestatedemo1">Ustatedemo1</Link>
            </li>
            <li>
                <Link className="nav-link" to="/usestatedemo2">Ustatedemo2</Link>
            </li>
            <li>
                <Link className="nav-link" to="/usestatedemo3">Ustatedemo3</Link>
            </li> */}
            <li>
                <Link className="nav-link" to="/employees">Employees</Link>
            </li>
            <li>
                <Link className="nav-link" to="/change">Change</Link>
            </li>
            {/* <li>
                <Link className="nav-link" to="/formdemo1">FormDemo1</Link>
            </li>
            <li>
                <Link className="nav-link" to="/formdemo2">FormDemo2</Link>
            </li> */}
            {/* <li>
                <Link className="nav-link" to="/formdemo3">FormDemo3</Link>
            </li>
            <li>
                <Link className="nav-link" to="/formdemo4">FormDemo4</Link>
            </li>
            <li>
                <Link className="nav-link" to="/formdemo5">FormDemo5</Link>
            </li>
            <li>
                <Link className="nav-link" to="/formdemo6">FormDemo6</Link>
            </li> */}
            <li>
                <Link className="nav-link" to="/formvalidation1">FormValidation1</Link>
            </li>
            <li>
                <Link className="nav-link" to="/formvalidation2">FormValidation2</Link>
            </li>
            <li>
                <Link className="nav-link" to="/formvalidation3">FormValidation3</Link>
            </li>
            <li>
                <Link className="nav-link" to="/formvalidation4">FormValidation4</Link>
            </li>
            <li>
                <Link className="nav-link" to="/formvalidation">FormValidation</Link>
            </li>
            <li>
                <Link className="nav-link" to="/apidemo1">ApiDemo1</Link>
            </li>
            <li>
                <Link className="nav-link" to="/apitask1">Apitask1</Link>
            </li>
            <li>
                <Link className="nav-link" to="/apitask2">Apitask2</Link>
            </li>
            <li>
                <Link className="nav-link" to="/omdbsearch">OMDB Search</Link>
            </li>
            <li>
                <Link className="nav-link" to="/moviegrid">Movie Grid</Link>
            </li>
            <li>
                <Link className="nav-link" to="/moviesearch">Movie Search</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
