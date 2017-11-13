// CARA KURANG KEREN

function to_roman(angka) {
  let hasil = '';

  if(angka === 0) {
    return hasil
  }
    if(angka >= 1000) {
      hasil = hasil + 'M';
      angka = angka - 1000;
    } else if(angka >= 900) {
        hasil = hasil + 'CM';
        angka = angka - 900;
    } else if(angka >= 500) {
        hasil = hasil + 'D';
        angka = angka - 500;
    } else if(angka >= 400) {
        hasil = hasil + 'CD';
        angka = angka - 400;
    } else if(angka >= 100) {
        hasil = hasil + 'C';
        angka = angka - 100;
    } else if(angka >= 90) {
        hasil = hasil + 'XC';
        angka = angka - 90;
    } else if(angka >= 50) {
        hasil = hasil + 'L';
        angka = angka - 50;
    } else if(angka >= 40) {
        hasil = hasil + 'XL';
        angka = angka - 40;
    } else if(angka >= 10) {
        hasil = hasil + 'X';
        angka = angka - 10;
    } else if(angka >= 9) {
        hasil = hasil + 'IX';
        angka = angka - 9;
      } else if(angka >= 5) {
        hasil = hasil + 'V';
        angka = angka - 5;
    } else if(angka >= 4) {
        hasil = hasil + 'IV';
        angka = angka - 4;
    } else if(angka >= 1) {
        hasil = hasil + 'I';
        angka = angka - 1;
    }

  return hasil + to_roman(angka);
}

// CARA KERENN

// function romanNumerals(angka) {
//   let arabic = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
//   let roman  = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
//   let hasil  = '';
//
//   if(angka === 0) {
//     return hasil;
//   } else {
//     for(let i = arabic.length -1 ; i >= 0 ; i--) {
//       while(angka >= arabic[i]) {
//         hasil = hasil + roman[i];
//         return hasil + romanNumerals(angka - arabic[i]);
//       }
//     }
//   }
// }
//
// console.log(romanNumerals(97));

console.log('My totally sweet testing script for new roman\n')
console.log('input |   expected   | actual')
console.log('——————|  ——————————  |————————')
console.log('4     | IV           | ', to_roman(4))
console.log('9     | IX           | ', to_roman(9))
console.log('13    | XIII         | ', to_roman(13))
console.log('1453  | MCDLIII      | ', to_roman(1453))
console.log('1646  | MDCXLVI      | ', to_roman(1646))
console.log('1646  | MMMMMDCXLVI  | ', to_roman(5646))
