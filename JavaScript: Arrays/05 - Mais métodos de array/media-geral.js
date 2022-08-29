const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notaDaSala) {
    const somaDasNotas = notaDaSala.reduce((acum, atual) =>
    atual + acum,0) // o 0 diz respeito ao valor inicial do acumulador, que no caso é 0
    return somaDasNotas/notaDaSala.length
}

console.log(`Média da sala de Javascript: ${mediaSala(salaJS)}`) // Média da sala de Javascript: 7.5
console.log(`Média da sala de Java: ${mediaSala(salaJava)}`) // Média da sala de Javascript: 6.5
console.log(`Média da sala de Python: ${mediaSala(salaPython)}`) // Média da sala de Javascript: 7


const notas = [10, 6.5, 8, 7]
const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length

console.log(media) // 7.875