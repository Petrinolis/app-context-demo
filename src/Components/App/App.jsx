import React from "react";
import useApp from "./useApp";

const App = () => {
  const { counter, increment, decrement } = useApp();

  return (
    <div className="App">
      <button onClick={() => decrement()}> - </button>
      <h1>{counter}</h1>
      <button onClick={() => increment()}> + </button>
    </div>
  );
};

export default App;
