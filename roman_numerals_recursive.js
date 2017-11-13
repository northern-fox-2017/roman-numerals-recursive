function to_roman (input) {
  if(input >= 1000){
    return 'M' + to_roman(input - 1000)
  } else if (input >= 900 && input < 1000) {
    return 'CM' + to_roman(input - 900)
  } else if (input >= 500 && input < 1000) {
    return 'D' + to_roman(input - 500)
  } else if (input >= 400 && input < 500) {
    return 'CD' + to_roman(input - 400)
  } else if (input >= 100 && input < 500) {
    return 'C' + to_roman(input - 100)
  } else if (input >= 90 && input < 100) {
    return 'XC' + to_roman(input - 90)
  } else if (input >= 50 && input < 100) {
    return 'L' + to_roman(input - 50)
  } else if (input >= 40 && input < 50) {
    return 'XL' + to_roman(input - 40)
  } else if (input >= 10 && input < 50) {
    return 'X' + to_roman(input - 10)
  } else if (input == 9) {
    return 'IX' + to_roman(input - 9)
  } else if (input >= 5 && input < 10) {
    return 'V' + to_roman(input - 5)
  } else if (input >= 4 && input < 5) {
    return 'IV' + to_roman(input - 4)
  } else if (input > 0 && input < 4) {
    return 'I' + to_roman(input - 1)
  } else if (input == 0){
    return ''
  }
}

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
