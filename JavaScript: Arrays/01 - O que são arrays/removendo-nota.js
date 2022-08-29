const notas = [10, 7, 8, 5, 10]
notas.pop()
console.log(notas) // [10, 7, 8, 5] - o método pop() remove o último elemento do array

media = (notas[0], notas[1], notas[2], notas[3]) / notas.length

console.log(media) // 7.5

// OBS: note que ao criarmos a variavel media, nós não definimos ela como let ou const ou var. Nesse caso o JS automaticamente considera como var

