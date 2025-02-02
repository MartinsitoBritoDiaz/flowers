import { useState } from 'react'
import './App.css'
import Flower from './Flower/Flower'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Flower />
    </>
  )
}

export default App
