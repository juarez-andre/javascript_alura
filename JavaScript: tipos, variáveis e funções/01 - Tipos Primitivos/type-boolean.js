// tipo Boolean

// == -> Comparação apenas de valor
// === -> Comparação de tipos

const n1 = 5;
const n2 = 10;

console.log(n1 === n2); // false

const texto1 = "Alura";
const texto2 = "a";

console.log(texto1 === texto2) // false

const idade = 2;
const dezAnosDepois = "12";

console.log(typeof (idade + dezAnosDepois)) // 212 (em formato string)

const bacharel = true;

console.log(bacharel == 1) // true
console.log(bacharel === 1) // false
console.log(bacharel == 0) // false

// Javascript é uma linguagem case-sensitive, como podemos ver a seguir:

const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)

