// Gerar um relatório de todos os atendimentos gerados no dia dos clientes pela área web.
// As informações dados devem conter {Nome,CPF, Produto, Valor, Metodo de pagamento}.


// ==================================================
//                   Parte 01
// ==================================================
function registrar() {
    //Entrada de dados
    const clientName = document.getElementById('clientName').value
    const clientCPF = document.getElementById('clientCPF').value
    const productName = document.getElementById('productName').value
    const productPrice = document.getElementById('price').value
    const payment = document.getElementById('payment').value
    const btn = document.getElementById('result')


    //Saida de dados
    const outputClientName = document.getElementById('outputClientName')
    const outputCPF = document.getElementById('outputCPF')
    const outputProduct = document.getElementById('outputProduct')
    const outputPrice = document.getElementById('outputPrice')
    const outputPayment = document.getElementById('outputPayment')
    const report = document.getElementById('report')

    outputClientName.innerText = `${clientName}`
    outputCPF.innerText = `${clientCPF}`
    outputProduct.innerText = `${productName}`
    outputPrice.innerText = `${productPrice}`
    outputPayment.innerText = `${payment}`

// ==================================================
//                   Parte 02
// ==================================================

let attendanciesReport = []

attendanciesReport.push(clientName, clientCPF,productName,productPrice,payment)

console.log(attendanciesReport) //Validando se o resultado fica salvo na array.

btn.addEventListener("click", () =>{

    for(let i = 0; i < attendanciesReport.length; i++){
        attendanciesReport.forEach(function(aa,i) {
            report.innerText = `${i+1}° ${aa}`
        })
    }

})}

//Precisa finalizar - está trazendo apenas o ultimo elemento.



