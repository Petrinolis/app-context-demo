import React from "react";
import useApp from "./useApp";

const App = () => {
  const { counter, handleIncrement, handleDecrement } = useApp();

  return (
    <div className="App">
      <button onClick={() => handleDecrement()}> - </button>
      <h1>{counter}</h1>
      <button onClick={() => handleIncrement()}> + </button>
    </div>
  );
};

export default App;
