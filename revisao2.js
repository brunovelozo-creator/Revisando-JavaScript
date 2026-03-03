let produtos = ["Arroz", "Feijão", "Açúcar", "Macarrão", "Alface"];
let letra = "A"

const resultado = produtos.filter((produto) => produto.startsWith(letra));
console.log(resultado);