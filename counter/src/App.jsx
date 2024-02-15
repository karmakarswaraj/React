import { useState } from "react"; //THIS IS A HOOK
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0); // THIS IS A hook for statechanges in the browser
  // let count = 4;
  const addCount = () => {
    if (count < 20) setCount(count + 1); //Takes in the updated value and sets it
  };
  const subCount = () => {
    if (count > 0) setCount(count - 1); //Takes in the updated value and sets it
  };
  return (
    <>
      <h1>Counter</h1>
      <p>Initial Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>Sub</button>
      <h3>Count will be between 0 - 20</h3>
    </>
  );
}

export default App;
