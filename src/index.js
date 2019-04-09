import React from "react";
import ReactDOM from "react-dom";
import { o, keepAlive, revise } from "vana";

import { Subscriber } from "./subscriber";
import { Publisher } from "./publisher";
import { History } from "./history";
import "./styles.css";

const initialState = o({
  h1: "Hello CodeSandbox",
  h2: "Start editing to see some magic happen!"
});

const state = keepAlive(initialState);

const spacer = <div className="spacer" />;

// TODO: Create a cooler example
class App extends React.Component {
  componentDidCatch(error) {
    console.error(error);
  }
  render() {
    return (
      <>
        <div className="app">
          <Subscriber state={state} />
          {spacer}
          <Publisher name={"h1"} state={state} />
          {spacer}
          <Publisher name={"h2"} state={state} />
          {spacer}
          <button onClick={() => revise(state, initialState)}>Reset</button>
          {spacer}
        </div>
        <History state={state} />
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
