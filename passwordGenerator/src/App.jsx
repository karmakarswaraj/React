import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = " ";
    let str =
      "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z,a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "@#$&*!?:";
    for (let i = 0; i <= length; i++) {
      let char = math.floor(math.random * str.length + 1);
      pass = str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);
  return (
    <>
      <h1 className="text-3xl text-center ">Password Generator</h1>
      <br />
      <div className="bg-blue-800 p-4 rounded-lg ">
        <div className="flex justify-center p-4 m-4 gap-4">
          <input value="{password}"className="w-full p-2 rounded-lg" type="text" readOnly/>
          <button>Copy</button>
        </div>
        <div className="flex justify-between p-4 m-4 gap-4">
          <input type="range" id="slider" name="slider" min="0" max="100" value="50" />
          <label for="slider">length({length})</label>
          <input type="checkbox" id="checkbox" name="checkbox" />
          <label for="slider">Number</label>
          <input type="checkbox" id="checkbox" name="checkbox" />
          <label for="slider">Charecter</label>
        </div>
      </div>
    </>
  );
}

export default App;
