import React, { useState } from "react";
import CheckBox from "./components/CheckBox";

function App() {
  const [checkBoxDisabled, setCheckBoxDisabled] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="App">
      <CheckBox checked={checked} onClick={() => setChecked(!checked)} />
    </div>
  );
}

export default App;
