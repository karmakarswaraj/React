import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount] = useState(0);
  // let count = 4;
  const addCount = () =>{
    if(count <20)
    setCount (count + 1);
  };
  const subCount = () =>{
    if(count > 0)
    setCount (count - 1);
  };
  return (
    <>
      <h1>Counter</h1>
      <p>Initial Count: {count}</p>
      <button onClick={addCount}>Add</button> 
      <button onClick={subCount}>Sub</button>
      <h3>Count will be between 0 - 20</h3>
    </>
  )
}

export default App
