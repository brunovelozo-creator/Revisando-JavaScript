let usuario = {
    nome: "João Silva",
    idade: 20,
    email: "joao.silva@gmail.com",
    ativo: true
}

console.log("Nome: ", usuario.nome)
console.log("Email: ", usuario.email)

if (usuario.idade >= 18) {
    console.log("O usuário é maior de idade.")
} else {
    console.log("O usuário é menor de idade.")
}