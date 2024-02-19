import { useState } from 'react'
import './App.css'
import SM64GameplayBox from './components/SM64GameplayBox/SM64GameplayBox'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import SoloSM64 from './pages/SoloSM64/SoloSM64'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/couch-overlay/" element={<Home/>}/>
        <Route path="/couch-overlay/solo-sm64" element={<SoloSM64/>} />
      </Routes>
    </>
  )
}

export default App
