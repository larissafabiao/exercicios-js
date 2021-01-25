const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));
z
const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total =  avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2)

console.log(media.toFixed(2));
console.log(media.toString(2)); //converte o valor de media para binário
console.log(typeof media);

// JS possui o tipo Infinity
console.log(7 / 0);

// Por ter tipagem fraca, podemos fazer a seguinte operação
comsole.log("10" / 2);

// É exibido uma mensagemd e erro caso tente realizar uma operação com algo que não seja um número
console.log("Show" * 2);

// Pode ocorrer erro devido a imprecisão em alguns calculos
console.log(0.1 + 0.7)



