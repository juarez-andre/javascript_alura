const nomes = [ 'João', 'Ana',
'Paulo', 'Andre', 'Guilherme', 'Juliana']

const sala1 = nomes.slice(0, nomes.length/2) // Onde começa - onde termina
const sala2 = nomes.slice(nomes.length/2) // Onde começa - final (se eu não especifico o final, ele vai até o final)

console.log(sala1) // 'João', 'Ana', 'Paulo'
console.log(sala2) // 'Andre', 'Guilherme', 'Juliana'
