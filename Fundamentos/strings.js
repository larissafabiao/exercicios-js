const escola = "Cod3r";

//chatAt conta o primeiro caracter da palavra como 0
//retorna r
console.log(escola.charAt(4));

//retorna um valor vazio e não um erro
console.log(escola.charAt(5));

//retorna o valor ascii/unicode do caracter
console.log(escola.charCodeAt(3));

console.log(escola.indexOf('3'));

//retorna uma substring do caracter na posição 1 até a posição final
console.log(escola.substring(1));

//retorna uma substring do caracter na posição 0 até o na posição 3
console.log(escola.substring(0, 3));

console.log('Escola '.concat(escola).concat("!"));

//substitui um valor igual a 3 para e
console.log(escola.replace(3, 'e'));

//substitui tudo para e
console.log(escola.replace(/\w/g, 'e'));

//podemos converter uma string com valores separados por um separador(no caso uma virgula) em um aray
console.log('Ana,Maria,Pedro'.split(','));

//ele vai concatenar as strings e não somar pois as strings tem preferencia com relação a operação de soma
console.log('3' + 2);