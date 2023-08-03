import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
      <div id='main'>
        <h1>Hi 👋, My name is Luffy and i like<br/> candeys 🍬 a lot!</h1>
        <button class="bubbly-button" onClick={() => setCount(count + 1)}>
          Candy count : <span id='candy'>{ count }</span>
        </button>
      </div>
  )
}

export default App
