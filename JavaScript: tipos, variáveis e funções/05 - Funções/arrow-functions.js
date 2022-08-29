const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Detalhes de arrow functions => não pode ser nomeada e sempre vem com uma const seguida do nome da variável (apresentarArrow)

// Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10|| num2 > 10) {
        return "somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(2, 2)) // 4

//  Hoisting: arrow functions se comporta como expressão