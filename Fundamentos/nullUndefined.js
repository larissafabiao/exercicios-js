let valor //não inicializamos 
console.log(valor); //É undefined pois nunca a inicializamos
//console.log(valor2); //Exibe uma mensagem diferente, cuidado que é diferente de undefined, nesse caso a variável nem foi instanciada

valor = null //ausência de valor porém definimos que ela não aponta nenhum objeto na memória
console.log(valor);
// console.log(valor.toString) Gera um erro pois valor não aponta para nenhum objeto

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)