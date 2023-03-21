//Criar um sistema de criptografia de senha

//Usuários do sistema
let users = []
users.push('admin')
//Senha dos usuários
let passwords = []
passwords.push(1234)

let passwordCripto = Math.random(passwords).toFixed(1)*36198875
let finalCripto = Math.ceil(passwordCripto + Math.random(passwords).toFixed(1)*36198875)

console.log(finalCripto)

let showUserAll = {
    login: users,
    Password: passwords,
    Cripto_Password: [finalCripto],
}
console.table(showUserAll)