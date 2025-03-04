import React, { ________ } from 'react';

function Counter() {
  const [count, setCount] = ________([0]);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
