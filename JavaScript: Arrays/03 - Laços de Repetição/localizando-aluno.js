const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10, 7, 9, 6]

// includes => booleano
// indexOF => Number

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + `, sua média é ${listaDeNotasEAlunos[1][indice]}`
    } else {
        return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("Ana")) // Ana, sua média é 6

console.log(exibeNomeNota("Pedro")) // Aluno não está cadastrado