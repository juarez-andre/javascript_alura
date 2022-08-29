// Lista com duas dimensões são arrays que contêm arrays, podendo ter um único array ou vários dentro do principal.

const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

console.log(listaDeNotasEAlunos) // [ [ 'João', 'Juliana', 'Caio', 'Ana' ], [ 10, 7, 9, 6 ] ] => Exemplo de lista com 2 dimensões

console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`) // João, sua média é 10

