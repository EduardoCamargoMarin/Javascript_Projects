function calculadoraBinaria(decimalNumber) {
    let binaryNumber = ''

    while(decimalNumber > 0) {
        let total = decimalNumber % 2

        binaryNumber = total + binaryNumber

        decimalNumber = Math.floor(decimalNumber / 2)
    }
    return binaryNumber
}

console.log(calculadoraBinaria(123))