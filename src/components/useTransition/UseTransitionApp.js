import { useState, useTransition } from "react";

function UseTransitionApp() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [list, setList] = useState([]);
  const [list2, setList2] = useState([]);
  const LIST_SIZE = 20000;

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }


  function handleChange2(e) {
    setInput2(e.target.value);
  
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList2(l);
    
  }


  return (
    <>
<h4>With Use transition</h4>

      <input type="text" label="text1" value={input} onChange={handleChange} />
      {isPending
        ? "Loading..."
        : list.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}


          <hr />
<h4>Without Use transition</h4>
          <input type="text" label="text2" value={input2} onChange={handleChange2} />
      { list2.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </>
  );
}

export default UseTransitionApp;
