const notas = [10, 6, 8]
notas.push(7) // Adiciona a nota 7 no FINAL do array. Equivale ao append no Python

let media = (notas[0], notas[1], notas[2], notas[3])/notas.length

console.log(media) // 7.75

notas.push() 

console.log(media) // NaN -  pois o push sem parâmetro adiciona um undefined ao array

