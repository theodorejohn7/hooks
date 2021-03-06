import "./App.css";
import ClassCounter from "./components/useState/ClassCounter";
import HookCounter from "./components/useState/HookCounter";
import HookCounter2 from "./components/useState/HookCounter2";
import HookCounter3 from "./components/useState/HookCounter3";
import HookCounter4 from "./components/useState/HookCounter4";
import ClassCounterOne from "./components/useEffect/ClassCounterOne";
import HookCounterOneUE from "./components/useEffect/HookCounterOneUE";
import CallbackApp from "./components/useCallback/CallbackApp";
import UseRefApp from "./components/useRef/UseRefApp";
import UseLayoutApp from "./components/useLayout/UseLayoutApp";
import UseTransitionApp from "./components/useTransition/UseTransitionApp";
import UseImperativeHandleApp from "./components/useImperativeHandle/UseImperativeHandleApp";

function App() {
  return (
    <div className="App">
    <hr />
    <hr />
    <h1> UseImperativeHandle Hook</h1>
    <UseImperativeHandleApp />

    <hr />
    <hr />
    <h1> UseTransition Hook</h1>
    <UseTransitionApp />
      
    <hr />
    <hr />
    <h1> useLayoutEffect Hook</h1>
    <UseLayoutApp />
      <hr />
      <hr />
      <h1> useRef Hook</h1>
      <UseRefApp />
      <hr />
      <hr />
      <h1> useCallback Hook</h1>
      
      <CallbackApp />
      <hr />
      <hr />
      <h1> useState Hook</h1>
      
      Class Counter
      <ClassCounter />
      <hr />
      Hooks Counter
      <HookCounter />
      <hr />
      Hooks Counter - 2
      <HookCounter2 />
      <hr />
      Hooks Counter - 3
      <HookCounter3 />
      <hr />
      Hooks Counter - 4
      <HookCounter4 />
      <hr />
      <hr />
      <h1> useEffect Hook</h1>
      Class Counter
      <ClassCounterOne />
      <hr />
      Hooks Counter
      <HookCounterOneUE />
      <hr />
      <hr />
    </div>
  );
}

export default App;
