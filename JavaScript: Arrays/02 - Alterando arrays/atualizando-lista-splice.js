const listaDeChamada = [
    'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'
]

// Objetivo: remover Ana e Caio

listaDeChamada.splice(1, 2, 'Pedro') // João, Pedro, Lara, Marjorie, Leo

listaDeChamada.splice(2, 0, 'Rodrigo') // Caso eu coloque 0 no primeiro parâmetro, ele não excluirá nada, apenas irá adicionar

console.log(`Lista de chamada: ${listaDeChamada}`) // Lista de chamada: João, Ana, Rodrigo, Caio, Lara, Marjorie, Leo