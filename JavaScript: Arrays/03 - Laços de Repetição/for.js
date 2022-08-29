const numeros = [100, 200, 300, 400, 500, 600]

    // Inicial  // Final           // +1
for (let i = 0; i < numeros.length; i ++) {
    console.log(i, numeros[i])
}

/* CASOS DE LOOP INFINITO 

// SEM O TERCEIRO PARÂMETRO
for (let i = 1; i < 10; ){
    console.log(i) // 1 1 1 1 1 1 1 1 1 1 1 1 1...
}

// SEM O SEGUNDO PARÂMETRO
for (let i = 1; ; i++){
    console.log(i)} // 1 2 3 4 5 6 7 8 9 10 11 12 13... 
}

// ALTERANDO A VARIÁVEL DE CONTROLE DENTRO DO BLOCO DO FOR
for (let i = 0; i < 10; i++){
    i--
    console.log(i) // -1 -1 -1 -1 -1 -1...
   }

*/


