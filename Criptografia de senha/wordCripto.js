
//Função destinada para criar uma senha aleatória
function criptoPasswordGenerator(passwordLength) {

    //Vai criar uma nova senha
    let newPassword = '' 

    //Se quiser pode adicionar caracter especial e numeros como strings
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#?çÇ$%&0123456789' 
    
    //Concatenar o resultado da nova senha com os caracteres disponiveis para uso de forma aleatória.
    for (let i = 0; i < passwordLength; i++) { 
        newPassword += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    
    //retorna o resultado para a nova senha que vai ser usada pelo usuário.
    return newPassword
}
console.log(criptoPasswordGenerator(12))





