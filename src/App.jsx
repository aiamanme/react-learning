import { useState } from "react";
import "./App.css";

function CandyButton() {
  const [candys, setCandys] = useState(0);
  function addCandys() {
    setCandys(candys + 1);
  }

  
  return (
    <button onClick={addCandys}>
      Candy candys : <span id="candy-value">{candys}</span>
    </button>
  );
}

export default function App() {
  return (
    <div id="main">
      <h1>
        Hi 👋, My name is Luffy and i like
        <br /> candeys 🍬 a lot!
      </h1>
      <CandyButton />
    </div>
  );
}
