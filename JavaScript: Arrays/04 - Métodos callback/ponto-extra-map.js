const notas = [10, 9, 8, 7, 6, 0]

const notasAtualizadas = notas.map( nota => nota == 0 ? nota : ++ nota)

console.log(notasAtualizadas) // [ 11, 10, 9, 8, 7 ]