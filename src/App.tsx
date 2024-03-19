import React, { useState } from "react";
import "./App.css";
import { Button } from "./stories/Button";
import CheckBox from "./stories/CheckBox";

function App() {
  const [checkOne, setCheckOne] = useState<boolean>(false);
  const [checkTwo, setCheckTwo] = useState<boolean>(true);
  const [checkThree, setCheckThree] = useState<boolean>(false);

  return (
    <div className="App">
      <div style={{ display: "grid", gap: "5px" }}>
        <Button
          label="primary_large"
          theme="primary"
          size="large"
          shape="rectangular"
        />
        <CheckBox
          checked={checkOne}
          setChecked={setCheckOne}
          theme="primary"
          disabled={false}
        />
        <CheckBox
          checked={checkThree}
          setChecked={setCheckThree}
          theme="danger"
          disabled={false}
        />
        <CheckBox
          checked={checkTwo}
          setChecked={setCheckTwo}
          theme="primary"
          disabled={true}
        />
        <CheckBox
          checked={checkTwo}
          setChecked={setCheckTwo}
          theme="danger"
          disabled={true}
        />
      </div>
    </div>
  );
}

export default App;
