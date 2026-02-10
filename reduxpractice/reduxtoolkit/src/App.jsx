import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";
function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()
  return (
    <>
      <h1>counter:{counter}</h1>
      <button style={{marginRight:'10px',fontSize:'20px'}} onClick={()=>{dispatch(increment())}}>+</button>
      <button style={{fontSize:'20px'}} onClick={()=>{dispatch(decrement())}}>-</button>
    </>
  );
}

export default App;
