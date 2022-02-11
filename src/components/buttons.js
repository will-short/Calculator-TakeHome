const numericButtons = [
  "IIVX",
  "CE",
  1,
  2,
  3,
  " + ",
  4,
  5,
  6,
  " * ",
  7,
  8,
  9,
  " - ",
  0,
  ".",
  "=",
  " / ",
];
const romanButtons = [
  "1234",
  "CE",
  "I",
  "II",
  "III",
  " + ",
  "V",
  "X",
  "L",
  " * ",
  "C",
  "D",
  "M",
  " - ",
  "=",
  " / ",
];

export default function Buttons({
  roman,
  setRoman,
  calcString,
  setCalcString,
  eql,
}) {
  function handleRoman() {
    const symbols = {
      I: 1,
      IV: 4,
      IX: 9,
      V: 5,
      X: 10,
      XL: 40,
      XC: 90,
      L: 50,
      C: 100,
      CD: 400,
      CM: 900,
      D: 500,
      M: 1000,
    };
    let convert = calcString.split(/( . )/);
    let converted = convert.map((s) => {
      if (s.match(/( . )/)) return s;
      let value = 0;
      for (let i = 0; i < s.length; i++) {
        const pair = s[i + 1] ? s[i] + s[i + 1] : "";
        if (symbols[pair]) {
          value += symbols[pair];
          i++;
        } else value += symbols[s[i]];
      }
      return value;
    });
    eql = Math.round(eval(converted.join("")));
    return setCalcString(`${eql}`);
  }

  function handleClick(e) {
    if (e.target.innerText.length === 4) {
      eql = "";
      setCalcString("");
      return setRoman(!roman);
    }
    if (e.target.innerText === "CE") {
      eql = "";
      return setCalcString("");
    }
    if (e.target.innerText === "=") {
      if (roman) return handleRoman();
      else {
        eql = eval(calcString);
        return setCalcString(`${eql}`);
      }
    }
    if (
      calcString &&
      e.target.innerHTML.endsWith(" ") &&
      !calcString.endsWith(".") &&
      !calcString.endsWith(" ")
    ) {
      setCalcString(calcString + e.target.innerHTML);
    } else if (!(e.target.innerHTML[0] === " ")) {
      eql = "";
      setCalcString(calcString + e.target.innerHTML);
    }
  }
  if (roman) {
    return (
      <>
        {romanButtons.map((val, i) => (
          <button
            key={i}
            className={
              val === "=" || val.length === 4
                ? "blue"
                : val.match(/[^A-Z]/g) || val === "CE"
                ? "function"
                : "numeric"
            }
            style={{ gridColumn: val === "=" && "span 3" }}
            onClick={handleClick}
          >
            {`${val}`}
          </button>
        ))}
      </>
    );
  }
  return (
    <>
      {numericButtons.map((val, i) => (
        <button
          key={i}
          className={
            val === "=" || val.length === 4
              ? "blue"
              : isNaN(val)
              ? "function"
              : "numeric"
          }
          onClick={handleClick}
        >
          {val}
        </button>
      ))}
    </>
  );
}
