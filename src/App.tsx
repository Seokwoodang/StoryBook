import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./stories/Button";

function App() {
  return (
    <div className="App">
      <div style={{ display: "grid", gap: "5px" }}>
        <Button
          label="primary_large"
          theme="primary"
          size="large"
          shape="rectangular"
        />
        <Button
          label="hello"
          theme="primaryOutline"
          size="small"
          shape="rectangular"
        />
        <Button
          label="hello"
          theme="primaryClear"
          size="small"
          shape="rectangular"
        />
        <Button
          label="hello"
          theme="secondary"
          size="small"
          shape="rectangular"
        />
        <Button label="hello" theme="danger" size="small" shape="rectangular" />
        <Button
          label="hello"
          theme="dangerOutline"
          size="small"
          shape="rectangular"
        />
        <Button
          label="hello"
          theme="inversedOutline"
          size="small"
          shape="rectangular"
        />
      </div>
    </div>
  );
}

export default App;
