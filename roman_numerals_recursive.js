function to_roman(input) {
  let latin  = ['M','D','DC' ,'C','L','XL','X','IX','V','IV','I'];
  let number = [1000,500,400,100,50,40,10,9,5,4,1];
  let result = '';
  if(input == 0) return result;
  else{
    for(let i in latin){
      if(input >= number[i]){
          result += latin[i];
          input  -= number[i]
          return result += to_roman(input)
      }
    }
  }

}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
