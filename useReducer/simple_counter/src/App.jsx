import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <div>{count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
}

export default App;
