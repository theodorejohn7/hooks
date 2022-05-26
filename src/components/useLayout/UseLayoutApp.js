import React, { useLayoutEffect,useEffect, useState, useRef } from "react";

function UseLayoutApp() {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 155}px`;
  }, [show]);

  return (
    <>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Click Me
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          Iam the Pop-Up
        </div>
      )}
    </>
  );
}

export default UseLayoutApp;
