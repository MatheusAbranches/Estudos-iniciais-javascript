var x = 1;
var y = 2;

console.log((x = x + y));
console.log((x += y));

//subtração
console.log((x -= y));

//multiplicação
console.log((x *= y));

//divisão
console.log((x /= y));

while (x <= 100) {
  console.log(x);

  x *= 2;
}

console.log(x)