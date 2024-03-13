import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./stories/Button";

function App() {
  return (
    <div className="App">
      <div style={{ display: "grid", gap: "5px" }}>
        <Button label="hello" theme="primary" size="small" />
        <Button label="hello" theme="primary_outline" size="small" />
        <Button label="hello" theme="primary_clear" size="small" />
        <Button label="hello" theme="secondary" size="small" />
        <Button label="hello" theme="danger" size="small" />
        <Button label="hello" theme="danger_outline" size="small" />
        <Button label="hello" theme="inversed_outline" size="small" />
      </div>
    </div>
  );
}

export default App;
