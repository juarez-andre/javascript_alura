const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

// forEach é um tipo de função callback, pois o parâmetro dessa função é outra função

// notas.forEach(nota => {
// somaDasNotas += nota
// })

// OUTRA FORMA
notas.forEach(function(nota) {
                    // nota[i]
    somaDasNotas += nota
})


let media = somaDasNotas/notas.length

console.log(media) // 8