function to_roman(input) {
  var num = input
  var str = ''
  if (num === 0) {
    return ''
  }
  if (num >= 1000) {
    num -= 1000
    str += 'M'
  } else if (num >= 500 && num < 1000) {
    num -= 500
    str += 'D'
  } else if (num >= 400 && num < 500) {
    num -= 400
    str += 'CD'
  } else if (num >= 100 && num < 400) {
    num -= 100
    str += 'C'
  } else if (num >= 90 && num < 100) {
    num -= 90
    str += 'XC'
  } else if (num >= 50 && num < 90) {
    num -= 50
    str += 'L'
  } else if (num >= 40 && num < 50) {
    num -= 40
    str += 'XL'
  } else if (num >= 10 && num < 40) {
    num -= 10
    str += 'X'
  } else if (num === 9) {
    num -= 9
    str += 'IX'
  } else if (num >= 5 && num < 10) {
    num -= 5
    str += 'V'
  } else if (num === 4) {
    num -= 4
    str += 'IV'
  } else if (num >= 1 && num < 4) {
    num -= 1
    str += 'I'
  }

  return str + to_roman(num);
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
