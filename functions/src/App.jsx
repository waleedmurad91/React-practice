import React from 'react'
import './App.css'

function App() {
 
  function clicked(){
    console.log('clicked');
  }
  
  function userinput(e){
    console.log(`user inout is ${e.target.value}`);
  }
  return (
    <>
      <input onChange={userinput} type="text" />
      <button onClick={clicked}>hello</button>
    </>
  )
}

export default App
