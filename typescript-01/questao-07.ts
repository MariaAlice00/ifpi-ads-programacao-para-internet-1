/*
Dado método filter dos arrays, crie uma implementação usando arrow function que filtre todos os 
elementos pares do array
*/
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var pares = array.filter(num => num % 2 == 0);
console.log(pares)