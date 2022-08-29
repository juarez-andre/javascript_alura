const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']
const notas = [7, 4.5, 8, 7.5]

const reprovados = nomes.filter((alunos, indice) => notas[indice] < 5)
// Quando a função callback retorna true o elemento é adicionado no array de retorno, e quando ela retorna falso o elemento é descartado.

console.log(`reprovados; ${reprovados}`)