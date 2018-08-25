function convertToRoman(num) {
  const compare = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M'
  };

  let numberReg = /\d/g;
  let numbers = String(num).match(numberReg);
  let romans = numbers.map((elem, index) => {
    let degree = numbers.length - index - 1;
    degree = Math.pow(10, degree);
    let currentNumber = degree * elem;
    if (compare.hasOwnProperty(currentNumber)) {//400 will be property
      return compare[currentNumber];
    } else {
      let currentInRoman = [];
      for (let i=0; i<elem; i++) {//if it was 2014 we have to repeat M 2 times
        currentInRoman.push(compare[degree]);
      }
      return currentInRoman.join("");
    }
  });

  return romans.join("");
}

console.log(convertToRoman(36));