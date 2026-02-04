import React from 'react'
import { Link } from 'react-router-dom'

export const Netflixshows = () => {

  return (
    <div style={{textAlign:"center"}}>
        <h1>Netflix Shows</h1>
        <ul style={{listStyle:"none"}}>
          <li>
            <Link to="/watch/moneyheist">Money Heist</Link>
          </li>
          <li>
            <Link to="/watch/breakingbad">Breaking Bad</Link>
          </li>
          <li>
            <Link to="/watch/strangerthings">Stranger Things</Link>
          </li>
        </ul>
    </div>
  )
}
