import { useState } from "react";
import Buttons from "./components/buttons";
function App() {
  const [calcString, setCalcString] = useState("");
  let eql = "";
  const [roman, setRoman] = useState(false);

  return (
    <main>
      <div className="display">
        <span className="mainDisplay">{eql || calcString}</span>
      </div>
      <div className="buttons">
        <Buttons
          roman={roman}
          setRoman={setRoman}
          calcString={calcString}
          setCalcString={setCalcString}
          eql={eql}
        />
      </div>
    </main>
  );
}

export default App;
