// expressão de função

const soma = function(num1, num2) { return num1 + num2}
console.log(soma(1, 1))

// diferença principal

console.log(apresentar()) // Olá

function apresentar() {
    return "Olá";
}

console.log(multiplica(5, 5)) /* ReferenceError: cannot acess 'multiplica' before inicialization. Ocorre porque a função 'multiplica' faz uso de uma const,
que por sua vez ainda não tinha sido inicializada. Funções e var são "listadas" antes da execução para gerar um contexto de execução (Hoisting) */
const multiplica = function(num1, num2) { return num1 * num2}