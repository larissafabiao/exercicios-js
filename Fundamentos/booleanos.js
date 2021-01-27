//tipos booleanos literais (true e false)
let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

//Utilizando valores
isAtivo = 1;
//as exclamações duplas nos mostram o tipo se é verdadeiro ou falso, um sozinho inverte o valor obtido
console.log(!!isAtivo);

console.log('ps verdadeiros.. ');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'texto');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('os falsos.. ');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('para finalizar..');
console.log('' || null || 0 || ' ');

let nome = 'Lucas';
//caso o valor de nome não esteja disponível, será usado o segundo valor
console.log(nome || 'Desconhecido')