import { useRef } from "react";
import Modal from "./Modal";

import React from "react";

function UseImperativeHandleApp() {
  const modalRef = useRef();
  const handleOpenModal = () => {
    modalRef.current.openModal();
  };

  console.log("Parent rendered in use Imperative ");

  return (
    <main>
      <p>Parent Component</p>
      <button onClick={handleOpenModal}>Open</button>
      <br />
      <br />

      <Modal ref={modalRef} />

    </main>
  );
}

export default UseImperativeHandleApp;
