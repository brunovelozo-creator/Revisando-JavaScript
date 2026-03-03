function validarSenha(senha) {
    if(senha.length > 8) {
        return "Senha válida"
    }
    else {
        "Senha muito curta"
    }
}

console.log(validarSenha("123456789"))
