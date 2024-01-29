import { useState } from 'react'
import './App.css'
import SM64GameplayBox from './components/SM64GameplayBox/SM64GameplayBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="overlay-container column-center-center">
        <div className="center-center sm64-gameplay-row">
          <SM64GameplayBox />
          <SM64GameplayBox />
        </div>
        <div className="center-center gradient-test"></div>
      </div>
    </>
  )
}

export default App
