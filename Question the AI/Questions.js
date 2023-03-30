// Criar um conceito do funcionamento de uma IA.
//Todas as possíveis perguntas e comandos.
const questions = [
    'What is your name?',
    'How old are you?',
    'Where are you?',
    'Are you close?'
]

//Todas as possíveis respostas para as perguntas ou comando
const answer = [
    'I am an AI in development',   
    '28 years old',
    'Inside the network',
    'away'
]

//Usuário realizando a ação de perguntar ou dar o comando.
let questionAI = 'What is your name?'

//AI respondendo.
if(questionAI === questions[0]) {
    console.log(answer[0])
}