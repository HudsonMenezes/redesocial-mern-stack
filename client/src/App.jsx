import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="blur"></div>
      <div className="blur"></div>
    </div>
  );
}

export default App;
