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
import { UsestateDemo1 } from './component/UsestateDemo1';
import { UsestateDemo2 } from './component/UsestateDemo2';
import { UsestateDemo3 } from './component/UsestateDemo3';
import { FunctionDemo1 } from './component/FunctionDemo1';
import { Employees } from './component/Employees';
import { Change } from './component/Change';
import { FormDemo1 } from './component/form/FormDemo1';
import { FormDemo2 } from './component/form/FormDemo2';
import { FormDemo3 } from './component/form/FormDemo3';
import { FormDemo4 } from './component/form/FormDemo4';
import { FormValidation1 } from './component/form/FormValidation1';
import { FormValidation2 } from './component/form/FormValidation2';
import { FormValidation3 } from './component/form/FormValidation3';
import { FormDemo5 } from './component/form/FormDemo5';
import { FormDemo6 } from './component/form/FormDemo6';
import { FormValidation4 } from './component/form/FormValidation4';
import { FormValidation } from './component/form/FormValidation';
import { ApiDemo1 } from './component/Apis/ApiDemo1';
import { Apitask1 } from './component/Apis/Apitask1';
import { Apitask2 } from './component/Apis/Apitask2';

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
      <Route path='/functiondemo1'element={<FunctionDemo1/>}></Route>
      <Route path='/usestatedemo1' element={<UsestateDemo1/>}></Route>
      <Route path='/usestatedemo2' element={<UsestateDemo2/>}></Route>
      <Route path='/usestatedemo3' element={<UsestateDemo3/>}></Route>
      <Route path='/employees' element={<Employees/>}></Route>
      <Route path='/change' element={<Change/>}></Route>
      <Route path='/formdemo1' element={<FormDemo1/>}></Route>
      <Route path='/formdemo2' element={<FormDemo2/>}></Route>
      <Route path='/formdemo3' element={<FormDemo3/>}></Route>
      <Route path='/formdemo4' element={<FormDemo4/>}></Route>
      <Route path='/formdemo5' element={<FormDemo5/>}></Route>
      <Route path='/formdemo6' element={<FormDemo6/>}></Route>
      <Route path='/formvalidation1' element={<FormValidation1/>}></Route>
      <Route path='/formvalidation2' element={<FormValidation2/>}></Route>
      <Route path='/formvalidation3' element={<FormValidation3/>}></Route>
      <Route path='/formvalidation4' element={<FormValidation4/>}></Route>
      <Route path='/formvalidation' element={<FormValidation/>}></Route>
      <Route path='/apidemo1' element={<ApiDemo1/>}></Route>
      <Route path='/apitask1' element={<Apitask1/>}></Route>
      <Route path='/apitask2' element={<Apitask2/>}></Route>
    </Routes> 
    </div>
  )
}

export default App
