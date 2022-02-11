const symbols = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

export function romanToInt(s) {
  let value = 0;
  for (let i = 0; i < s.length; i++) {
    const pair = s[i + 1] ? s[i] + s[i + 1] : "";
    if (symbols[pair]) {
      value += symbols[pair];
      i++;
    } else value += symbols[s[i]];
  }
  return value;
}

export function intToRoman(int) {
  let roman = "";
  for (const [symbol, value] of Object.entries(symbols)) {
    if (value <= int) {
      while (int - value >= 0) {
        int -= value;
        roman += symbol;
      }
    }
  }
  return roman;
}
export function handleRoman(calcString) {
  let convert = calcString.split(/( . )/);
  let converted = convert.map((s) => {
    if (s.match(/( . )/)) return s;

    return romanToInt(s);
  });
  let intRes = Math.round(eval(converted.join("")));

  return intToRoman(intRes);
}
export function romanExpressionToInt(calcString) {
  let convert = calcString.split(/( . )/);
  let converted = convert.map((s) => {
    if (s.match(/( . )/)) return s;

    return romanToInt(s);
  });

  return converted.join("");
}

export function intExpressionToRoman(calcString) {
  let convert = calcString.split(/( . )/);
  let converted = convert.map((s) => {
    if (s.match(/( . )/)) return s;

    return intToRoman(+s);
  });

  return converted.join("");
}
