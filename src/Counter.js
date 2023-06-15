import React, { useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
//   onsole.log("Count Element Text Content:", document.querySelector("[data-testid='count']").textContent);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleRestart = () => {
    setCount(0);
  };

  return (
    <div>
      <h2 data-testid="count">Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};

export default Counter;
