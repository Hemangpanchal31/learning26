import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HeaderComponent } from './component/HeaderComponent';
import ContentComponent from './component/ContentComponent';
import { FooterComponent } from './component/FooterComponent';
import { MapDemo1 } from './component/MapDemo1';
import { MapDemo2 } from './component/MapDemo2';
import { MapDemo3 } from './component/MapDemo3';
import { MapDemo4 } from './component/MapDemo4';
import { MapDemo5 } from './component/MapDemo5';
import { MapDemo6 } from './component/MapDemo6';
import { MapDemo7 } from './component/MapDemo7';
import { Route, Routes } from 'react-router-dom';
import {NetflixHome} from './component/NetflixHome'
import { Netflixshows } from './component/Netflixshows';
import { Netflixmovies } from './component/Netflixmovies';
import { HomeComponent } from './component/HomeComponent';
import { Navbar } from './component/Navbar';
import { Netflixlatest } from './component/Netflixlatest';
import { Netflixmylist } from './component/Netflixmylist';
import { Netflixsearch } from './component/Netflixsearch';
import { ErrorNotfound } from './component/ErrorNotfound';
import { Watch } from './component/Watch';
import { Teams } from './component/Teams';
import { TeamDetails } from './component/TeamDetails';

//import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  return (
    
    <div>
    <Navbar/>
     <Routes>
      <Route path='/netflixhome' element={<NetflixHome/>}></Route>
      <Route path='/netflixshows' element={<Netflixshows/>}></Route>
      <Route path='/netflixmovies' element={<Netflixmovies/>}></Route>
      <Route path='/' element={<HomeComponent/>}></Route>
      <Route path='/netflixlatest' element={<Netflixlatest/>}></Route>
      <Route path='/netflixmylist' element={<Netflixmylist/>}></Route>
      <Route path='/netflixsearch' element={<Netflixsearch/>}></Route>
      <Route path='/watch/:name' element={<Watch/>}></Route>
      <Route path='/*' element={<ErrorNotfound/>}></Route>
      <Route path='/teams' element={<Teams/>}></Route>
      <Route path='/teamdetails/:name' element={<TeamDetails/>}></Route>
    </Routes> 
    </div>
  )
}

export default App
