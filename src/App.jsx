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
//import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  return (
    
    <div>
      <HeaderComponent/>
      <MapDemo5/>
      <FooterComponent/>   
    </div>
  )
}

export default App
