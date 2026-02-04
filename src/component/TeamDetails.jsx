import React from 'react'
import { useParams } from 'react-router-dom'
import "../assets/css/team.css"

export const TeamDetails = () => {

    const TeamName = useParams().name

    const teamDetails = [
        {teamId:1,teamName:"CSK",teamCaptain:"Ruturaj Gaikwad",teamBowler:"M Pathirana",teamWkipper:"MS.DHONI",teambatter:"Ruturaj Gaikwad"},
        {teamId:2,teamName:"RCB",teamCaptain:"Rajat Patidar",teamBowler:"B KUMAR",teamWkipper:"Phil-Salt",teambatter:"Virat Kohli"},
        {teamId:3,teamName:"GT",teamCaptain:"Shubhman Gill",teamBowler:"M Siraj",teamWkipper:"Josh Buttler",teambatter:"Shubhman Gill"},
        {teamId:4,teamName:"KKR",teamCaptain:"A Rahane ",teamBowler:"V Arora",teamWkipper:"Finn Allen",teambatter:"Rinku Singh"},
        {teamId:5,teamName:"SRH",teamCaptain:"pat Cummins",teamBowler:"Pat Cummins",teamWkipper:"Ishan Kishan",teambatter:"T-head"},
        {teamId:6,teamName:"PBKS",teamCaptain:"Shreyash Iyar",teamBowler:"A-Singh",teamWkipper:"P-Singh",teambatter:"Shreyash Iyar"},
        {teamId:7,teamName:"DC",teamCaptain:"Axar Patel",teamBowler:"M-Starc",teamWkipper:"KL-Rahul",teambatter:"KL-Rahul"},
        {teamId:8,teamName:"MI",teamCaptain:"Hardik-pandya",teamBowler:"Jasprit Bumrah",teamWkipper:"R Rickelton",teambatter:"Rohit Sharma"},
        {teamId:9,teamName:"RR",teamCaptain:"Riyan Parag",teamBowler:"Ravi Bisnoi",teamWkipper:"Dhruv Jurel",teambatter:"Yashasvi Jaiswal"},
        {teamId:10,teamName:"LSG",teamCaptain:"Rishabh Pant",teamBowler:"A Khan",teamWkipper:"N Puran",teambatter:"Rishabh Pant"}
        
    ]

    const team = teamDetails.find(t => t.teamName === TeamName);

  return (
    <div className='main-div'>
        <h1>TeamDetails of {TeamName}</h1>

        <div className='details'>
         <div className='tDetails'>
              <h2>Team Captain: {team.teamCaptain}</h2>
              <h2>Team Bowler: {team.teamBowler}</h2>
              <h2>Team W-Kipper: {team.teamWkipper}</h2>
              <h2>Team Batter: {team.teambatter}</h2>
        </div> 
        </div>    


    </div>
  )
}
