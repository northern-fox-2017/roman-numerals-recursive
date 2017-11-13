function to_roman (num) {
  if(num === 0){
    return '';
  }else{
    var romanObj = {
  	1:'I',
  	5:'V',
  	10:'X',
  	50:'L',
  	100:'C',
  	500:'D',
  	1000:'M'
  	}
  	var arr = '';
  	if(num >= 1000){
  	  arr = romanObj[1000];
  	  num = num - 1000;
  	}else if(num >=500){
  	  arr = romanObj[500];
  	  num = num - 500;
  	}else if(num >= 400){
  	  arr = 'CD';
  	  num = num - 400;
  	}else if(num >= 100){
  	  arr = romanObj[100];
  	  num = num - 100;
  	}else if(num >= 50){
  	  arr = romanObj[50];
  	  num = num - 50;
  	}else if(num >= 40){
  	  arr = 'XL';
  	  num = num - 40;
  	}else if(num >= 10){
  	  arr = romanObj[10];
  	  num = num - 10;
  	}else if(num >= 9){
  	  arr = 'IX';
  	  num = num - 9;
  	}else if(num >= 5){
  	  arr = romanObj[5];
  	  num = num - 5;
  	}else if(num >= 4){
  	  arr = 'IV';
  	  num = num - 4;
  	}else if(num >= 1){
  	  arr = romanObj[1];
  	  num = num - 1;
  	}
  	return arr + to_roman(num);
  	
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
