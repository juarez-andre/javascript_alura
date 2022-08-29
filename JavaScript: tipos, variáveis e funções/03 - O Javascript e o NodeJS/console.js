// console é uma ferramente presente tanto no node como nos navegadores


// console.table() para visualizar de forma mais organizada informações tabulares;
// console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
// console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.

// log => registro
console.log(245)
console.log("eu sou um texto")

// console.error => a gente usa quando queremos descrever algum erro que a aplicação tenha encontrado
// tratamento de erro!
console.error('deu erro!') // Ao rodar esta linha apenas uma mensagem de erro aparecerá.

/* É sempre importante usarmos o console.log e .error para sabermos o que está acontecendo na nossa aplicação. E a gente espera que eles também sempre estejam
nos módulos e bibliotecas que a gente vier a usar futuramente */