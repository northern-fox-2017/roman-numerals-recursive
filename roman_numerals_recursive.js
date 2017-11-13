
function to_roman(input) {
  // start your code here
  if (input===0){
    return '';
  }else{
    if(input>1000){
      input-=1000
      roman ='M'
    }else if(input>=900&&input<1000){
      input-=900
      roman ='CM'
    }else if(input>=500&&input<900){
      input-=500
      roman ='D'
    }else if(input>=400&&input<500){
      input-=400
      roman ='CD'
    }else if(input>=100&&input<400){
      input-=100
      roman ='C'
    }else if(input>=90&&input<100){
      input-=90
      roman ='XC'
    }else if(input>=50&&input<90){
      input-=50
      roman ='L'
    }else if(input>=40&&input<50){
      input-=40
      roman ='XL'
    }else if(input>=10&&input<40){
      input-=10
      roman ='X'
    }else  if(input>=9&&input<10){
      input-=9
      roman ='IX'
    }else  if(input>=5&&input<9){
      input-=5
      roman ='V'
    }else  if(input>=4&&input<5){
      input-=4
      roman ='IV'
    }else  if(input>0&&input<4){
      input-=1
      roman ='I'
    }
    return roman + to_roman(input); 
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
