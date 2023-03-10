//Banco de "dados" :p
//===============================================================================
//let d4  = [1, 2, 3]
//let d6  = [1, 2, 3, 4, 5, 6]
//let d8  = [1, 2, 3, 4, 5, 6, 7, 8]
//let d10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//let d12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//let d20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
//===============================================================================

//Gerar numeros aleatórios para cada dado.
let d4Result = parseInt(Math.random()*3)
let d6Result = parseInt(Math.random()*6)
let d8Result = parseInt(Math.random()*8)
let d10Result = parseInt(Math.random()*10)
let d12Result = parseInt(Math.random()*12)
let d20Result = parseInt(Math.random()*20)




if(d4Result == 0 || d6Result == 0 || d8Result == 0 || d10Result == 0 || d12Result == 0 || d20Result == 0) {
console.log(`===========\nD4 RESULT: ${d4Result + 1}`)
console.log(`===========\nD6 RESULT: ${d6Result + 1}`)
console.log(`===========\nD8 RESULT: ${d8Result + 1}`)
console.log(`===========\nD10 RESULT: ${d10Result + 1}`)
console.log(`===========\nD12 RESULT: ${d12Result + 1}`)
console.log(`===========\nD20 RESULT: ${d20Result + 1}\n===========`)
}
else {
console.log(`===========\nD4 RESULT: ${d4Result}`)
console.log(`===========\nD6 RESULT: ${d6Result}`)
console.log(`===========\nD8 RESULT: ${d8Result}`)
console.log(`===========\nD10 RESULT: ${d10Result}`)
console.log(`===========\nD12 RESULT: ${d12Result}`)
console.log(`===========\nD20 RESULT: ${d20Result}\n===========`)
}



