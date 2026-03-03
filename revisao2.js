let produtos = ["Arroz", "Feijão", "Açúcar", "Macarrão", "Alface"];

console.log("Todos os produtos:");
for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
}

console.log("Produtos que começam com A:");
for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].startsWith("A")) {
        console.log(produtos[i]);
    }
}