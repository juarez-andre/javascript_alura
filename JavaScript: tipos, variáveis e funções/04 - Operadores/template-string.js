const nome = "Ju";
const idade = 2021-1981;
const cidadeDeNascimento = "São Paulo";
let apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;
console.log(apresentacao)

// Para não ter que escrever da forma acima, fazemos da seguinte forma:

// Isso é um exemplo de TEMPLATE STRING, mas não necessariamente todas as string delimitadas com acento crase serão template strings.
apresentacao = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}` // é necessário estar dentro de CRASE!!

console.log(apresentacao)

// OBS: essa nova concatenação surgiu no ES6 :)
