import React, { useState, useRef, useEffect } from "react";

function UseRefApp() {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  function focus() {
    inputRef.current.focus();
  }

  useEffect(() => {
    inputRef.current = name;
  }, [name]);

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div> My name is {name}</div>
      <div> I rendered {renderCount.current} times </div>
      <div>My name is {name} and it used to be {inputRef.current}</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}

export default UseRefApp;
