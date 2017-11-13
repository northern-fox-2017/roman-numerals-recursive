function to_roman(input) {
  //Buat komparasi yang unik dari roman dan arabic numerals
    var arabic = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    let result =''
    debugger
    for(i = 0; i < arabic.length; i++){
      if(input==0){
        return '';
      }else if(input>=arabic[i]){
        input-=arabic[i]
        result += roman[i]
        return result + to_roman(input);
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
