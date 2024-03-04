import { useState } from 'react'
//cssnpm install react-burger-menu --save
import './App.css'
//components
import Header from './components/Header';
import Body from './components/Body';
//assets


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Header/>
     <Body/>
    </div>
  )
}

export default App
