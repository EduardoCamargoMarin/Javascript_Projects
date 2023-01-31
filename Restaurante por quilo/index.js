
function calcular() {
    const buffetPrice = document.getElementById('inputBuffetPrice').value // preço do buffet
    const plateWeight = document.getElementById('inputWeight').value // consumo
    const service = document.getElementById('inputService').value // taxa
    const bill = document.getElementById('inputBillPortion').value // dividir a conta

    const billCount = (buffetPrice / 1000) * plateWeight // a conta total
    const billService = billCount * (1 + (service/100)) // conta total + serviço
    const billSplit = billService / bill // conta + serviço dividido entre as pessoas.

    const resultPriceBuffet = document.getElementById('outputBuffet')
    const resultClient = document.getElementById('outputClient')
    const resultService = document.getElementById('outputService')

    resultPriceBuffet.innerText = `Valor da conta: ${billService.toFixed(2)} `
    resultClient.innerText = `Dividir:  ${bill}`
    resultService.innerText = `Total:  ${billSplit.toFixed(2)}`


    



}