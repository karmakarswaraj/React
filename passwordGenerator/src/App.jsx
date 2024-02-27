import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "@#$&*!?:";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);
  useEffect(() => {
    passwordGenerator()
  },[length, numAllowed, charAllowed, passwordGenerator]);
  
  return (
    <>
      <h1 className="text-3xl text-center ">Password Generator</h1>
      <br />
      <div className="w-full p-4 bg-blue-800 rounded-lg">
        <div className="flex justify-center gap-4 p-4 m-4">
          <input placeholder="Password" value={password} className="w-full p-2 rounded-lg" type="text" readOnly/>
          <button>Copy</button>
        </div>
        <div className="flex justify-between gap-4 p-4 m-4">
          <input type="range" min={8} max={100} value={length} className="cursor-pointer" onChange={(e) => {
            setLength(e.target.value)
          }}/>
          <label>length: {length}</label>
          
          <input type="checkbox" defaultChecked={numAllowed} onChange={() => {setNumAllowed((prev) => !prev)}}/>
          <label>Number</label>
          
          <input type="checkbox" defaultChecked={charAllowed} onChange={() => {setCharAllowed((prev) => !prev)}}/>
          <label>Charecter</label>
          
        </div>
      </div>
    </>
  );
}

export default App;
