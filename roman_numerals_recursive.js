function to_roman(input) {
  // start your code here
  var roman = '';

  if (input == 0) {
    return roman
  }

  if (input > 0) {
    if(input >= 1000){
      roman += 'M';
      input -= 1000;
    }
    if(input >= 900){
      roman += 'CM';
      input -= 900;
    }
    if(input >= 500){
      roman += 'D';
      input -= 500;
    }
    if(input >= 400){
      roman += 'CD';
      input -= 400;
    }
    if(input >= 100){
      roman += 'C';
      input -= 100;
    }
    if(input >= 90){
      roman += 'XC';
      input -= 90;
    }
    if(input >= 50){
      roman += 'L';
      input -= 50;
    }
    if(input >= 40){
      roman += 'XL';
      input -= 40;
    }

    if(input >= 10){
      roman += 'X';
      input -= 10;
    }

    if (input == 9) {
      roman += 'IX';
      input -= 9;
    }
    if (input >=5) {
      roman += 'V';
      input -= 5;
    }
    if (input == 4) {
      roman += 'IV';
      input -= 4
    }
    if (input >=1) {
      roman += 'I'
      input -= 1;
    }
  }
  return roman+=to_roman(input);
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
