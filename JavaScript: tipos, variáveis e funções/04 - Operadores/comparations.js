// == (comparação implícita) => compara o valor

const numero = 5;
const texto = "5";

console.log(numero == texto) // true

// == (comparação explícita) => compara o valor e o tipo de dado

console.log(numero === texto) // false

// typeof

console.log(typeof numero) // number
console.log(typeof texto) // string

// != e !==

console.log(1 != '1') // false
console.log(1 !== '1') // true