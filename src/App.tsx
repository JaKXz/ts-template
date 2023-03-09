import * as React from "react";
import "./styles.css";

import { Events } from "./Events";
import { EVENTS } from "./data";

export default function App() {
  return (
    <div className="App">
      {EVENTS.length > 0 ? <Events list={EVENTS} /> : "There were no events :("}
    </div>
  );
}
