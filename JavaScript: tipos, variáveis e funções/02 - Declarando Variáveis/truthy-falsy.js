// boolean

const usuarioLogado = true
const contapaga = false

// truthy ou falsy -> não são booleanos mas se comportam como se fossem

// 0 => false
// 1 => true

console.log(0 == false) // true
console.log("" == false) // true
console.log(1 == true) // true
console.log("a" == true) // true

// undefined

// null ==> vazio ou nada

let minhaVar;
let varNull = null;

console.log(minhaVar) // undefined
console.log(varNull) // null

let numero = 3;
let texto = "Alura";

console.log(typeof numero) // Number
console.log(typeof texto) // String
console.log(typeof minhaVar) // Undefined 
console.log(typeof varNull) // object - quando o Javascript foi criado, o null foi criado como objeto, ao invés de null. Eles não vão alterar isso pois isso quebraria muitas aplicações existentes.

// o null é um tipo especial, pois pode ser traduzido como “ausência de valor” e pode ser atribuído como valor de uma variável:

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

let input2 = null;
let input3;

console.log(input2); // null
console.log(input3); // undefined

// undefined também é o valor retornado por uma função que não tem cláusula return. 