// findIndex - faz a busca e retorna o index da primeira ocorrencia.
// caso não encontre vai retornar: -1

const array = ['a', 'b', 'c', 'd', 'e'];

// encontra
console.log(array.findIndex(elemento => elemento == 'b'));

// não encontra
console.log(array.findIndex(elemento => elemento == 'f'));