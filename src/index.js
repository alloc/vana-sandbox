import React from "react";
import ReactDOM from "react-dom";
import { o, keepAlive, revise } from "vana";

import { Subscriber } from "./subscriber";
import { Publisher } from "./publisher";
import { History } from "./history";
import "./styles.css";

// Magical default state (observable and immutable)
const initialState = o({
  h1: "Hello CodeSandbox",
  h2: "Start editing to see some magic happen!"
});

// Keep a reference to the latest state.
const state = keepAlive(initialState);

// Padding between UI elements.
const spacer = <div className="spacer" />;

/**
 * The `App` component contains 4 types of interesting components:
 *   - Subscriber: Listens to the entire state and updates the headings
 *   - Publisher: An editor for a single property of the state
 *   - History: JSON stream of 10 most recent state snapshots
 *   - ResetButton: Reverts the state back to its first snapshot
 */
class App extends React.Component {
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
          <ResetButton from={state} to={initialState} />
          {spacer}
        </div>
        <History state={state} />
        <div
          className="history-item"
          style={{ color: "#4DB038", marginTop: 20, marginBottom: 40 }}
        >
          Watching for changes...
        </div>
      </>
    );
  }
}

// Magical reset
const ResetButton = props => (
  <button onClick={() => revise(props.from, props.to)}>Reset</button>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
