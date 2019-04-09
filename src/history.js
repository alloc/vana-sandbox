import React from "react";
import { useEffect } from "react";
import { useObserved, useO } from "@vana/react";
import { append } from "vana/lib/array";
import { o } from "vana";

let nextKey = 1;

export function History(props) {
  // The history is a memoized observable.
  const history = useO([]);

  // Observe the given state.
  const state = useObserved(props.state);
  useEffect(() => {
    // Append to the history on state changes.
    append(history, o(state));
  }, [state]);

  return (
    <>
      <hr />
      <h2>Past 10 states</h2>
      {history
        .slice(-10)
        .reverse()
        .map(state => (
          <div key={nextKey++} className="history-item">
            {JSON.stringify(state)}
          </div>
        ))}
    </>
  );
}
