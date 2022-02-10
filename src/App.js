import { useState } from "react";

function App() {
  const [calcString, setCalcString] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.currentTarget);
  }
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
      <form className="buttons" onSubmit={handleSubmit}>
        <div></div>
        <div></div>
        <button className="function blue roman">IIVX</button>
        <button className="function clear">CE</button>
        <button className="number" value="1">
          1
        </button>
        <button className="number">2</button>
        <button className="number">3</button>
        <button className="function">+</button>
        <button className="number">4</button>
        <button className="number">5</button>
        <button className="number">6</button>
        <button className="function">×</button>
        <button className="number">7</button>
        <button className="number">8</button>
        <button className="number">9</button>
        <button className="function">-</button>
        <button className="number">0</button>
        <button className="number">.</button>
        <button className="function blue">=</button>
        <button className="function">/</button>
      </form>
    </main>
  );
}

export default App;
