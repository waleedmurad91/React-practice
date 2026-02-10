import {useSelector,useDispatch} from 'react-redux'
import './App.css'
import { decrement, increment } from './features/counterSlice'

function App() {
const count = useSelector((state) => state.counter.value)  
const dispatch = useDispatch()

  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>{dispatch(increment())}}>+</button>
    <button onClick={()=>{dispatch(decrement())}}>-</button>
    </>
  )
}

export default App
