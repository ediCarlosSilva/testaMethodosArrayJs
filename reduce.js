// reduce - médodo que recebe uma função com dois valores
// o primeiro é um acumlador 
// e o segundo é um parametro que ele pode utilizar para fazer uma multiplicação, soma, etc

const array = [1, 2, 3, 4];

// fazendo uma multiplicação com acumulativo. Similar ao fatorial
console.log(array.reduce((total, value) => total * value));
