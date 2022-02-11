import { useState } from "react";
import Buttons from "./components/buttons";
function App() {
  const [calcString, setCalcString] = useState("");
  const [roman, setRoman] = useState(false);

  return (
    <main>
      <div className="display">
        <div className="upper">
          <div className="history"></div>
          <span className="ans"></span>
        </div>
        <div className="lower">
          <span className="main-display">{calcString}</span>
        </div>
      </div>
      <div className="buttons">
        <Buttons roman={roman} setRoman={setRoman} />
      </div>
    </main>
  );
}

export default App;
