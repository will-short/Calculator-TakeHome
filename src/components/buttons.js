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

export default function Buttons({ roman, setRoman }) {
  function handleClick(e) {
    if (e.target.innerText.length === 4) return setRoman(!roman);
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
            {val}
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
