const nomes = ["Ana", "Ju", "Leo", "Paula"]

nomes.forEach(ImprimeNomes) // Ana Ju Leo Paula

function ImprimeNomes(nome) {
    console.log(nome)
}

// Lembrando que a função forEach também aceita um segundo parâmetro , que seria o indice (opcional) e outro terceiro parâmetro, que seria o array (opcional)

nomes.forEach((nome, indice, array) => {
    console.log(nome, indice, array)

})