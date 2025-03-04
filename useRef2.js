import React, { _____ } from "react";

function InputField() {
  const inputRef = _____();

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current._____()}>Focus</button>
    </div>
  );
}
