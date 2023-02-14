
function addInfo() {
    //Entrada de dados para trazer as informações do menu
    const plateName01 = document.getElementById('inputPlate01').value
    const plateName02 = document.getElementById('inputPlate02').value
    const plateName03 = document.getElementById('inputPlate03').value
    const plateName04 = document.getElementById('inputPlate04').value

    const platePrice01 = document.getElementById('inputPrice01').value
    const platePrice02 = document.getElementById('inputPrice02').value
    const platePrice03 = document.getElementById('inputPrice03').value
    const platePrice04 = document.getElementById('inputPrice04').value

    const nameSectorA = document.getElementById('inputSectorA').value
    const nameSectorB = document.getElementById('inputSectorB').value
    const nameSectorC = document.getElementById('inputSectorC').value

    //saida de dados
    const outputPlateName01 = document.getElementById('outputPlate01')
    const outputPlateName02 = document.getElementById('outputPlate02')
    const outputPlateName03 = document.getElementById('outputPlate03')
    const outputPlateName04 = document.getElementById('outputPlate04')

    const outputPriceValue01 = document.getElementById('outputPlate01')
    const outputPriceValue02 = document.getElementById('outputPlate02')
    const outputPriceValue03 = document.getElementById('outputPlate03')
    const outputPriceValue04 = document.getElementById('outputPlate04')

    const outputSectorName01 = document.getElementById('outputSectorA')
    const outputSectorName02 = document.getElementById('outputSectorB')
    const outputSectorName03 = document.getElementById('outputSectorC')

    

}








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

    //Condições do programa

    //Criar uma condição para caso tenha mais de uma marmita selecionada.
}