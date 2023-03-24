// método sort serve para ordenar o array

const array = [5, 3, 1, 2, 4];

// ordenar do menor para o maior - ordem crescente
console.log(array.sort((a, b) => a - b));

// ordenar do maior para o menor - ordem decrescente
console.log(array.sort((a, b) => b - a));