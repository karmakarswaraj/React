import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";
//useState is used for rendering the chamged in the code. React itself renders the code for the user on changes.It actually interacts with the UI.
//useCallback is used for optimising the code by saving values inside the cache.It takes a function and an dependency array.
//useEffect is used to run the code as per the dependecies are changed. it also takes same input as callback.
//useRef is used to give a reference of a thing. example we referenced the input value to the button for copying.

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const passRef = useRef(null);

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

  const passwordCopy = useCallback(() => {
    //Use any one of the three.
    window.navigator.clipboard.writeText(password); //this is the RAW form of copying anything into a clipboard 
    //Using ref HOOK
    passRef.current.select(); //selects everything that refered to the passRef and gives the selection effect
    //passRef.current?.setSelectionRange(0,3);//selects only first 4 that refered to the passRef
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <h1 className="text-3xl text-center ">Password Generator</h1>
      <br />
      <div className="w-full p-4 bg-blue-800 rounded-lg">
        <div className="flex justify-center gap-4 p-4 m-4">
          <input placeholder="Password" value={password} className="w-full p-2 rounded-lg" type="text" readOnly ref={passRef} />
          <button onClick={passwordCopy}>Copy</button>
        </div>
        <div className="flex justify-between gap-4 p-4 m-4">
          <input type="range" min={8} max={100} value={length} className="cursor-pointer" onChange={(e) => {
            setLength(e.target.value)
          }} />
          <label>length: {length}</label>

          <input type="checkbox" defaultChecked={numAllowed} onChange={() => { setNumAllowed((prev) => !prev) }} />
          <label>Number</label>

          <input type="checkbox" defaultChecked={charAllowed} onChange={() => { setCharAllowed((prev) => !prev) }} />
          <label>Charecter</label>

        </div>
      </div>
    </>
  );
}

export default App;
