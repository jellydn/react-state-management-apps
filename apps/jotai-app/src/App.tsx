import React from "react";
import { atom, useAtom } from "jotai";

import logo from "./logo.svg";
import "./App.css";

const countAtom = atom(0);
function Counter() {
  const [count, setCount] = useAtom(countAtom);
  return (
    <p>
      <button type="button" onClick={() => setCount((counter) => counter + 1)}>
        count is: {count}
      </button>
    </p>
  );
}

const doubleCountAtom = atom((get) => get(countAtom) * 2);
function DoubleCounter() {
  const [double] = useAtom(doubleCountAtom);
  return (
    <h3>
      Double:
      {double}
    </h3>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <Counter />
        <DoubleCounter />
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://docs.pmnd.rs/jotai/introduction"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jotai
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
