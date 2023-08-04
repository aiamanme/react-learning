import { useState } from "react";
import "./App.css";

function App() {
  const [candys, setCandys] = useState(0);
  function addCandys() {
    setCandys(candys + 1);
  }

  return (
    <div id="main">
      <h1>
        Hi 👋, My name is Luffy and i like
        <br /> candeys 🍬 a lot!
      </h1>
      <button onClick={addCandys}>
        Candy candys : <span id="candy-value">{candys}</span>
      </button>
    </div>
  );
}

export default App;
