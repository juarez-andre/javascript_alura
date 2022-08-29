// tipo Number

const n1 = 1;
const n2 = 0;

const operacao = n1 / n2; // Infinity
console.log(operacao)

// Divisão por zero não é um erro em JavaScript: ele simplesmente retorna “Infinity”. No entanto, há uma exceção: zero dividido por zero não tem um valor bem definido e o resultado dessa operação é o valor especial não numérico NaN.

// ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = numeroPontoFlutuante / pontoFlutuanteSemZero;

console.log(novaOperacao)

// NaN -> Not A Number (não é um número)
// Quando o resultado de uma operação dá NaN, significa que o Javascript não está reconhecendo alguma parte daquela operação como um número

const alura = "Alura";
console.log(alura * n1)

