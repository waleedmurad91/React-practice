import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    alert('count is changed')
  }, [count])

  useEffect(() => {
    
   alert('count is changed')
    return () => {
      alert('count is removed')
    }
  }, [])
  
  

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
