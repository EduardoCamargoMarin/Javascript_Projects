
function calcular() {
    //Entrada de dados
    const plate01 = document.getElementById('plate01').checked
    const plate02 = document.getElementById('plate02').checked
    const plate03 = document.getElementById('plate03').checked
    const plate04 = document.getElementById('plate04').checked

    const payMoney = document.getElementById('payMoney').checked
    const payCard = document.getElementById('payCard').checked

    const sectorA = document.getElementById('sectorA').checked
    const sectorB = document.getElementById('sectorB').checked
    const sectorC = document.getElementById('sectorC').checked

    const inputAddress = document.getElementById('inputAddress').value
//==========================================================================
    //Saida de dados
    const outputOrder = document.getElementById('outputOrder')
    const outputPayment = document.getElementById('outputPayment')
    const outputTip = document.getElementById('outputTip')
    const outputTotal = document.getElementById('outputTotal')
    const outputAddress = document.getElementById('outputAddress')

    //Determinar os valores de cada item
    //Precisa ser vinculada com o valor que o usuário determine.
    plateBill01 = 15
    plateBill02 = 13
    plateBill03 = 20
    plateBill04 = 17

    sectorATip = 3
    sectorBTip = 5
    sectorCTip = 7

    //Condições do programa

    //Criar uma condição para caso tenha mais de uma marmita selecionada.
}