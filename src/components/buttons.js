import {
  handleRoman,
  romanExpressionToInt,
  intExpressionToRoman,
  intToRoman,
  romanToInt,
} from "./utils";

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
  function handleClick(e) {
    if (e.target.innerText.length === 4) {
      if (eql) {
        if (!roman) {
          eql = intToRoman(eql);
        } else {
          eql = romanToInt(`${eql}`);
        }
      } else {
        if (!roman) {
          setCalcString(intExpressionToRoman(calcString));
        } else {
          setCalcString(romanExpressionToInt(`${calcString}`));
        }
      }
      return setRoman(!roman);
    }
    if (e.target.innerText === "CE") {
      eql = "";
      return setCalcString("");
    }
    if (e.target.innerText === "=") {
      if (roman) {
        eql = handleRoman(calcString);
        return setCalcString(`${eql}`);
      } else {
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
