// var - é a primeira que surgiu no Javascript, funciona basicamente em qualquer parte do código.

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area) // 35
var area;

// Como é mostrado acima, podemos fazer uso de uma var antes de declará-la.

// Hoje em dia var não é mais utilizada, pois ela é muito propensa a bugs. Usamos só const e let (quando sabemos que o valor da variável vai precisar mudar).

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let

let forma = "retângulo"
let altura = 5;
let comprimento = 7;

if (forma === "retângulo") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area) // error: Cannot access 'area' before initialization

let area;

// Outra forma:

let forma = "retângulo"
let altura = 5;
let comprimento = 7;
let area; // Note que a variável está sendo inicializada antes de ser utilizada

if (forma === "retângulo") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area) // 35


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const

/* consts NÃO PODEM TER SEU VALOR ALTERADO. Ou seja, sempre que crimos uma const ela já deve ter um valor. O seguinte código dará erro pois 'area'
não possui um valor inicializado */

const forma = "quadrado";
const altura = 5;
const comprimento = 7;
const area;

if (forma === "quadrado") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area) // error: Missing initializer in const declaration

/* No exemplo acima, há dois erros: 1. uma const está sendo inicializada sem valor e 2. mesmo se ela estivesse sido inicialiazada com um valor, nós
estaríamos tentando alterar seu valor dentro do laço if, o que não é possível pois consts não podem ser alteradas */