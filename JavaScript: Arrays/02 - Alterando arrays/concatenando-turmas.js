const salaDePython = ["Melissa", "Helena", "Rodrigo"]

const salaDeJavascript = ["Ju", "Leo", "Raquel"]

const salasUnificadas = salaDePython.concat(salaDeJavascript)

console.log(salasUnificadas) // [ 'Melissa', 'Helena', 'Rodrigo', 'Ju', 'Leo', 'Raquel' ]

// Importante ressaltar que a concatenação por padrão não cria lista com duas dimensões, a não ser que haja duplo colchete no objeto a ser concatenado. Exemplo:
// const pessoas = ["Fabio", "Carlos", "Isadora"]
// const variasPessoas = pessoas.concat(["Pedro", "Julia", "Hugo"]) // ["Fabio", "Carlos", "Isadora", "Pedro", "Julia", "Hugo"]
// const variasPessoas = pessoas.concat(["Pedro", ["Julia", "Hugo"]]) // ["Fabio", "Carlos", "Isadora", "Pedro", ["Julia", "Hugo"]]