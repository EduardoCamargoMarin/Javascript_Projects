
//Entrada de dados player 01
let player01Choice = 5

//Entrada de dados player 02
let player02Choice = 6


//Numero vencedor aleatório
let winnerNumber = parseInt(Math.random()*10)

if(player01Choice == winnerNumber) {
    console.log(`Player 01 wins the match!`)
}
else if (player02Choice == winnerNumber) {
    console.log(`Player 02 wins the match`)
}
else {
    console.error(`${winnerNumber} - Try again!`)
}

