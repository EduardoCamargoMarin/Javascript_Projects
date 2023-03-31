//Criar uma formula que deva utilizar o try catch para tratamento de erros.

    let X = 1
    let Y = -10
    let Z = 2

    
try{
    let deltaFormula =Number((Y**2) - (4*X*Z))
    let firstRoot =Number(((Y*(-1)) + Math.sqrt(Number(deltaFormula))) / (2*X))
    let secondRoot = Number(((Y*(-1)) - Math.sqrt(Number(deltaFormula))) / (2*X))

} 
catch (error) {  
    if(Number.isNaN(firstRoot) || Number.isNaN(secondRoot)) {
        console.log("Change de variables to numbers!",error)
    }
}

let deltaFormula =Number((Y**2) - (4*X*Z)) // ok
let squareRoot = Math.sqrt(deltaFormula)
let firstResult = Number(Y*(-1) + squareRoot) / 2 * X
let secondResult = Number(Y*(-1) - squareRoot) / 2 * X
console.log(firstResult)
console.log(secondResult)