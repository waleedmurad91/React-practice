import { useState } from 'react'
import './App.css'
import Calculatorcard from './components/Calculatorcard';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Calculatorcard/>
    </>
  )
}

export default App
