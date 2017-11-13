function to_roman(input) {
  var decimal = [1, 4, 5, 9, 10, 40, 50, 100, 400, 500, 1000];
  var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'C', 'CD', 'D', 'M'];
  var result = '';

  if (input === 0) {
    return result;
  } else {
    for (var i = decimal.length - 1; i >= 0; i--) {
      if (decimal[i] <= input) {
        position = decimal.indexOf(decimal[i]);
        result += roman[position];
        input -= decimal[i];
      }
    }
  }

  return result + to_roman(input);
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))