import React from 'react'
import { Link } from 'react-router-dom'

export const Teams = () => {
  
    const teams = [
        {teamId:1,teamName:"CSK"},
        {teamId:2,teamName:"RCB"},
        {teamId:3,teamName:"GT"},
        {teamId:4,teamName:"KKR"},
        {teamId:5,teamName:"SRH"},
        {teamId:6,teamName:"PBKS"},
        {teamId:7,teamName:"DC"},
        {teamId:8,teamName:"MI"},
        {teamId:9,teamName:"RR"},
        {teamId:10,teamName:"LSG"}
        
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1> IPL TEAMS</h1>

        {
            teams.map((team) => {
                return (
                    <li>
                        <Link to={`/teamdetails/${team.teamName}`}>{team.teamName}</Link>
                    </li>
                )
            })
        }
    </div>
  )
}
