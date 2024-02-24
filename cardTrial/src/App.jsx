import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./card";

function App() {
  let myObj1 = {
    title: "Laptop",
    tags: "#Laptop #Apple #Macbook"
}
let myObj2 = {
  title: "Macbook",
}
  return (
    <>
      <Card title = {myObj1.title} tags= {myObj1.tags}/>
      <Card title = {myObj2.title} tags= {myObj1.tags}/>
    </>
  );
}

export default App;
