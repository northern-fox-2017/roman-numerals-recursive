function to_roman (num) {
  let hasil = ''

  if( num >= 1000){
    hasil += 'M' + to_roman(num - 1000)
    num = 0
  }
  if(num >= 900){
    hasil += 'CM'
    num -= 900
  }
  if(num >= 500){
    hasil += 'D'
    num -= 500
  }
  if(num >= 400){
    hasil += 'CD'
    num -= 400
  }
  if(num >= 100){
    hasil += 'C' + to_roman(num - 100)
    num = 0
  }
  if(num >= 90){
    hasil += 'XC'
    num -= 90
  }
  if(num >= 50){
    hasil += 'L'
    num -= 50
  }
  if(num >= 40){
    hasil += 'XL'
    num -= 40
  }
  if(num >= 10){
    hasil += 'X' + to_roman(num - 10)
    num = 0
  }
  if(num >= 9){
    hasil += 'IX'
    num -= 9
  }
  if(num >= 5){
    hasil += 'V'
    num -= 5
  }
  if(num >= 4){
    hasil += 'IV'
    num -= 4
  }
  else if(num < 4 && num > 0){
    hasil += 'I' + to_roman(num-1)
  }

  return hasil
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
