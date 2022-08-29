// Por que se chama operador ternário? => Ternário pois possui 3 comparadores: =, >= e if/else

const idadeMinima = 18; // =
const idadeCliente = 16;

if (idadeCliente >= idadeMinima) { // >= e if
    console.log("cerveja")
} else {
    console.log("suco")
}

// Outra forma

            // condição                   // true     //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")

// else if

const num = 15;

if (num >= 0 && num <= 10) {
  console.log('número entre zero e dez');
} else if (num > 10 && num <= 20) {
  console.log('número entre dez e vinte');
} else if (num > 20 && num <= 30) {
  console.log('número entre vinte e trinta');
} else {
  console.log('outro número');
}