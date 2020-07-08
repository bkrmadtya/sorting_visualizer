import React, { useState } from "react";

import BarContainer from "./components/BarContainer";

function App() {
  const [array, setArray] = useState([1, 2, 3]);
  return (
    <div>
      <h1>Sorting Algorithm Visualizer</h1>
      <BarContainer array={array} />
    </div>
  );
}

export default App;
