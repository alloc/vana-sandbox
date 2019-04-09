import React from "react";
import { useObserved } from "@vana/react";

// Subscribe to the state, and render it.
export function Subscriber(props) {
  const state = useObserved(props.state);
  console.log("Subscriber.render:", { state });
  return (
    <>
      <h1>{state.h1}</h1>
      <h2>{state.h2}</h2>
    </>
  );
}
