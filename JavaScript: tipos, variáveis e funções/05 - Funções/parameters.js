function soma(numero1, numero2) {
    return numero1 + numero2
}

console.log(soma()) // NaN
console.log(soma(2, 2)) // 4

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade(40, "Juliana")) // Meu nome é 40 e minha idade é Juliana

function multiplica(numero1, numero2) {
    return numero1 * numero2
}

                        // 9            // 6
console.log(multiplica(soma(4, 5), soma(3, 3))) // 54

console.log(multiplica(soma(4, 5))) // NaN => pois só foi passado 1 parâmetro, quando deveria ter sido passado 2

// Funções com parâmetros default

function subtrai(numero1, numero2 = 2) {
    return numero1 - numero2
}

console.log(subtrai(2))

// Exemplo que retorn undefined

function comParametro(param) {
    console.log(param)
}
comParametro()