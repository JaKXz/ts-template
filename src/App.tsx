import * as React from "react";
import "./styles.css";

import { Events } from "./Events";
import { EVENTS } from "./data";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {EVENTS.length > 0 ? <Events list={EVENTS} /> : "There were no events :("}
    </div>
  );
}
