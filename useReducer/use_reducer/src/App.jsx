import { useState, useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}

export default App;
