//forma literal de criar um objeto em JS
const prod1 = {}

//A chave nome será criada automaticamente dentro do objeto 
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        valor: 2,
        obj: {
            tipo: 'mesa'
        }
    }
}

console.log(prod2)