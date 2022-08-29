let x = "";
console.log(x)
x = "oi";

// 1) declara função

function imprimeTexto(texto) {
    console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimeTexto("oi");

// três formas de escxrever funções

function soma() {
    const resultado = 2 + 2;
}

console.log(soma()) // undefined - pois a função não está RETORNANDO nada

function soma() {
    const resultado = 2 + 2;
    return resultado
}

console.log(soma()) // 4

// Função dentro de outra função

imprimeTexto(soma()); // 4

