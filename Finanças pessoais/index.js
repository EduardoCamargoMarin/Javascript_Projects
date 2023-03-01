
function calcular() {
    const salary = document.getElementById('inputSalary').value 
    const billName = document.getElementById('inputBillName').value
    const billPrice = document.getElementById('inputBillPrice').value

    const resultBillName = document.getElementById('outputBillName')
    const resultBillPrice = document.getElementById('outputBillPrice')
    const resultSalary = document.getElementById('outputSalary')

    let resposta = ""
    let numContas = 0
    let valTotal = 0 

    numContas++
    valTotal = valTotal + billPrice
    resposta = resposta + billName + "R$:" + billPrice + "\n"
    resultBillName.innerText = `${resposta}----------------------------------`
    resultBillPrice.innerText = `${numContas} Conta - Total R$: ${valTotal.toFixed(2)}`
}