/* Não compila. Quando atribui o valor 2 a variável 'a', a mesma passa a ser do tipo number, então 
não pode atribuir um novo valor do tipo string */

let a = 10;
a = "2";

/* Compila. Foi atribuido o tipo any (qualquer coisa) a variável 'b', então não há problemas de 
diferenças de tipos nesse caso. */

let b: any = 10;
b = 2;
console.log(b);

/* Compila. A variável 'c' foi atribuída com o tipo number e valor 10, então quando colocou um novo 
valor, também do tipo number, não houve divergências. */

let c: number = 10;
c = 2;
console.log(c);