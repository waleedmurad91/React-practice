import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Card1 from './components/Card1'

function App() {
  const [text, setText] = useState('This is from parent.')
const [count, setCount] = useState(0)

  return (
  <>
    <h1>Count is {count}</h1>
    <h4>{text}</h4>
     <Card count={count} setCount={setCount} setText={setText}/>
     <Card1 count={count} setCount={setCount} setText={setText} />
  </>
  )
}

export default App
