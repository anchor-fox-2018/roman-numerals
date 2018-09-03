// 1    I
// 5    V
// 10   X
// 50   L
// 100  C
// 500  D
// 1000 M

function toRoman(num) {
  var angka = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'XM', 'M'];
  var result = '';
  var remaining = num;

  for (var i = angka.length - 1; i >= 0; i--) {
    while (angka[i] <= remaining) {
      result += roman[i];
      remaining -= angka[i];
    }
  }
  return result;
}

console.log('My totally sweet testing script\n');
console.log('input | expected | actual');
console.log('4     | IV       | ', toRoman(4));
console.log('9     | IX       | ', toRoman(9));
console.log('23    | XXIII    | ', toRoman(23));
console.log('1453  | MCDLIII  | ', toRoman(1453));
console.log('1646  | MCDXLVI  | ', toRoman(1646));
