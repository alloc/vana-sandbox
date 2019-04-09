import React from "react";
import { useObserved } from "@vana/react";
import { revise } from "vana";

// An editor for a single property in the given state.
export function Publisher(props) {
  const value = useObserved(props.state, props.name);
  console.log("Publisher.render:", { name: props.name, value });
  return (
    <input
      value={value}
      onChange={e => revise(props.state, { [props.name]: e.target.value })}
    />
  );
}
