import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  ________ (() => {
    document.title = `You clicked ${count} times`;
  }, ________);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
