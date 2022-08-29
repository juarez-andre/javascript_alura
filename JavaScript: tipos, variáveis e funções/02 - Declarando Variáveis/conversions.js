// tipo de dado
// booleanos

// conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString) // true

console.log(numero + numeroString) // 456456

// conversão explícita

    // Number()

        console.log(numero + Number(numeroString)) // 912
        console.log(Number("234a")) // NaN

    // String()

        console.log(String(12)) // "12"
        console.log(numero.toString()) // "456"
