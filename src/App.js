import "./App.css";
import ClassCounter from "./components/useState/ClassCounter";
import HookCounter from "./components/useState/HookCounter";
import HookCounter2 from "./components/useState/HookCounter2";
import HookCounter3 from "./components/useState/HookCounter3";
import HookCounter4 from "./components/useState/HookCounter4";

function App() {
  return (
    <div className="App">
      <h1> useState Hook</h1>
      <hr />
      <hr />
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
    </div>
  );
}

export default App;
