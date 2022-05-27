import React, { forwardRef, useImperativeHandle, useState } from "react";

function Modal(_props, ref) {
  const [modalState, setModalState] = useState(false);
  useImperativeHandle(ref, () => ({
    openModal: () => setModalState(true),
  }));

  console.log("Child rendered in use Imperative ");

  if (!modalState) return null;

  return (
    <div style={{border: '1px solid black',width:'250px',paddingBottom:'10px', borderRadius:'20px', margin:'auto', background:'lightBlue'}}>
      <p> Contents of Modal Popup !!!</p>
      <button onClick={() => setModalState(false)}>Close</button>
    </div>
  );
}

export default forwardRef(Modal);
