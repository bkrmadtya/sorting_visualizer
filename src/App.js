import React, { useState } from "react";

import BarContainer from "./components/BarContainer";

function App() {
  const [array, setArray] = useState([100, 200, 300]);
  return (
    <div>
      <h1>Sorting Algorithm Visualizer</h1>
      <BarContainer array={array} />
    </div>
  );
}

export default App;
