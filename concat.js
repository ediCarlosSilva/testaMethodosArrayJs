// método concat concatena array em outro

const array = [5, 3, 1, 2, 4];

const array2 = [6, 7, 8, 9, 10];

console.log(array.concat(array2));

// concatenar e colocar em ordem
console.log(array.concat(array2).sort((a, b) => a - b));