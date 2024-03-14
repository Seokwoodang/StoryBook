import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./stories/Button";

function App() {
  return (
    <div className="App">
      <div style={{ display: "grid", gap: "5px", backgroundColor: "yellow" }}>
        <Button
          label="primary_large"
          theme="primary"
          size="large"
          shape="rectangular"
        />
        <Button
          label="hello"
          theme="primary_outline"
          size="small"
          shape="rectangular"
        />
        <Button
          label="hello"
          theme="primary_clear"
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
          theme="danger_outline"
          size="small"
          shape="rectangular"
        />
        <Button
          label="hello"
          theme="inversed_outline"
          size="small"
          shape="rectangular"
        />

        <Button
          label="primary_large"
          theme="primary"
          size="large"
          shape="oval"
        />
        <Button
          label="hello"
          theme="primary_outline"
          size="small"
          shape="oval"
        />
        <Button
          label="hello"
          theme="primary_clear"
          size="small"
          shape="rectangular"
        />
        <Button label="hello" theme="secondary" size="small" shape="oval" />
        <Button label="hello" theme="danger" size="small" shape="oval" />
        <Button
          label="hello"
          theme="danger_outline"
          size="small"
          shape="oval"
        />
        <Button
          label="hello"
          theme="inversed_outline"
          size="small"
          shape="oval"
        />
      </div>
    </div>
  );
}

export default App;
