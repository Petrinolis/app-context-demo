import React from 'react';
import useApp from './useApp';


const App = () => {
  const { counter } = useApp();
  
  return (
    <div className="App">
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
