// tipo String

const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhasupersegura123456!";
const StringdeNumeros = "34567";

const citacao = "O Leo disse 'oi'";

console.log(citacao)

// concatenação (+)

const frase = "Meu nome é ";
const meuNome = "Leonardo";

console.log(frase + meuNome)

// Comparando strings

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false
console.log(cidade == input); // false

const numero1 = 5
const numero2 = "5"

console.log(numero1 === numero2); // false
console.log(numero1 == numero2); // true

// Padrão Unicode (UTF-8): Podemos testar a transformação/conversão do código Unicode em caractere utilizando o console.log() fazendo o seguinte teste

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// template string OU template literal

