import React, { useState, _____ } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  _____(() => {
    console.log("Count changed:", count);
  }, [_____]);

  return <button onClick={() => setCount(count + 1)}>Click Me</button>;
}
